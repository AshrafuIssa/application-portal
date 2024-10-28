const Graduate = require('../models/graduate.model')
const asyncHandler = require('express-async-handler')

// API endpoint to receive data from frontend
const graduateData = asyncHandler(async(req, res) => {
    const { surname, givenNames, whatsappNumber, dateOfBirth, gender,nationality, intendedProgram, previousDegree, gpa, englishTestName, englishProficiencyScore } = req.body

    // saving the data 
    const dataTosave = new Graduate({ surname, givenNames, whatsappNumber, dateOfBirth, gender,nationality, intendedProgram, previousDegree, gpa, englishTestName, englishProficiencyScore })
    await dataTosave.save()

    res.status(201).json({message: "Your information is saved successfully"})
})

//getting all the graduate students 
const allGraduates = asyncHandler(async(req, res) => {
    const graduates = await Graduate.find().lean()
    if(!graduates?.length){
        return res.status(400).json({message: "No users found"})
    }

    res.status(200).json(graduates)
})

// Deleting a single user 
const deleteAGraduate = asyncHandler(async(req, res) => {
    const { id } = req.params

    const deletedGraduate = await Graduate.findByIdAndDelete(id)

    if(!deletedGraduate){
        return res.status(400).json({message: "User not found"})
    }

    res.status(200).json({message: "User deleted successfully"})
})

module.exports = {
    graduateData,
    allGraduates,
    deleteAGraduate
}