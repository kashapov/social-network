import { authMe } from './authReducer';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
  initialized: null,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };

    default:
      return state;
  }
};

// Action Creators
export const initializedSuccess = () => ({
  type: INITIALIZED_SUCCESS,
});

// Thunk Creators
export const initializeApp = () => {
  return dispatch => {
    const promise = dispatch(authMe());
    // const promise2 = dispatch(something());
    Promise.all([promise]).then(() => {
      dispatch(initializedSuccess());
    });
  };
};

export default appReducer;
