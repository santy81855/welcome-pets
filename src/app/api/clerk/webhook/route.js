/*
Webhook endpoint for the clerk authentication service.
set up to receive webhooks for user creation, updates, and deletion.
*/

import { WebhookEvent } from "@clerk/nextjs/server";
import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { prisma } from "@/lib/prisma";

export async function POST(request) {
    const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET
    if (!WEBHOOK_SECRET) {
        console.log("No webhook secret");
        return Response.json({ message: "No webhook secret" });
    }

    const payload = await request.json();
    if (!payload) {
        return Response.json({ message: "No payload" });
    }
    // get the hook type
    const { data, type } = payload;

    // Get the headers
    const headerPayload = headers();
    const svix_id = headerPayload.get("svix-id");
    const svix_timestamp = headerPayload.get("svix-timestamp");
    const svix_signature = headerPayload.get("svix-signature");

    // If there are no headers, error out
    if (!svix_id || !svix_timestamp || !svix_signature) {
        return Response.json({ message: "Error occurred: No svix headers.", status: 400 });
    }
    // create new Svix webhook instance
    const wh = new Webhook(WEBHOOK_SECRET);

    let evt;
    const body = JSON.stringify(payload);
    // Verify the payload with the headers
    try {
        evt = wh.verify(body, {
            "svix-id": svix_id,
            "svix-timestamp": svix_timestamp,
            "svix-signature": svix_signature,
        });
    } catch (err) {
        console.error('Error verifying webhook:', err);
        return Response.json({ message: "Error occurred.", status: 400 });
    }

    if (!type) {
        return Response.json({ message: "No type" });
    }
    if (!data) {
        return Response.json({ message: "No data" });
    }
    const clerkId = data.id;
    // if a user was just deleted delete the user from the database with prisma and mongodb
    if (type === 'user.deleted') {
        // ensure that the user exists in the database
        const user = await prisma.user.findUnique({
            where: {
                clerkId: clerkId,
            }
        });
        if (!user) {
            return Response.json({ message: "User does not exist." });
        }
        // delete the user from the database
        const deletedUser = await prisma.user.delete({
            where: {
                clerkId: clerkId,
            }
        });
        if (!deletedUser) {
            return Response.json({ message: "Failed to delete user." });
        }
        console.log("Deleted user: " + deletedUser);
    }
    // get the user's primary email address
    const primaryEmailId = data.primary_email_address_id;
    const emailAddressArray = data.email_addresses;
    const primaryEmailObject = emailAddressArray.find(obj => obj.id === primaryEmailId);
    if (!primaryEmailObject) {
        return Response.json({ message: "No primary email." });
    }
    const email = primaryEmailObject.email_address;
    if (!email) {
        return Response.json({ message: "No email address" });
    }
    var username = data.username;
    const createdAt = data.created_at;
    const updatedAt = data.updated_at;
    // if a user was just created add the user to the database with prisma and mongodb
    if (type === 'user.created') {
        // if username is null, generate random username
        if (!username) {
            const randomUsername = Math.random().toString(36).substring(7);
            username = randomUsername;
        }
        // ensure that the user doesn't already exist in the database
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        });
        if (user) {
            return Response.json({ message: "User already exists." });
        }
        // create the user in the database
        const newUser = await prisma.user.create({
            data: {
                email: email,
                username: username,
                createdDate: createdAt,
                updatedDate: createdAt,
                role: "user",
                clerkId: clerkId
            }
        });
        if (!newUser) {
            return Response.json({ message: "Failed to create user." });
        }
        console.log("Created user: " + newUser);
    }
    // if a user was just updated update the user in the database with prisma and mongodb
    if (type === 'user.updated') {
        if (!username) {
            const randomUsername = Math.random().toString(36).substring(7);
            username = randomUsername;
        }
        // ensure that the user exists in the database
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        });
        if (!user) {
            return Response.json({ message: "User does not exist." });
        }
        // update the user in the database
        const updatedUser = await prisma.user.update({
            where: {
                email: email
            },
            data: {
                username: username,
                updatedDate: updatedAt,
                clerkId: clerkId
            }
        });
        if (!updatedUser) {
            return Response.json({ message: "Failed to update user." });
        }
        console.log("Updated user: " + updatedUser);
    }
    return Response.json({ message: "Success" });

}

export async function GET() {
    return Response.json({ message: "Hello World" });
}