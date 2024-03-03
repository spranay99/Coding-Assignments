import React from "react";
import UserClass from "./UserClass";

class AboutClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent componentDidMount");

    this.timer = setInterval(() => {
      console.log("Namaste react");
    }, 1000);
  }

  componentWillUnmount() {
    console.log("About component UnMounted");

    clearInterval(this.timer);
  }

  render() {
    console.log("Parent render");
    return (
      <>
        <h1>About us</h1>
        <h2>This is Namaste React web series - Class Component</h2>
        <UserClass
          name="Pranay Shah"
          location="Mumbai"
          contact="12345678"
          child="1st"
        />
        <UserClass
          name="Akshay Saini"
          location="Dehradun"
          contact="9876543210"
          child="2nd"
        />
      </>
    );
  }
}

export default AboutClass;
