import classes from "./profileinfo.module.css";
const Profileinfo = () => {
  return (
    <div>
      <div>
        <img
          src='https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/p-433-lukestackpoole-cosy-hut-card-a-g-job580.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=4d0e7f4f9e89355279bf237e7cc2549f'
          alt=''
        />
      </div>
      <div className={classes.profileBlock}>ava+descrtiption;</div>
    </div>
  );
};

export default Profileinfo;
