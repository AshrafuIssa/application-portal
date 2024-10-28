const Eap = require('../models/eap.model')
const asyncHandler = require('express-async-handler')

// API endpoint to receive data from frontend
const eapData = asyncHandler(async(req, res) => {
    const { surname, givenNames, whatsappNumber, dateOfBirth, gender,nationality, intendedProgram, intendedCourse, graduationYear, gpa, englishTestName, englishProficiencyScore } = req.body

    // saving the data 
    const dataTosave = new Eap({ surname, givenNames, whatsappNumber, dateOfBirth, gender,nationality, intendedProgram, intendedCourse, graduationYear, gpa, englishTestName, englishProficiencyScore })
    await dataTosave.save()

    res.status(201).json({message: "Your information is saved successfully"})
})

//getting all the kap students 
const allEap = asyncHandler(async(req, res) => {
    const eap = await Eap.find().lean()
    if(!eap?.length){
        return res.status(400).json({message: "No users found"})
    }

    res.status(200).json(eap)
})

module.exports = {
    eapData,
    allEap
}