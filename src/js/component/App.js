import React from "react";
import { createUser } from "../Action/index";
import SimpleForm from './Form'
import { connect } from "react-redux";
import {reset} from 'redux-form';

function mapDispatchToProps(dispatch) {
  return {
    createUser: user => dispatch(createUser(user)),
    dispatch
  };
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName:'',
      lastName:'',
      email:'',
      password:'',
      confirmPassword:'',
      show:false
    };
    
  }
  

  submit = values => {
    console.log(values)
    this.setState({ firstName : values.firstName , lastName : values.lastName , email:values.email,
    password: values.password,confirmPassword:values.confirmPassword});
    this.setState({show:true})
    const { firstName,lastName,email,password,confirmPassword,show } = this.state;
    this.props.createUser({ firstName,lastName,email,password,confirmPassword,show });
    this.props.dispatch(reset('simple'));
  }

  render() {
    const { firstName,lastName,email,password,confirmPassword,show } = this.state;
    this.props.createUser({ firstName,lastName,email,password,confirmPassword,show });
    return <SimpleForm onSubmit={this.submit} />
  }
}
const Form = connect(
  null,
  mapDispatchToProps
)(App);

export default Form;