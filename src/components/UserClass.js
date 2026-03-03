import React from "react";


class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo:{
            name:"Ayushi Singh",
            location: "New York",
            avatar_url: "https://avatars.githubusercontent.com/u/104777863?v=4",
      }
    };
    console.log("constructor called");
  }

  async componentDidMount() {
    // Simulating an async operation like fetching data
    const data = await fetch("https://api.github.com/users/Ayushi2902");
    const json = await data.json();

      this.setState({
        userInfo: json,
      });


  }

  componentDidUpdate() {
    console.log("componentDidUpdate called");
  }

  render() {
    const { name, location , avatar_url} = this.state.userInfo;
    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Email: ayushisingh.email@gmail.com </h3>
        <h4>Location: {location}</h4>
        <img src={avatar_url} alt="User Avatar" />
      </div>
    );
  }
}



export default UserClass;



/****
 * 
 * 
 * constructor(dummy data)
 * 
 * render(dummy data)
 *          <html> --- DOM updated
 * 
 * componentDidMount
 *          <API call>
 *         <this.setState> --- state variable is updated
 * 
 * 
 * --- UPDATE
 * 
 *    render(Api data)
 *       <html> --- DOM updated with API data
 * 
 * 
 * componentDidUpdate
 * 
 */