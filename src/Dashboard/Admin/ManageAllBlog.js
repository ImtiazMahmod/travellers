import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import { FaEdit, FaReadme } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
const ManageAllBlog = () => {
  const [blogs, setBlogs] = useState([]);
  ///load all orders
  useEffect(() => {
    axios.get("https://arcane-peak-89690.herokuapp.com/blogs").then((res) => {
      setBlogs(res.data);
    });
  }, [blogs]);

  //delete bike
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://arcane-peak-89690.herokuapp.com/deleteBlog/${id}`)
          .then((res) => {
            if (res.data.deletedCount) {
              Swal.fire("Deleted!", "Your Blog has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div>
      <h3 className=" fw-bold text-center my-3">
        Manage All <span className="primaryColor">Blog</span>
      </h3>
      <Table>
        <Thead>
          <Tr>
            <Th>Traveller</Th>
            <Th>Tour Spot</Th>
            <Th>Cost</Th>
            <Th>Rating</Th>
            <Th>Delete</Th>
            <Th>Edit</Th>
            <Th>Detail</Th>
          </Tr>
        </Thead>
        <Tbody>
          {blogs.map((blog) => (
            <Tr>
              <Td>{blog?.name}</Td>
              <Td>{blog?.title}</Td>
              <Td className="text-center">{blog?.cost}</Td>
              <Td className="text-center">{blog?.rating}</Td>
              <Td>
                <Button variant="danger ">
                  <AiFillDelete onClick={() => handleDelete(blog?._id)} />
                </Button>
              </Td>
              <Td>
                <Link to={`/dashboard/editBlog/${blog?._id}`}>
                  <Button variant="warning ">
                    <FaEdit />
                  </Button>
                </Link>
              </Td>
              <Td>
                <Link to={`/blogDetail/${blog?._id}`}>
                  <Button variant="info ">
                    <FaReadme />
                  </Button>
                </Link>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
};

export default ManageAllBlog;
