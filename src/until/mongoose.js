module.exports = {
    multiple: function (mongooses) {
        return mongooses.map(mongoose => mongoose.toObject());
    },
    single: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    }
}