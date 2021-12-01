import classes from "./post.module.css";
const Post = (props) => {
  return (
    <div>
      <div className={classes.item}>
        <img src={props.imgUrl} alt='' srcset='' />
        <h4>{props.message}</h4>
        <div>
          <span>
            <h5>like {props.likeCount}</h5>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Post;
