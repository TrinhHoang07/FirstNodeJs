const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const slug = require('mongoose-slug-generator')
mongoose.plugin(slug);

const Course = new Schema({
    name: { type: String },
    description: { type: String },
    thumb_nail: { type: String },
    slug: { type: String, slug: 'name', unique: true },
    video_id: { type: String },
    count_lesson: { type: String },
    time: { type: String },
}, {
    timestamps: true
});

module.exports = mongoose.model('Course', Course);