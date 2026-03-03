import User from "./User";
import UserClass from "./UserClass";
import {  Component} from "react";


class About extends Component{
  constructor(props){
    super(props);

    console.log("Parent constructor called")
  }



  componentDidMount(){
    //api is called here because it re-renders our component

    console.log("parent componentDidMount")
  }

  render(){
    console.log("parent render is called")
      return (
        <div>
          <h1>About Page</h1>
          <h2>This is Namaste React Web series</h2>
          <UserClass name={"Ayushi Singh(class)"} location={"New York"} />
        </div>
      )
  }
}




export default About;