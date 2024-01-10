
import express from "express";
import userAuth from "../middlewares/authMiddleware.js";
import { createJobController,getAllJobsController,updateJobController,deleteJobController,jobStatsController   } from "../controllers/jobsController.js";
const router = express.Router();

//routes

//GET JOBS || GET
router.get("/all", userAuth, getAllJobsController);


// CREATE JOB || POST
router.post("/create", userAuth, createJobController);

// //UPDATE JOBS ||  PATCH
router.patch("/update/:id", userAuth, updateJobController);

// //DELETE JOBS || DELETE
router.delete("/delete/:id", userAuth, deleteJobController);

// // JOBS STATS FILTER || GET
router.get("/stats", userAuth, jobStatsController);


export default router;