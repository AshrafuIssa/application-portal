const mongoose = require('mongoose')

const graduateSchema = new mongoose.Schema(
    {
        surname: {
            type: String,
            required: true
        },
        givenNames: {
            type: String,
            required: true
        },
        whatsappNumber: {
            type: String,
            required: true 
        },
        dateOfBirth: {
            type: String,
            required: true
        },
        gender: {
            type: String,
            requires: true
        },
        nationality: {
            type: String,
            required: true
        },
        intendedProgram: {
            type: String,
            required: true 
        },
        previousDegree: {
            type: String,
            required: true
        },
        gpa: {
            type: String,
            required: true 
        },
        englishTestName: {
            type: String,
            required: true
        },
        englishProficiencyScore: {
            type: String,
            required: true 
        }
    }
)

module.exports = mongoose.model('Graduate', graduateSchema)