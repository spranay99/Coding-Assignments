import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    console.log(this.props.child + " child constructor");
  }

  componentDidMount() {
    console.log(this.props.child + " child componentDidMount");
  }

  componentDidUpdate() {
    console.log(this.props.child + " child componentDidUpdate");
  }
  render() {
    console.log(this.props.child + " child render");
    const { name, location, contact } = this.props;

    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Contact: {contact}</h3>
        <p>Count value: {this.state.count}</p>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Click Me
        </button>
      </div>
    );
  }
}

export default UserClass;
