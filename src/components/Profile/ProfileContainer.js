import React from "react";
import * as axios from "axios";
import { connect } from "react-redux";

import Profile from "./Profile";
import { setProfile } from "../../redux/profileReducer";
import { getProfileApiUrl } from "../../config";

class ProfileContainer extends React.PureComponent {
  componentDidMount() {
    const { setProfile } = this.props;

    axios.get(`${getProfileApiUrl}/2`).then(response => {
      setProfile(response.data);
    });
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
  { setProfile }
)(ProfileContainer);
