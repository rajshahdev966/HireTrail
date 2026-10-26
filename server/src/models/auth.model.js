import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        required: true, 
        type: String, 
        maxLength: 50,
    },
    email: {
        required: true,
        type: String,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    passwordHash: {
        required: true,
        type: String
    },
    phoneNumber: {
        type: String,
        required: true,
        match: [/^[6-9]\d{9}$/, "Please add valid indian number"]
    },
    role: {
        type: String,
        enum: ["candidate", "recruiter"],
        default: "candidate",
        required: true,
    },
    refreshToken: {
        type: String,
        default: null,
    },

})


const userModel = mongoose.model("users", userSchema)

export default userModel;
