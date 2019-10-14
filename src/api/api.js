import * as axios from "axios";

const socialNetworkService = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    "API-KEY": "2637dec1-5ad1-4cbb-9242-012b3c879011"
  }
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return socialNetworkService
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data);
  },
  followUser(userId) {
    return socialNetworkService
      .post(`follow/${userId}`)
      .then(response => response.data);
  },

  unfollowUser(userId) {
    return socialNetworkService
      .delete(`follow/${userId}`)
      .then(response => response.data);
  },
  getProfile(userId) {
    console.warn("Obsolete method. Please use profileAPI object.");
    return profileAPI.getProfile(userId);
  }
};

export const profileAPI = {
  getProfile(userId) {
    return socialNetworkService
      .get(`profile/${userId}`)
      .then(response => response.data);
  },
  getStatus(userId) {
    return socialNetworkService
      .get(`profile/status/${userId}`)
      .then(response => response.data);
  },
  updateStatus(status) {
    return socialNetworkService
      .put(`profile/status`, { status })
      .then(response => response.data);
  }
};

export const authAPI = {
  authMe() {
    return socialNetworkService.get(`/auth/me`).then(response => response.data);
  }
};
