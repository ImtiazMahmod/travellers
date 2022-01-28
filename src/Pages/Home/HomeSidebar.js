import {
  CDBContainer,
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SiYourtraveldottv } from "react-icons/si";
import axios from "axios";
const HomeSidebar = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [blogs, setBlogs] = useState([]);
  ///load all Blogs
  useEffect(() => {
    axios.get("https://arcane-peak-89690.herokuapp.com/blogs").then((res) => {
      if (res.data) {
        setBlogs(res.data);
        setIsLoading(false);
      } else {
        setIsLoading(true);
      }
    });
  }, []);
  return (
    <div>
      <CDBContainer>
        <CDBSidebar textColor="#000" backgroundColor="#F9F9F9  ">
          <CDBSidebarHeader>Top Tour Spot</CDBSidebarHeader>
          <CDBSidebarContent>
            <CDBSidebarMenu>
              {blogs?.slice(0, 7).map((blog) => (
                <div>
                  {" "}
                  <CDBSidebarMenuItem as={Link} to={`/blogDetail/${blog?._id}`}>
                    <SiYourtraveldottv className="primaryColor" /> {blog?.title}
                  </CDBSidebarMenuItem>
                </div>
              ))}
            </CDBSidebarMenu>
          </CDBSidebarContent>
        </CDBSidebar>
      </CDBContainer>
    </div>
  );
};

export default HomeSidebar;
