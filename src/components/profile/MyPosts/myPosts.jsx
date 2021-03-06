import { createRef } from "react";
import classes from "./myPosts.module.css";
import Post from "./Post/post";
import React from "react";

const MyPosts = (props) => {
  let postsElement = props.post.map((p) => (
    <Post message={p.text} likeCount={p.llikes} imgUrl={p.imgUrl} />
  ));

  let newPostEl = React.createRef();
  let addPost = () => {
    let text = newPostEl.current.value;
    props.addPost(text);
    alert("you added new post");
    newPostEl.current.value = "";
    debugger;
  };
  return (
    <div>
      <div className={classes.textBlock}>
        <textarea ref={newPostEl}> </textarea>
      </div>
      <div className={classes.btnBlock}>
        <button className={classes.btnAdd} onClick={addPost}>
          add
        </button>
        <button className={classes.btnDelete}>delete</button>
      </div>
      <div className={classes.postsList}>{postsElement}</div>
    </div>
  );
};

export default MyPosts;
