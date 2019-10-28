import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Profile from './Profile';
import {
  getProfile,
  getStatus,
  updateStatus,
  savePhoto,
  saveProfile
} from '../../redux/profileReducer';

class ProfileContainer extends React.PureComponent {
  refreshProfile() {
    const { match, getProfile, getStatus, authUserId } = this.props;
    let userId = match.params.userId;

    if (!userId) userId = authUserId;
    if (!userId) this.props.history.push('/login');

    getProfile(userId);
    getStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    return (
      <Profile
        {...this.props}
        isOwner={!this.props.match.params.userId}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        savePhoto={this.props.savePhoto}
        saveProfile={this.props.saveProfile}
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
    { getProfile, getStatus, updateStatus, savePhoto,saveProfile },
  ),
  withRouter,
)(ProfileContainer);
