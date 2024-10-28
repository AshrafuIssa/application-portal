const mongoose = require('mongoose')

const kapSchema = new mongoose.Schema(
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
        intendedCourse: {
            type: String,
            required: true
        },
        graduationYear: {
            type: String,
            required: true 
        },
        gpa: {
            type: String,
            required: true
        }
    }
)

module.exports = mongoose.model('Kap', kapSchema)