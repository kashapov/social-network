import React, { useState, useEffect } from 'react';

const ProfileStatusHooks = props => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = e => {
    setStatus(e.currentTarget.value);
  };

  const userStatus = editMode ? (
    <>
      <input
        autoFocus={true}
        onBlur={deactivateEditMode}
        onChange={onStatusChange}
        type="text"
        value={status}
      />
      <button onClick={deactivateEditMode}>save</button>
    </>
  ) : (
    <span onClick={activateEditMode}>{props.status || 'no status'}</span>
  );
  return <div>Status: {userStatus}</div>;
};

export default ProfileStatusHooks;
