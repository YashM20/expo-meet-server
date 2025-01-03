const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const ParticipantSchema = new mongoose.Schema({
//     userId: String,
//     name: String,
//     photo: String,
//     socketId: String,
//     micOn: Boolean,
//     videoOn: Boolean
// });

// const SessionSchema = new mongoose.Schema({
//     sessionId: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     participants: [ParticipantSchema]
// }, { timestamps: true });
const ParticipantSchema = new Schema({
    userId: { type: String, default:"" },
    name: { type: String, default:"" },
    socketId: { type: String, default:"" },
    photo: { type: String, default:"" },
    micOn: { type: Boolean, default: false },
    videoOn: { type: Boolean, default: false },
});

const SessionSchema = new Schema({
    sessionId: { type: String, required: true, unique: true },
    participants: [ParticipantSchema]
}, { timestamps: true });


module.exports = mongoose.model('Session', SessionSchema);
