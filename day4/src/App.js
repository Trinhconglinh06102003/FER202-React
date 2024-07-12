import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import { BsFillPencilFill } from "react-icons/bs";
import { BsFillTrash3Fill } from "react-icons/bs";

function App() {
  const [conpanys, setCompanys] = useState([]);

  useEffect(() => {
    const handleFetchData = async () => {
      try {
        const request = await axios.get(`http://localhost:9999/company`);
        console.log("request: ", request);

        if (request) {
          setCompanys(request.data);
        }
      } catch (error) {
        console.log("error: ", error);
      }
    };
    handleFetchData();
  }, []);

  const RowTableData = conpanys.map((item, index) => {
    const { id, name, email, password, phone, bod, address } = item;
    return (
      <tr key={index}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.password}</td>
        <td>{item.phone}</td>
        <td>{item.bod}</td>
        <td>{item.address}</td>
        <td>
          <>
            <Button variant="outline-warning">
              <BsFillPencilFill />
            </Button>{" "}
            <Button variant="outline-danger">
              <BsFillTrash3Fill />
            </Button>{" "}
          </>
        </td>
      </tr>
    );
  });

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Phone</th>
            <th>BOD</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{RowTableData}</tbody>
      </Table>
    </>
  );
}

export default App;
