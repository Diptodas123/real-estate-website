import React from "react"
import Sidebar from "../Sidebar/Sidebar"
import "../Shared_Container.css"
import "../AdminPages/AdminPageStyles/AdminBlogPage.css"
import TextField from '@mui/material/TextField';


const AdminBlogPage = () => {
    return (
        <>
            <Sidebar />
            <div className="admin-main-container">
                <div className="dashboard-main container">
                    <h2 className="ml-2"><strong className="admin-page-main-headers">Blog Page</strong></h2>

                    
                </div>
            </div>
        </>
    )
}
export default AdminBlogPage;