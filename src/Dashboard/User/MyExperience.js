import axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
import Experience from "../../Pages/SingleBlogDetails/Experience";
import SingleExperience from "./SingleExperience";

const MyExperience = () => {
  const [myExperience, SetMyExperience] = useState();
  const { user } = useAuth();

  //load specific user orders
  useEffect(() => {
    axios
      .get(`http://localhost:5000/myExperience?email=${user?.email}`)
      .then((res) => SetMyExperience(res.data));
  }, [myExperience]);

  console.log(myExperience);

  return (
    <div>
      <h3 className=" fw-bold my-2 text-center">
        My <span className="primaryColor">Experience</span>
      </h3>
      <Container className="d-flex justify-content-center">
        <Row>
          {myExperience ? (
            myExperience?.map((experience) => (
              <Col key={experience._id} item xs={12} sm={12} md={12} lg={6}>
                <Experience experience={experience}></Experience>
              </Col>
            ))
          ) : (
            <Alert className=" mt-2">You have No Experience.</Alert>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default MyExperience;
