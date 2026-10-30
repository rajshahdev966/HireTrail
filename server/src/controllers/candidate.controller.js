import { matchedData } from "express-validator"
import candidateModel from "../models/candidate.model";


const addCandidateController = async (req, res) => {
    try {
        const validatedData = matchedData(req, {
            locations: ["body"]
        });

        const candidate = await candidateModel.create({
            ...validatedData,
            user: req.user.id
        });

        
    } catch (error) {

    }


}