import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Profile from './Profile';
import {
  getProfile,
  getStatus,
  updateStatus,
} from '../../redux/profileReducer';

class ProfileContainer extends React.PureComponent {
  componentDidMount() {
    const { match, getProfile, getStatus, authUserId } = this.props;
    let userId = match.params.userId;

    if (!userId) userId = authUserId;
    if (!userId) this.props.history.push('/login');

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
    status: state.profilePage.status,
    authUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
  };
};

export default compose(
  connect(
    mapStateToProps,
    { getProfile, getStatus, updateStatus },
  ),
  withRouter,
)(ProfileContainer);
