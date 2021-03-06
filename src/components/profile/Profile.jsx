import MyPosts from "./MyPosts/myPosts";
import Profileinfo from "./profileinfo/Profileinfo";
// import classes from "./profile.module.css";
const Profile = (props) => {
  return (
    <div>
      <Profileinfo />
      <MyPosts
        post={props.post}
        addPost={props.addPost}
        imgUrl={props.imgUrl}
      />
    </div>
  );
};

export default Profile;
