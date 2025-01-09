const User = (props) => {
  const { name } = props;
  return (
    <div className="user">
      <h1>Name : {name}</h1>
      <h2>Location : Parchoor</h2>
      <h2>Age : 22</h2>
    </div>
  );
};

export default User;
