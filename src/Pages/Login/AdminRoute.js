import React from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

function AdminRoute({ children }) {
  const { admin, user, isLoading } = useAuth();
  const location = useLocation();
  console.log(isLoading);
  if (!admin) {
    return (
      <Spinner className="spinnerStyle" animation="grow" variant="danger" />
    );
  }
  if (admin && user?.email) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} />;
}

export default AdminRoute;
