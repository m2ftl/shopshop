import React, { Component } from "react";
import "../../App.css";
import { connect } from "react-redux";
import { signOut } from "../../store/user/actions";
import { getUserState } from "../../store/user/selectors";

class User extends Component {
  render() {
    console.log("toto");
    console.log(this.props.user.id);
    return (
      <div className="jumbotron">
        <div className="App-intro">
          {this.props.user.id ? (
            <div className="signout" onClick={this.props.signOut}>
              Sign out
            </div>
          ) : (
            <div className="App-title">
            <div
              className="g-signin2"
              data-onsuccess="googleConnectCallback"
              data-theme="dark"
            />
            </div>
          )}
        </div>

        {this.props.user.id ? (
          <div>
            <img alt={this.props.user.fullname} src={this.props.user.avatar} />
            <span>{this.props.user.fullname}</span>
          </div>
        ) : null}
      </div>
    );
  }
}

export default connect(getUserState, signOut)(User);
