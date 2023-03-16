import PropTypes from "prop-types";

const Profile = ({ fullName, bio, profession, children, handleName }) => {
  return (
    <div style={{ border: "1px solid black",borderRadius:"10px",margin:"100px 400px" ,textAlign:"center" }}>
      <h2 style={{ color: "rgba(10, 39, 48, 0.133)" }}> {fullName} </h2> <h3> {profession} </h3>{" "}
      <p> {bio} </p> {children}{" "}
      <button onClick={() => handleName(fullName)}style={{ backgroundColor: "rgba(44, 160, 255, 7.133)",borderRadius:"5px" }}> Click me! </button>{" "}
    </div>
  );
};

Profile.defaultProps = {
  fullName: "yuba",
  bio: "saghro",
  profession: "wd",
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  handleName: PropTypes.func.isRequired,
};

export default Profile;
