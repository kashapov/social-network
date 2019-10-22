import React from 'react';
import { reduxForm, Field } from 'redux-form';

import Post from './Post/Post';
import { Textarea } from '../../FormControls/FormControls';
import { required, maxLengthCreator } from '../../../utils/validators';

import classes from './MyPosts.module.css';

const maxLength = maxLengthCreator(30);

const MyPosts = React.memo(props => {
  console.log('RENDER MyPosts');
  const { addPost } = props;
  const { postsData } = props.profilePage;

  const posts = postsData.map(post => (
    <li key={post.id}>
      <Post id={post.id} message={post.message} likes={post.likes} />
    </li>
  ));

  const onAddPost = formData => {
    addPost(formData.newPostText);
  };

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <PostReduxForm onSubmit={onAddPost} />
      <div className={classes.posts}>
        <ul>{posts}</ul>
      </div>
    </div>
  );
});

const AddPostForm = props => {
  return (
    <form className={classes.postForm} onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        name="newPostText"
        placeholder="Enter post"
        validate={[required, maxLength]}
      />
      <button>Add post</button>
    </form>
  );
};

const PostReduxForm = reduxForm({
  form: 'profileAddPostForm',
})(AddPostForm);

export default MyPosts;
