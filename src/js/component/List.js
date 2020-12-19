import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { user: state.createUser };
};

const ConnectedList = (props) => {
  return(<div>
    <label>Details</label><br></br>
    Firstname: {props.user.firstName}<br></br>
    LastName: {props.user.lastName}<br></br>
    Email: {props.user.email}<br></br>
    Password: {props.user.password}<br></br>
    Confirmpassword: {props.user.confirmPassword}
  </div>)
}


const List = connect(mapStateToProps)(ConnectedList);

export default List;