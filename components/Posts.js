import React from "react";
import Post from "./Post";

function Posts() {
  const posts = [
    {
      id: "1",
      username: "herdeybayor",
      userImg: "https://avatars.githubusercontent.com/u/71196743?v=4",
      img: "https://avatars.githubusercontent.com/u/71196743?v=4",
      caption: "This is DOPE!",
    },
    {
      id: "2",
      username: "herdeybayor",
      userImg: "https://avatars.githubusercontent.com/u/71196743?v=4",
      img: "https://avatars.githubusercontent.com/u/71196743?v=4",
      caption: "This is DOPE!",
    },
    {
      id: "3",
      username: "herdeybayor",
      userImg: "https://avatars.githubusercontent.com/u/71196743?v=4",
      img: "https://avatars.githubusercontent.com/u/71196743?v=4",
      caption: "This is DOPE!",
    },
  ];
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
