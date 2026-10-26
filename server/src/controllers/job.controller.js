import jobModel from "../models/job.model.js";
import { matchedData } from "express-validator";

export const createJobController = async (req, res) => {
  try {
    const validatedData = matchedData(req, {
      locations: ["body"],
    });

    const job = await jobModel.create({
      ...validatedData,
      createdBy: req.user.id,
    });

    return res.status(201).json({
      message: "Job posted successfully",
      job
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const publishJobController = async (req, res) => {
  const { jobId } = req.params;

  const job = await jobModel.findById(jobId);

  if (job.createdBy.toString() !== req.user) {
    return res.status(401).json({
      message: "Unauthorized Access",
    });
  }

  if (!job) {
    return res.status(404).json({
      message: "Job not found",
    });
  }

  await jobModel.findByIdAndUpdate(jobId, { status: "Published" });

  return res.status(200).json({
    message: "Job published successfully",
  });
};

export const closeJobController = async (req, res) => {
  const { jobId } = req.params;

  const job = await jobModel.findById(jobId);

  if (job.createdBy.toString() !== req.user) {
    return res.status(401).json({
      message: "Unauthorized Access",
    });
  }

  if (!job) {
    return res.status(404).json({
      message: "Job not found",
    });
  }

  await jobModel.findByIdAndUpdate(jobId, { status: "Closed" });

  return res.status(200).json({
    message: "Job closed successfully",
  });
};

export const deleteJobController = async (req, res) => {
  const { jobId } = req.params;

  const job = await jobModel.findById(jobId);

  if (job.createdBy.toString() !== req.user) {
    return res.status(401).json({
      message: "Unauthorized Access",
    });
  }

  if (!job) {
    return res.status(404).json({
      message: "Job not found",
    });
  }

  await jobModel.findByIdAndDelete(jobId);

  return res.staus(200).json({
    message: "Job deleted successfully",
  });
};
