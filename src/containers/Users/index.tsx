import React, { useEffect, FC } from "react";
import { connect } from "react-redux";
import UserList from "../../components/UserList";
import { RootState, RootDispatch } from "../../store";

type UserProps = ReturnType<typeof mapProps> & ReturnType<typeof mapDispatch>;

const Users: FC<UserProps> = ({ users, load, toggleFollow }) => {
  useEffect(() => {
    load();
  }, []);

  return <UserList users={users} toggleFollow={toggleFollow} />;
};

const mapProps = (state: RootState) => ({
  users: state.users
});

const mapDispatch = (dispatch: RootDispatch) => ({
  load: dispatch.users.load,
  toggleFollow: dispatch.users.toggleFollow
});

export default connect(mapProps, mapDispatch)(Users);
