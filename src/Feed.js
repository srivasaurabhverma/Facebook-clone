import React, { useEffect, useState } from "react";
import "./Feed.css";
import db from "./firebase";
import Massagesender from "./Massagesender";
import Post from "./Post";
import StoryReel from "./StoryReel";
function Feed() {
  const [Postes, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
    .orderBy('timestamp','desc')
    .onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });
  }, []);

  return (
    <div className="Feed">
      <StoryReel />
      <Massagesender />
      {Postes.map((post) => (
        <Post
          key={post.data.id}
          message={post.data.massage}
          image={post.data.image}
          timestamp={post.data.timestamp}
          profilePic={post.data.profilePic}
          username={post.data.username}
        />
      ))}
    </div>
  );
}

export default Feed;

// "https://p16-sg-default.akamaized.net/aweme/1080x1080/tiktok-obj/1654140709422081.jpeg"
// image
// "https://i.pinimg.com/736x/4b/32/ff/4b32ff5b423da986da39f3b5fed192ac.jpg"
// massage
// "WOW Everything is working Perfectly fine"
// timestamp
// 4 May 2021 at 00:00:00 UTC+5:30
// (timestamp)
// username
// "srivasaurabh"
