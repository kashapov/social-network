import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Profile from "./Profile";
import { getProfile } from "../../redux/profileReducer";
import witAuthRedirect from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.PureComponent {
  componentDidMount() {
    const { match, getProfile } = this.props;
    let userId = match.params.userId;

    if (!userId) userId = 1741;

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

export default compose(
  connect(
    mapStateToProps,
    { getProfile }
  ),
  withRouter,
  witAuthRedirect
)(ProfileContainer);
