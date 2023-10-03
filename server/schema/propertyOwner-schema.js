import mongoose from "mongoose";

const propertyOwner=mongoose.Schema({

});

const owner=mongoose.model("owner",propertyOwner);
export default owner;