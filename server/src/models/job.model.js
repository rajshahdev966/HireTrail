import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minLength: 5,
      maxLength: 50,
    },
    department: {
      type: String,
      required: true,
      enum: ["Design", "Engineering", "Marketing", "Customer Success"],
    },
    employmentType: {
      type: String,
      required: true,
      enum: ["Full-time", "Part-time", "Contract", "Internship"],
    },
    location: {
      type: String,
      required: true,
    },
    workplaceType: {
      type: String,
      required: true,
      enum: ["Remote", "Hybrid", "On-site"],
    },
    salary: {
      currency: {
        type: String,
        enum: ["$", "Rs"],
        default: "$",
      },
      minimumSalary: {
        type: Number,
        min: 0,
        required: true,
        validate: {
          validator: Number.isInteger,
          message: "Salary must be a positive integer",
        },
      },
      maximumSalary: {
        type: Number,
        min: 0,
        required: true,
        validate: [
          {
            validator: Number.isInteger,
            message: "Amount must be positive Integer",
          },
          {
            validator: function(value) {
              return value >= this.salary.minimumSalary;
            },
            message: "Maximum salary can't be less than minimum salary",
          },
        ],
      },
    },
    aboutRole: {
      type: String,
      required: true,
      minLength: 50,
      maxLength: 2500,
    },
    responsibilities: {
      type: String,
      required: true,
      minLength: 50,
      maxLength: 2500,
    },
    requirements: {
      type: String,
      required: true,
      minLength: 50,
      maxLength: 2500,
    },
    benifitsAndPerks: {
      type: String,
    },
    status: {
      type: String,
      enum: ["Draft", "Published", "Closed"],
      default: "Draft",
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const jobModel = mongoose.model("jobs", jobSchema);

export default jobModel;
