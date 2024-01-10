import express from "express";
import swaggerUi from 'swagger-ui-express';
import swaggerDoc from "swagger-jsdoc";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import testRoutes from "./routes/testRoutes.js";
import cors from "cors";
import morgan from "morgan";
import authRoutes from "./routes/authRoutes.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";
import "express-async-errors";
import userRoutes from "./routes/userRoutes.js";
import jobsRoutes from "./routes/jobsRoutes.js";
import helmet from 'helmet';
import xss from 'xss-clean';
import mongoSanitize from 'express-mongo-sanitize';
dotenv.config();

//mongodb connection
connectDb();


// swagger api options
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Job Portal Application",
      description: "Node Expressjs Job Portal Application",
    },
    servers: [
      {
        url: "http://localhost:8000",
           // url: "https://nodejs-job-portal-app.onrender.com"
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const spec = swaggerDoc(options);


//rest object
const app = express();

//middlewares
app.use(helmet()); // for securing header section data
app.use(xss());
app.use(mongoSanitize());
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));


//routes
// app.get("/", (req, res) => {
//   res.send("<h1>Welcome to job portal</h1>");
// });
app.use("/api/v1/test", testRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/job", jobsRoutes);


//homeroute root
app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(spec));


// validation middleware

app.use(errorMiddleware);

const port = process.env.PORT || 8000;

//listen
app.listen(port, () => {
  console.log(`Port is ${port}`);
});
