const Undergraduate = require('../models/undergraduate.model')
const asyncHandler = require('express-async-handler')

// API endpoint to receive data from frontend
const undergraduateData = asyncHandler(async(req, res) => {
    const { surname, givenNames, whatsappNumber, dateOfBirth, gender,nationality, intendedProgram, graduationYear, gpa, englishProficiency, testScores } = req.body

    // saving the data 
    const dataTosave = new Undergraduate({ surname, givenNames, whatsappNumber, dateOfBirth, gender,nationality, intendedProgram, graduationYear, gpa, englishProficiency, testScores })
    await dataTosave.save()

    res.status(201).json({message: "Your information is saved successfully"})
})

//getting all undergraduate students 
const allUndergraduate = asyncHandler(async(req, res) => {
    const undergraduates = await Undergraduate.find().lean()
    if(!undergraduates?.length){
        return res.status(400).json({message: "No users found"})
    }

    res.status(200).json(undergraduates)
})


module.exports = {
    undergraduateData,
    allUndergraduate
}