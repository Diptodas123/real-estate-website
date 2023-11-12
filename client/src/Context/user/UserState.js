import { useState } from "react";
import UserContext from "./UserContext.js";

const UserState = (props) => {
    const getUser = async () => {
        const response = await fetch("http://localhost:8000/api/auth/getuser", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
        });

        const json = await response.json();
        return json;
    }

    return (
        <UserContext.Provider value={{ getUser }}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserState;