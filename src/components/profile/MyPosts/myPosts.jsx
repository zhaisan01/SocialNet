import classes from "./myPosts.module.css";

import Post from "./Post/post";

const MyPosts = (props) => {
  let postsElement = props.post.map((p) => (
    <Post message={p.text} likeCount={p.llikes} />
  ));
  return (
    <div>
      <div className={classes.textBlock}>
        <textarea> </textarea>
      </div>
      <div className={classes.btnBlock}>
        <button className={classes.btnAdd}>add</button>
        <button className={classes.btnDelete}>delete</button>
      </div>
      <div className={classes.postsList}>{postsElement}</div>
    </div>
  );
};

export default MyPosts;
