/* example of how to get user information from clerk on a server component */

import { auth, currentUser, UserButton } from "@clerk/nextjs";

const Page = async () => {
    // Get the userId from auth() -- if null, the user is not logged in
    const { userId } = auth();

    if (userId) {
        // Query DB for user specific information or display assets only to logged in users 
        console.log("user is logged in");
    }

    // Get the User object when you need access to the user's information
    const user = await currentUser()
    // Use `user` to render user details or create UI elements

    return (
        <div>
            <h1>Dashboard</h1>
            <p>{user.firstName}</p>
            <p>{user.lastName}</p>
            <p>{user.emailAddresses[0].emailAddress}</p>
            <UserButton afterSignOutUrl="/" />
        </div>
    );
};

export default Page;