import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import SingleBlogDetails from "./Pages/SingleBlogDetails/SingleBlogDetails";
import Navigation from "./Shared/Navigation";
import Footer from "./Shared/Footer";
import Login from "./Pages/Login/Login";
import AuthProvider from "./Context/AuthProvider";
import Register from "./Pages/Login/Register";
import PrivateRoute from "./Pages/Login/PrivateRoute";
import Dashboard from "./Dashboard/Dashboard";
import AddBlog from "./Dashboard/Admin/AddBlog";
import ManageExperience from "./Dashboard/Admin/ManageExperience";
import ManageAllBlog from "./Dashboard/Admin/ManageAllBlog";
import MyExperience from "./Dashboard/User/MyExperience";
import MyBlog from "./Dashboard/Admin/MyBlog";
import Review from "./Dashboard/User/Review";
import Blog from "./Pages/Blog/Blog";
import AdminRoute from "./Pages/Login/AdminRoute";
import MakeAdmin from "./Dashboard/Admin/MakeAdmin";
function App() {
  return (
    <AuthProvider className="App">
      <BrowserRouter>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/about" element={<Home></Home>}></Route>
          <Route path="/contact" element={<Home></Home>}></Route>
          <Route path="/blog" element={<Blog></Blog>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route
            path="/blogDetail/:blogId"
            element={
              <PrivateRoute>
                <SingleBlogDetails />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          >
            {/* user */}
            <Route
              path="myExperience"
              element={
                <PrivateRoute>
                  <MyExperience />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="review"
              element={
                <PrivateRoute>
                  <Review />
                </PrivateRoute>
              }
            ></Route>
            {/* admin */}

            <Route
              path="myBlog"
              element={
                <AdminRoute>
                  <MyBlog />
                </AdminRoute>
              }
            ></Route>
            <Route
              path="manageExperience"
              element={
                <AdminRoute>
                  <ManageExperience />
                </AdminRoute>
              }
            ></Route>
            <Route
              path="manageAllBlog"
              element={
                <AdminRoute>
                  <ManageAllBlog />
                </AdminRoute>
              }
            ></Route>
            <Route
              path="addBlog"
              element={
                <AdminRoute>
                  <AddBlog />
                </AdminRoute>
              }
            ></Route>
            <Route
              path="makeAdmin"
              element={
                <AdminRoute>
                  <MakeAdmin />
                </AdminRoute>
              }
            ></Route>
          </Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
