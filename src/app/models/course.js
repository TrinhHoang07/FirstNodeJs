const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseDelete = require('mongoose-delete');
const slug = require('mongoose-slug-generator')


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


// add plugins
mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
    overrideMethods: 'all',
    deletedAt: true,
});

module.exports = mongoose.model('Course', Course);