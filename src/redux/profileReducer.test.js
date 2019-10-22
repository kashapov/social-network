import profileReducer, { addPostAC, deletePostAC } from './profileReducer';

const state = {
  postsData: [
    { id: 1, message: 'Hi, how are you?', likes: 10 },
    { id: 2, message: 'first post', likes: 0 },
  ],
};

it('adding post: post length should be incremented', () => {
  const action = addPostAC('test post');
  const newState = profileReducer(state, action);
  expect(newState.postsData.length).toBe(3);
});

it('adding post: message of new post should be "test post"', () => {
  const action = addPostAC('test post');
  const newState = profileReducer(state, action);
  expect(newState.postsData[2].message).toBe('test post');
});

it('deleting post: post length should be decremented', () => {
  const action = deletePostAC(1);
  const newState = profileReducer(state, action);
  expect(newState.postsData.length).toBe(1);
});
