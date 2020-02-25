import * as express from 'express';

import CatCtrl from './controllers/cat';
import UserCtrl from './controllers/user';
import PetitionCtrl from './controllers/petition';
import * as multer from 'multer';
import Petition from './models/petition';
const mongoose = require('mongoose');
import * as fs from 'fs';
//import { Petition } from 'client/app/shared/models/petition.model';
export default function setRoutes(app) {

  const router = express.Router();
  console.log('inside routes.ts');
  const catCtrl = new CatCtrl();
  const petitionCtrl = new PetitionCtrl();
  const userCtrl = new UserCtrl();

  // const storage = multer.diskStorage({
  //   destination: (req, file, cb) => {
  //     cb(null, 'uploads');
  //   },
  //   filename: (req, file, cb) => {
  //     const fileName = file.originalname.toLowerCase().split(' ').join('-');
  //     cb(null, fileName)
  //   }
  // });

  // var upload = multer({
  //   storage: storage,
  //   // limits: {
  //   //   fileSize: 1024 * 1024 * 5
  //   // },
  //   fileFilter: (req, file, cb) => {
  //     if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
  //       console.log("file:"+file);
  //       cb(null, true);
  //     } else {
  //       cb(null, false);
  //       return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
  //     }
  //   }
  // });
  // // Cats
  // const petitionCtrl = new PetitionCtrl(
  //   imageFile: 
  // );


//   router.post('/insertPetition', upload.single('imageFile'), (req, res, next) => {
//   console.log("inside insertion");
//   console.log("1"+req.body.title);
//   console.log(req.body.images);
//  // let v = req.body.images;
//  var img = fs.readFileSync(req.body.images.file.path);
//  console.log(img);
//  var encode_image = img.toString('base64');
//  var finalImg = {
//   contentType: req.body.images.file.mimetype,
//   path:req.body.images.
//   file.path,
//   image: new Buffer(encode_image,'base64')
// };
// console.log(finalImg.path);
//  // console.log(JSON.stringify(req.body.images));
//   let v = JSON.parse(req.body.images);
//   console.log(v[0]);
//   console.log(v[1]);
//   console.log("2"+req.body.file.name);
//   //console.log("3"+req.body.imageFile);
//   //console.log(req);
//     const url = req.protocol + '://' + req.get('host')
//     const petitiion = new Petition({
//       _id: new mongoose.Types.ObjectId(),
//       title: req.body.title,
//       target: req.body.target,
//       description: req.body.description,
//       username: req.body.username,
//       category: req.body.category,
//       dateOfFiling: req.body.dateOfFiling,
//       numberOfPeopleSigned: req.body.numberOfPeopleSigned,
//       targetToBeAcheived: req.body.targetToBeAcheived,
//       imageFile: url + '/uploads/' + req.body.file.name

//     });

//     petitiion.save().then(result => {

//       console.log(result);
//       res.status(201).json({
//         message: "User registered successfully!",
//         userCreated: {
//           title: result.title,
//           target: result.target,
//           description: result.description,
//           username: result.username,
//           category: result.category,
//           dateOfFiling: result.dateOfFiling,
//           numberOfPeopleSigned: result.numberOfPeopleSigned,
//           targetToBeAcheived: result.targetToBeAcheived,
//           imageFile: result.imageFile
//         }
//       })
//     }).catch(err =>{
//       console.log(err);
//       res.status(500).json({
//         error: err
//       });
//     })
//   })

  router.route('/cats').get(catCtrl.getAll);
  router.route('/petitions').get(petitionCtrl.getAll);
  router.route('/cats/count').get(catCtrl.count);
  router.route('/cat').post(catCtrl.insert);
  router.route('/petition').post(petitionCtrl.insert);
  router.route('/cat/:id').get(catCtrl.get);
  router.route('/petition/:id').get(petitionCtrl.get);
  router.route('/cat/:id').put(catCtrl.update);
  router.route('/petition/:id').put(petitionCtrl.update);
  router.route('/cat/:id').delete(catCtrl.delete);

  // Users
  router.route('/login').post(userCtrl.login);
  router.route('/users').get(userCtrl.getAll);
  router.route('/users/count').get(userCtrl.count);
  router.route('/user').post(userCtrl.insert);
  router.route('/user/:id').get(userCtrl.get);
  router.route('/user/:id').put(userCtrl.update);
  router.route('/user/:id').delete(userCtrl.delete);

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}
