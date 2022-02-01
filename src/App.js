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
import EditBlog from "./Dashboard/Admin/EditBlog";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import ChatBot from "./ChatBot";
function App() {
  const [show, setShow] = useState(false);
  return (
    <AuthProvider className="App">
      <BrowserRouter>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
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
              path="editBlog/:experienceId"
              element={
                <AdminRoute>
                  <EditBlog />
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
        {/*   <div>
          <iframe
            src="https://webchat.botframework.com/embed/NSTU-Now?s=F7NrWOGozp0.CNNwV920RZAoK05USaCAjGc7plkIp-TB1ykAlb2sHT8"
            style={{ minWidth: " 400px", width: "100%", minHeight: "500px" }}
            title="NSTUNow"
          >
            title
          </iframe>
        </div> */}

        <Footer></Footer>
        <div className="bot">
          <img
            onClick={setShow}
            width={70}
            src="https://i.ibb.co/g91kWCx/chatbotbuilder-logo.png"
            alt="NSTUNow"
          />
          <ChatBot show={show} setShow={setShow} />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
