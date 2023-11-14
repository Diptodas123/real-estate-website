import User from "../schema/userSchema.js";

export const getUser = async (req, res) => {
    try {
        
        const user = await User.findOne({ _id: req.user.id });

        if (!user) {
            return res.status(400).json({ error: "User not found" });
        }

        return res.status(200).json(user);
    } catch (error) {
        console.log(error.message);
        return res.status(500).send("Internal Server error");
    }
}