import jobModel from "../models/job.model.js";

export const createJobController = async (req, res) => {
  const jobContent = req.body;

  const { id } = req.user;

  const job = await jobModel.create({
    title: jobContent.title,
    department: jobContent.department,
    employmentType: jobContent.employmentType,
    location: jobContent.location,
    workplaceType: jobContent.workplaceType,
    salary: {
        currency: jobContent.currency,
        maximumSalary:jobContent.maximumSalarym,
        minimumSalary: jobContent.minimumSalary,
    },
    aboutRole: jobContent.aboutRole,
    responsibilities: jobContent.responsibilities,
    requirements: jobContent.requirements,
    benifitsAndPerks: jobContent.benifitsAndPerks,
    createdBy: id,
    status: "Draft"
  });

  return res.status(201).json({
    message: "Job posted successfully",
    data: {
        job
    }
  })
};

export const publishJobController = async (req, res)=> {
    const {jobId} = req.params;
    
    const job = await jobModel.findById(jobId);

    if(!job){
      return res.status(404).json({
        message: "Job not found"
      })
    }

    await jobModel.findByIdAndUpdate(jobId, {status: "Published"});

    return res.status(200).json({
      message: "Job published successfully"
    })
}

export const closeJobController = async (req, res)=> {
  const {jobId} = req.params;

  const job = await jobModel.findById(jobId)

  if(!job){
    return res.status(404).json({
      message:"Job not found"
    })
  }

  await jobModel.findByIdAndUpdate(jobId, {status: "Closed"});

  return res.status(200).json({
    message: "Job closed successfully"
  })
}

export const deleteJobController = async(req, res)=> {
  const {jobId} = req.params;

  const job = await jobModel.findById(jobId)

  if(!job){
    return res.status(404).json({
      message: "Job not found"
    })
  }

  await jobModel.findByIdAndDelete(jobId)

  return res.staus(200).json({
    message: "Job deleted successfully"
  })
}


