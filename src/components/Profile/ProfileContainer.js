import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Profile from "./Profile";
import {
  getProfile,
  getStatus,
  updateStatus
} from "../../redux/profileReducer";

class ProfileContainer extends React.Component {
  componentDidMount() {
    const { match, getProfile, getStatus } = this.props;
    let userId = match.params.userId;

    if (!userId) userId = 1741;

    getProfile(userId);
    getStatus(userId);
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status
  };
};

export default compose(
  connect(
    mapStateToProps,
    { getProfile, getStatus, updateStatus }
  ),
  withRouter
)(ProfileContainer);
