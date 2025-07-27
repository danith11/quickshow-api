import { Inngest } from "inngest";

export const inngest = new Inngest({ id: "movie-ticket-booking" });

// Save user data to database
const syncUserCreation = inngest.createFunction(
  {
    id: "sync-user-from-clerk",
  },
  { event: "clerk/user.created" }
);

export const functions = [];
