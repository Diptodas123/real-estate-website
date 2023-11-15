import { useState } from "react";
import UserContext from "./UserContext.js";

const UserState = (props) => {
    const [userData, setUserData] = useState({ username: "", email: "", phone: "" });

    const setUser = async () => {
        const response = await fetch("http://localhost:8000/api/auth/getuser", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
        });

        const json = await response.json();
        setUserData({ username: json.username, email: json.email, phone: json.phone });
    }

    return (
        <UserContext.Provider value={{ setUser, userData }}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserState;