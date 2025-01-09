import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <div className="about">
        <h1>Hey, I am Mohan Ravi Teja Kakumanu</h1>
        <h2>I am a frontend developer</h2>
      </div>
      <User name={"RT (function)"} />
      <UserClass name={"RT (class)"} />
    </div>
  );
};

export default About;
