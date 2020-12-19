import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import List from "../component/List";




const SimpleForm = (props) => {
  const { handleSubmit, pristine,submitting,user } = props;
  console.log(user)
  return (
    <div>
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <div>
          <Field
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"
          />
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div>
          <Field
            name="lastName"
            component="input"
            type="text"
            placeholder="Last Name"
          />
        </div>
      </div>
      <div>
        <label>Email</label>
        <div>
          <Field
            name="email"
            component="input"
            type="email"
            placeholder="Email"
          />
        </div>
      </div>
      <div>
        <label>Password</label>
        <div>
          <Field
            name="password"
            component="input"
            type="password"
            placeholder="Password"
          />
        </div>
      </div>
      <div>
        <label>ConfirmPassword</label>
        <div>
          <Field
            name="confirmPassword"
            component="input"
            type="password"
            placeholder="Confirm Password"
          />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
      </div>
    </form>
    {user.show && <div>
      <List />
    </div>}
    </div>
  );
};

const mapStateToProps = state => {
  return { user: state.createUser };
};

export default reduxForm({
  form: "simple" 
})(connect (mapStateToProps) (SimpleForm));


