import React, { useContext, useEffect, useRef, useState } from 'react'
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import Menu from '../Menu/Menu';
import "./Profile.css";
import Footer from '../Footer/Footer';
import UserContext from '../../Context/user/UserContext';
import { useNavigate } from 'react-router-dom';
import { app } from '../../firebase';

const Profile = () => {
    const userContext = useContext(UserContext);
    const { userData, setUserData } = userContext;

    const [credentials, setCredentials] = useState({ userName: "", userEmail: "", userPhn: "", userPassword: "" });
    const [file, setFile] = useState(undefined);
    const [filePercentage, setFilePercentage] = useState(0);
    const [fileUploadError, setFileUploadError] = useState(false);
    const [formData, setFormData] = useState({});

    useEffect(() => {
        window.scrollTo(0, 0);
        setCredentials(({ userName: userData.username, userEmail: userData.email, userPhn: userData.phone }));
        if (file) {
            handleFileUpload(file);
        }
        // eslint-disable-next-line
    }, [, file]);

    const navigate = useNavigate();
    const fileRef = useRef(null);

    const handleFileUpload = (file) => {
        const storage = getStorage(app);
        const fileName = new Date().getTime() + file.name;
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on("state_changed", (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setFilePercentage(Math.round(progress));
        }, (error) => {
            setFileUploadError(true);
        }, () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                setFormData({ ...formData, photo: downloadURL });
            })
        });
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }
    const handleProfileUpdate = () => {

    }

    const handleProfileDelete = () => {

    }

    const handleLogOut = async () => {
        localStorage.removeItem("token");
        await setUserData({ username: "", email: "", phone: "", photo: "" });
        navigate("/login");
    }

    return (
        <>
            <Menu />
            <div className='container profile-container'>
                <h1 className='text-center font-weight-bold my-2'>Profile</h1>
                <form onSubmit={handleProfileUpdate} className='profile-form my-4' method='post'>
                    <div className="row">
                        <div className="profile-group col-12">
                            <input
                                accept='image/*'
                                type='file'
                                ref={fileRef}
                                hidden
                                onChange={(e) => setFile(e.target.files[0])}
                            />
                            <img src={formData.photo || userData.photo} alt='Profile-Avatar' onClick={() => fileRef.current.click()} />
                        </div>
                    </div>
                    <div className="row">
                        <div className='profile-group col-12'>
                            <p className='mt-1'>
                                {
                                    fileUploadError ? (
                                        <span className='text-danger'>Error While Uploading the Image</span>
                                    ) : filePercentage > 0 && filePercentage < 100 ? (
                                        <span>{`Uploading: ${filePercentage}%`}</span>
                                    ) : filePercentage === 100 ? (
                                        <span className='text-success'>Image Uploaded Successfully</span>
                                    ) : (
                                        ""
                                    )
                                }
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="profile-group col-12">
                            <input type="text" className="form-control user-mandatory-fields" name="userName" id="userName" placeholder="Username" onChange={onChange} required value={credentials.userName} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="profile-group col-12">
                            <input type="email" className="form-control user-mandatory-fields" name="userEmail" id="userEmail" placeholder="Email" onChange={onChange} required value={credentials.userEmail} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="profile-group col-12">
                            <input type="number" className="form-control user-mandatory-fields" name="userPhn" id="userPhn" placeholder="Phone" onChange={onChange} required value={credentials.userPhn} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="profile-group col-12">
                            <input type="password" className="form-control user-mandatory-fields" name="userPassword" id="userPassword" placeholder="Password" onChange={onChange} required value={credentials.userPassword} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="profile-group col-12">
                            <button type="submit" className="btn btn-purple my-4">Update</button>
                        </div>
                    </div>
                    <div className="row" style={{ marginLeft: "19%", marginRight: "19%" }}>
                        <div className="d-flex justify-content-between col-12">
                            <span className="btn btn-purple" onClick={handleProfileDelete}>Delete account</span>
                            <span onClick={handleLogOut} className="btn btn-purple">Log out</span>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default Profile;