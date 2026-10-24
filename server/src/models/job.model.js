import mongoose from "mongoose";

const jobSchema = new moongose.Schema({
    title: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 50,
    },
    department: {
        type: String,
        required: true,
        enum: ["Design", "Engineering", "Marketing", "Customer Success"]
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
        enum: ["Remote", "Hybrid", "On-site"]
    },
    minimumSalary:{
        currency: {
            type: String,
            enum: ["Rs", "$"],
            default: "$"
        },
        amount: {
            type: Number,
            min: 0,
            required: true,
            validate :{
                validator: Number.isInteger,
                message: "{VALUE} is not of integer type"
            }
        }
    },
    maximumSalary:{
        currency: {
            type: String,
            enum: ["Rs", "$"],
            default: "$"
        },
        amount: {
            type: Number,
            min: 0,
            required: true,
            validate :{
                validator: Number.isInteger,
                message: "{VALUE} is not of integer type"
            }
        }
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
    requirements:{
        type: String,
        required: true,
        minLength: 50,
        maxLength: 2500
    },
    benifitsAndPerks: {
        type: String,
    },
    status: {
        type: String,
        enum: ["Draft", "Published", "Closed"],
        default: "Draft"

    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    }

}, {
    timestamps: true
});


const jobModel = mongoose.model("jobs", jobSchema);


export default jobModel;