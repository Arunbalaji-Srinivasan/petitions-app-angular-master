import * as mongoose from 'mongoose';

const petitionSchema = new mongoose.Schema({
  //_id: mongoose.Schema.Types.ObjectId,
    title: String,
    target: String,
  description: String,
  username: String,
  category: String,
  //imgPath: String,
  dateOfFiling: String,
  numberOfPeopleSigned: Number,
  targetToBeAcheived: Number
 // imageFile: String
});

const Petition = mongoose.model('Petition', petitionSchema);

export default Petition;
