import Petition from '../models/petition';
import BaseCtrl from './base';
import * as multer from 'multer';
import * as fs from 'fs';
const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');



export default class PetitionCtrl extends BaseCtrl {
  model = Petition;

  
  
  // storage = multer.diskStorage({
    
  //   destination: (req, file, cb) => {
  //     console.log("inside disk storage"),
  //     cb(null, 'uploads');
  //   },
  //   filename: (req, file, cb) => {
  //     console.log("inside filename");
  //     const fileName = file.originalname.toLowerCase().split(' ').join('-');
  //     cb(null, fileName)
  //   }
  // });

  // upload = multer({
    
  //   storage: this.storage,
  //   // limits: {
  //   //   fileSize: 1024 * 1024 * 5
  //   // },
  //   fileFilter: (req, file, cb) => {
  //     if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
  //       cb(null, true);
  //     } else {
  //       cb(null, false);
  //       return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
  //     }
  //   }
  // });

  // insertPetition = (this.upload.single('imageFile'),(req, res)=>{
  //   console.log("inside insertion");
  //   const url = req.protocol + '://' + req.get('host')
  //   const petitiion = new Petition({
  //     _id: new mongoose.Types.ObjectId(),
  //     title: req.body.title,
  //     target: req.body.target,
  //     description: req.body.description,
  //     username: req.body.username,
  //     category: req.body.category,
  //     dateOfFiling: req.body.dateOfFiling,
  //     numberOfPeopleSigned: req.body.numberOfPeopleSigned,
  //     targetToBeAcheived: req.body.targetToBeAcheived,
  //     imageFile: url + '/uploads/' + req.file.filename
  //   });

  //   petitiion.save().then(result => {

  //     console.log(result);
  //     res.status(201).json({
  //       message: "User registered successfully!",
  //       userCreated: {
  //         title: result.title,
  //         target: result.target,
  //         description: result.description,
  //         username: result.username,
  //         category: result.category,
  //         dateOfFiling: result.dateOfFiling,
  //         numberOfPeopleSigned: result.numberOfPeopleSigned,
  //         targetToBeAcheived: result.targetToBeAcheived,
  //         imageFile: result.imageFile
  //       }
  //     })
  //   }).catch(err =>{
  //     console.log(err);
  //     res.status(500).json({
  //       error: err
  //     });
  //   })
  // })
  
 

  
}
