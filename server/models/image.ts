import * as mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
    contentType: String,
    path:String,
    image: String
});

const Image = mongoose.model('Image', imageSchema);

export default Image;
