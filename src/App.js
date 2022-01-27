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
          <Route path="/blog" element={<Home></Home>}></Route>
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
          <Route path="/dashboard" element={<Dashboard></Dashboard>}>
            <Route
              path="manageExperience"
              element={<ManageExperience></ManageExperience>}
            ></Route>
            <Route
              path="manageAllBlog"
              element={<ManageAllBlog></ManageAllBlog>}
            ></Route>
            <Route path="addBlog" element={<AddBlog></AddBlog>}></Route>
          </Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
