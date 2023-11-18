import express from "express";
import fetchUser from "../middleware/fetchUser.js";
import Property from "../schema/propertySchema.js";
const router = express.Router();

//ROUTE 1:POST request to post a property. Login required
router.post("/postproperty",fetchUser, async (req, res) => {
    try {
        const property=await Property.create({

        });
    } catch (error) {
        console.log(error.message);
        return res.status(500).send("Internal Server error");
    }
});

export default router;