// import React, {useState} from "react";
// import {likeTuit} from "./reducers/tuits-reducer";
import { updateTuitThunk } from "../services/tuit-thunks";
import { useDispatch } from "react-redux";
import { FaHeart } from "react-icons/fa";
import { FaThumbsDown } from "react-icons/fa";

const TuitStats = ({ tuit }) => {

    const dispatch = useDispatch()

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

            <FaHeart
                className="text-danger"
                onClick={() =>
                    dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1 }))
                }
            />
            <span className="ms-2">{tuit.likes}</span>

            <FaThumbsDown
                className="text-danger"
                onClick={() =>
                    dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes - 1 }))
                }
            />
            <span className="ms-2">{tuit.likes}</span>

            <div className="col">
                <i className="bi bi-box-arrow-up-right me-2"></i>
            </div>

        </div>
    )
}

export default TuitStats;