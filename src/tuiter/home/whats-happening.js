import React, { useState } from "react";
// import {createTuit} from "./tuits/reducers/tuits-reducer";
import { createTuitThunk } from "./services/tuit-thunks";
import { useDispatch } from "react-redux";
import { AiOutlinePicture } from 'react-icons/ai';
import { HiOutlineGift } from 'react-icons/hi';
// import { MdFormatListBulleted } from 'react-icons/md';
import { BsEmojiSmile } from 'react-icons/bs';
import { TiCalendar } from 'react-icons/ti';
import { HiOutlineLocationMarker } from 'react-icons/hi';

const WhatsHappening = () => {
  let [whatsHappening, setWhatsHappening] = useState('');
  const dispatch = useDispatch();
  const tuitClickHandler = () => {
    const newTuit = {
      topic: "Finance",
      username: "Stephano",
      title: "What's happening? Find out here!",
      time: "Just now",
      image: "businessmajor.jpeg",
      liked: false,
      replies: 0,
      retuits: 0,
      likes: 0,
      dislikes: 0,
      handle: "businessmajor",
      tuit: whatsHappening
    }
    dispatch(createTuitThunk(newTuit));
    setWhatsHappening("");
  }

  return (
    <div className="row">
      <div className="col-auto">
        <img src={require(`./images/businessmajor.jpeg`)} width={60} alt="Business Major" className="float-end rounded-circle" />
      </div>
      <div className="col-10">
        <textarea
          value={whatsHappening}
          placeholder="What's happening?"
          className="form-control border-1"
          onChange={(event) => setWhatsHappening(event.target.value)}
        ></textarea>
        <div>
          <button
            className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
            onClick={tuitClickHandler}>
            Tuit
          </button>
          <div className="text-primary fs-2">
            <AiOutlinePicture className="me-3" color="grey" />
            <HiOutlineGift className="me-3" color="grey" />
            <BsEmojiSmile className="me-3" color="grey" />
            <TiCalendar className="me-3" color="grey" />
            <HiOutlineLocationMarker className="me-3" color="grey" />
          </div>
        </div>
      </div>
      <div className="col-12">
        <hr />
      </div>
    </div>
  );
}

export default WhatsHappening;
