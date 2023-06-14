import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { profileThunk, logoutThunk, updateUserThunk } from "./services/auth-thunks";

function ProfileScreen() {
    const { currentUser } = useSelector((state) => state.user);
    const [profile, setProfile] = useState(currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const saveProfile = async () => {
        await dispatch(updateUserThunk(profile));
    };

    useEffect(() => {
        const loadProfile = async () => {
            const { payload } = await dispatch(profileThunk());
            setProfile(payload);
        };
        loadProfile();
    }, [dispatch]);

    const handleFirstNameChange = (event) => {
        const newProfile = {
            ...profile,
            firstName: event.target.value,
        };
        setProfile(newProfile);
    };

    const handleLastNameChange = (event) => {
        const newProfile = {
            ...profile,
            lastName: event.target.value,
        };
        setProfile(newProfile);
    };

    const handleLogout = () => {
        dispatch(logoutThunk());
        navigate("/login");
    };

    return (
        <div>
            <h1>Profile Screen</h1>
            {profile && (
                <div>
                    <div>
                        <label>First Name</label>
                        <input
                            type="text"
                            value={profile.firstName}
                            onChange={handleFirstNameChange}
                        />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input
                            type="text"
                            value={profile.lastName}
                            onChange={handleLastNameChange}
                        />
                    </div>
                </div>
            )}
            <button onClick={handleLogout}>Logout</button>
            <button onClick={saveProfile}>Save</button>
        </div>
    );
}

export default ProfileScreen;
