import React from "react";
import { useDispatch } from "react-redux";
import { updateTuitThunk } from "../services/tuit-thunks";
import { FaHeart, FaThumbsDown } from "react-icons/fa";

const TuitStats = ({ tuit }) => {
    const dispatch = useDispatch();

    const handleLike = () => {
        dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1 }));
    };

    const handleUnlike = () => {
        dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes - 1 }));
    };

    return (
        <div className="row mt-2">
            <div className="col">
                <i className="bi bi-chat-square me-2"></i>
                {tuit.replies}
            </div>

            <div className="col">
                <i className="bi bi-arrow-repeat me-2"></i>
                {tuit.retuits}
            </div>

            <div className="col">
                <FaHeart className="text-danger" onClick={handleLike} />
                <span className="ms-2">{tuit.likes}</span>
            </div>

            <div className="col">
                <FaThumbsDown className="text-danger" onClick={handleUnlike} />
                <span className="ms-2">{tuit.likes}</span>
            </div>

            <div className="col">
                <i className="bi bi-box-arrow-up-right me-2"></i>
            </div>
        </div>
    );
};

export default TuitStats;
