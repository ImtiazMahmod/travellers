import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
  CDBContainer,
} from "cdbreact";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Dashboard = () => {
  const { user, admin } = useAuth();
  console.log(admin);
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} sm={3} md={5}>
            {" "}
            <CDBContainer>
              <CDBSidebar textColor="#000" backgroundColor="#F9F9F9  ">
                <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
                  Dashboard
                </CDBSidebarHeader>
                <CDBSidebarContent>
                  <CDBSidebarMenu>
                    {user?.email && !admin ? (
                      <div>
                        {" "}
                        <CDBSidebarMenuItem
                          as={Link}
                          to="/dashboard/myExperience"
                          icon="th-large"
                        >
                          My Experience
                        </CDBSidebarMenuItem>
                        <CDBSidebarMenuItem
                          as={Link}
                          to="/dashboard/review"
                          icon="sticky-note"
                        >
                          Give Review
                        </CDBSidebarMenuItem>
                      </div>
                    ) : (
                      <div>
                        <CDBSidebarMenuItem
                          as={Link}
                          to="/dashboard/myBlog"
                          icon="th-large"
                        >
                          My Blog
                        </CDBSidebarMenuItem>
                        <CDBSidebarMenuItem
                          as={Link}
                          to="/dashboard/manageExperience"
                          icon="sticky-note"
                        >
                          Manage Experience
                        </CDBSidebarMenuItem>
                        <CDBSidebarMenuItem
                          as={Link}
                          to="/dashboard/manageAllBlog"
                          icon="sticky-note"
                        >
                          Manage All Blog
                        </CDBSidebarMenuItem>
                        <CDBSidebarMenuItem
                          as={Link}
                          to="/dashboard/addBlog"
                          icon="sticky-note"
                        >
                          Add Blog
                        </CDBSidebarMenuItem>
                        <CDBSidebarMenuItem
                          as={Link}
                          to="/dashboard/makeAdmin"
                          icon="sticky-note"
                        >
                          Make Admin
                        </CDBSidebarMenuItem>
                      </div>
                    )}
                  </CDBSidebarMenu>
                </CDBSidebarContent>
              </CDBSidebar>
            </CDBContainer>
          </Col>
          <Col className="mt-4" xs={12} sm={9} md={7}>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
