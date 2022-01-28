import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
import Experience from "../../Pages/SingleBlogDetails/Experience";

const MyExperience = () => {
  const [myExperience, SetMyExperience] = useState();
  const { user } = useAuth();

  //load specific user orders
  useEffect(() => {
    axios
      .get(
        `https://arcane-peak-89690.herokuapp.com/myExperience?email=${user?.email}`
      )
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
          {myExperience?.length ? (
            myExperience?.map((experience) => (
              <Col key={experience._id} item xs={12} sm={12} md={12} lg={6}>
                <Experience experience={experience}></Experience>
              </Col>
            ))
          ) : (
            <p className="text-secondary mt-2">You have No Experience.</p>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default MyExperience;
