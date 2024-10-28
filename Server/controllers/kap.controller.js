const Kap = require('../models/kap.model')
const asyncHandler = require('express-async-handler')

// API endpoint to receive data from frontend
const kapData = asyncHandler(async(req, res) => {
    const { surname, givenNames, whatsappNumber, dateOfBirth, gender,nationality, intendedProgram, intendedCourse, graduationYear, gpa } = req.body

    // saving the data 
    const dataTosave = new Kap({ surname, givenNames, whatsappNumber, dateOfBirth, gender,nationality, intendedProgram, intendedCourse, graduationYear, gpa })
    await dataTosave.save()

    res.status(201).json({message: "Your information is saved successfully"})
})

//getting all the kap students 
const allKap = asyncHandler(async(req, res) => {
    const kap = await Kap.find().lean()
    if(!kap?.length){
        return res.status(400).json({message: "No users found"})
    }

    res.status(200).json(kap)
})

module.exports = {
    kapData,
    allKap
}