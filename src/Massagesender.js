import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./Massagesender.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import db from "./firebase";
import firebase from "firebase";
import { useStateValue } from "./Stateprovider";

function Massagesender() {
  const [{ user }, dispatch] = useStateValue();
  const [Input, setInput] = useState("");
  const [Image, setImage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: Image,
      massage:Input
    });
    setInput("");
    setImage("");
  };

  return (
    <div className="Massagesender">
      <div className="Massagesender_top">
        <Avatar />
        <form>
          <input
            value={Input}
            onChange={(e) => setInput(e.target.value)}
            className="Massagesender_input"
            placeholder="What's on your mind"
          />
          <input
            value={Image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Image URL (Optional)"
          />
          <button onClick={handleSubmit} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>

      <div className="Massagesender_bottom">
        <div className="Massagesender_option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>

        <div className="Massagesender_option">
          <PhotoLibraryIcon style={{ color: "Green" }} />
          <h3>Photo/Video</h3>
        </div>

        <div className="Massagesender_option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default Massagesender;
