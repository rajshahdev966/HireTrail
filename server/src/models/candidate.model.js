import mongoose from "mongoose";

const candidateSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        minLength: 3
    }, 
    //email, phoneNumber can be taken directly from users model
    location: {
        type: String,
        required:true
    },
    yourSkills: {
        type: String,
        required: true,
        maxLength: 500
    },
    relevantExperience:{
        type: String,
        required: true,
        maxLength: 2000
    },
    portfolioUrl: {
        type: String,
        match: [/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/, "Invalid URL"]
    },
    resumeUrl: {
        type: String,
        match: [/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/, "Invalid URL"]
    },
    coverLetter: {
        type: String,
        maxLength: 2000
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    }
});

const candidateModel = mongoose.model("candidates", candidateSchema);

export default candidateModel