import express from "express";
import { body, validationResult } from "express-validator";
import fetchUser from "../middleware/fetchUser.js";
import Property from "../schema/propertySchema.js";
const router = express.Router();

//ROUTE 1:POST request to post a property. Login required
router.post("/postproperty", fetchUser, async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() });
    }

    try {
        const property = await Property.create({
            userRef: req.user.id,
            ownerName: req.body.ownerName,
            ownerEmail: req.body.ownerEmail,
            ownerPhn: req.body.ownerPhn,
            propertyName: req.body.propertyName,
            propertyAge: req.body.propertyAge,
            imageUrls: req.body.imageUrls,
            street: req.body.street,
            city: req.body.city,
            state: req.body.state,
            country: req.body.country,
            pincode: req.body.pincode,
            price: req.body.price,
            description: req.body.description,
            bathrooms: req.body.bathrooms,
            bedrooms: req.body.bedrooms,
            parking: req.body.parking,
            furnished: req.body.furnished,
            advertisementType: req.body.advertisementType,
            availability: req.body.availability,
            propertyType: req.body.propertyType
        });
        return res.status(200).json({ success: true, property, msg: "Property posted successfully" });
    } catch (error) {
        console.log(error.message);
        return res.status(500).send("Internal Server error");
    }
});

export default router;