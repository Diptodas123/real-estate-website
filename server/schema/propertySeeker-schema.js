import mongoose from "mongoose";

const propertySeeker=mongoose.Schema({

});

const seeker=mongoose.model("seeker",propertySeeker);
export default seeker;

