import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Profile from "./Profile";
import { getProfile } from "../../redux/profileReducer";

class ProfileContainer extends React.PureComponent {
  componentDidMount() {
    const { match, getProfile } = this.props;
    let userId = match.params.userId;

    if (!userId) userId = 1729;

    getProfile(userId);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profilePage.profile
  };
};

export default connect(
  mapStateToProps,
  { getProfile }
)(withRouter(ProfileContainer));
