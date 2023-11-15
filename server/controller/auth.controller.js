import User from "../schema/userSchema.js";

export const getAllUsers = async(req, res) => {
    try {
        const users=await User.find({});
        if(!users){
            return res.send("No user found");
        }

        return res.status(200).json({users});
    } catch (error) {
        console.log(error.message);
        return res.status(500).send("Internal Server error");
    }
}