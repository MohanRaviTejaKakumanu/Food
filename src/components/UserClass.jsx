import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      userInfo: {
        name: "dummy",
        login: "vhjk",
      },
    };
    console.log("constructor called first");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount called final");
  }

  async componentDidMount() {
    const data = await fetch(
      "https://api.github.com/users/MohanRaviTejaKakumanu"
    );
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });

    console.log("componentDidMount called third");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate?");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount called final");
  }

  render() {
    const { count } = this.state;
    const { name, login } = this.state.userInfo;
    console.log("render called second");
    return (
      <div className="user">
        <div>count = {count}</div>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increment
        </button>

        <h1>Name : {name}</h1>
        <h1>login : {login}</h1>
        <h2>Location : Parchoor</h2>
        <h2>Age : 22</h2>
      </div>
    );
  }
}

export default UserClass;
