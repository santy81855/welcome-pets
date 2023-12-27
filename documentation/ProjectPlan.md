# **Welcome Pets Documentation**

## **Introduction:**

We are building a web app which simply helps or let’s say makes process easier for pet adoption. 3 types of user will be able to use the app; Adopter, Giver/Guardian & Vets. Various pets can be adopted from including dogs & cats to birds. The guardian can post about the pet which they are willing to give others to adopt which then will be pending and once checked by the system, it will be posted. As many times some unwilling or unnecessary things can be posted by someone so we need to have some approving system in between.

## **Project Overview:**

Talking about key features, we can have various features in upcoming version but for the first version of app, these are the highlight features:

1. Guardian can post maximum of 4 photos of pets which we will show in carousel in pet’s profile including other information about the pet.
1. Guardian/Adopter Messaging
1. Automated Email System
1. User Registration/User Authentication(Login), Logging in or Registering with Google, Facebook options.
1. For the initial version, we only have 2 users - Guardian/Adopter, we will have vet option in second version as it will be easier for us to work(or we can have 3 users in initial version if you want).

## **Technology Stack:**

### **Frontend**

-   ReactJS
-   NextJS 14
-   Bootstrap

### **Backend**

-   NextJS 14 App Router
-   **Authentication:** Clerk
-   **Database:** MongoDB
-   **Image Storage:** AWS S3

### **Hosting**

-   TBD

## **Database Design**

-   **User Table**

    -   UserId (primary key)
    -   Email
    -   Password (hashed and salted)
    -   Username
    -   User Role (normal or veterinarian)
    -   Conversations (optional)
    -   Messages (optional)
    -   Images (optional)
    -   Posts (optional)

-   **Image Table**

    -   ImageId (primary key)
    -   User ID (foreign key to the user table)
    -   Image URL or path
    -   Description (optional)
    -   Upload Date

-   **Conversation Table**

    -   ConversationId (primary key)
    -   ParticipantId1 (foreign key to the user table)
    -   ParticipantId2 (foreign key to the user table)
    -   Conversation Subject (optional)
    -   Creation Date
    -   Last Updated Date

-   **Message Table**

    -   MessageId (primary key)
    -   ConversationId (foreign key to the conversation table)
    -   SenderId (foreign key to the user table)
    -   ReceiverId (foreign key to the user table)
    -   Content
    -   Sent Timestamp

-   **Post Table**
    -   PostId (primary key)
    -   Title
    -   Content
    -   Created Date
    -   Last Updated Date

## **User Flow**

### **Registration Flow**

1. User lands on homepage
1. Clicks on SignIn/Register button
1. Uses email or other provider to create an account
    - If using email:
        - User inputs username, email, password
        - User gets a verification code in their email
        - User account gets created
    - If using provider:
        - User clicks provider link
        - Provider authentication takes over
        - User account gets created
1. If successful, user is redirected to account setup page where they fill out some vital information:

    - choose username if they haven't chosen one yet
    - choose account type
    - choose location
    - choose profile picture
    - (this account setup will also be available to visit from their account settings)

1. If failed, user gets error message and is redirected to the login page again

### **Site Navigation Flow**

1. Logged in user visits their dashboard
