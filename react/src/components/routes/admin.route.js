import React from "react";
import { Route, Routes } from "react-router-dom";
import UsersList from "../domain/user/UsersList";
import UserView from "../domain/user/UserView";
import UserEdit from "../domain/user/UserEdit";
import UserCreate from "../domain/user/UserCreate";
import NotFound from "../NotFound";

const AdminRoute = (props) => {
  return (
    <>
      <Routes>
        <Route path="/users" element={<UsersList role={props.role} />} />
        <Route
          role={props.role}
          path="/users/:id/view"
          element={<UserView />}
        />
        <Route path="/users/:id/edit" element={<UserEdit />} />
        <Route path="/users/add" element={<UserCreate />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AdminRoute;
