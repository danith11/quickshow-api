import express from "express";
import cors from "cors";
import "dotenv/config";
import { clerkMiddleware } from "@clerk/express";
import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/index.js";
import connectDB from "./configs/db.js";
import showRouter from "./routes/showRoutes.js";
import bookingRouter from "./routes/bookingRoutes.js";

const app = express();
const port = 3000;

await connectDB();

//Middleware
app.use(express.json());
app.use(cors());
app.use(clerkMiddleware());

// API Routes
app.get("/", (req, res) => res.send("Server is live!!!"));
app.use("/api/inngest", serve({ client: inngest, functions }));

app.use("/api/show", showRouter);
app.use("/api/booking", bookingRouter);

app.listen(port, () =>
  console.log(`Server is listing at http://localhost:${port}`)
);
