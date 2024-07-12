import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { BsFillPencilFill, BsFillTrash3Fill } from "react-icons/bs";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const defaultUserInformation = {
  id: "",
  name: "",
  email: "",
  password: "",
  phone: "",
  bod: "",
  address: "",
};

function ModalCustom({ show, handleClose, companys, setCompanys }) {
  const [userInformation, setUserInformation] = useState(
    defaultUserInformation
  );

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FloatingLabel controlId="floatingId" label="ID" className="mb-3">
          <Form.Control
            type="text"
            placeholder="ID"
            value={userInformation.id}
            onChange={(e) =>
              setUserInformation({
                ...userInformation,
                id: e.target.value,
              })
            }
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingName" label="Name" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Name"
            value={userInformation.name}
            onChange={(e) =>
              setUserInformation({
                ...userInformation,
                name: e.target.value,
              })
            }
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingEmail"
          label="Email address"
          className="mb-3"
        >
          <Form.Control
            type="email"
            placeholder="name@example.com"
            value={userInformation.email}
            onChange={(e) =>
              setUserInformation({
                ...userInformation,
                email: e.target.value,
              })
            }
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingPassword"
          label="Password"
          className="mb-3"
        >
          <Form.Control
            type="password"
            placeholder="Password"
            value={userInformation.password}
            onChange={(e) =>
              setUserInformation({
                ...userInformation,
                password: e.target.value,
              })
            }
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPhone" label="Phone" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Phone"
            value={userInformation.phone}
            onChange={(e) =>
              setUserInformation({
                ...userInformation,
                phone: e.target.value,
              })
            }
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingBod" label="BOD" className="mb-3">
          <Form.Control
            type="text"
            placeholder="BOD"
            value={userInformation.bod}
            onChange={(e) =>
              setUserInformation({
                ...userInformation,
                bod: e.target.value,
              })
            }
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingAddress"
          label="Address"
          className="mb-3"
        >
          <Form.Control
            type="text"
            placeholder="Address"
            value={userInformation.address}
            onChange={(e) =>
              setUserInformation({
                ...userInformation,
                address: e.target.value,
              })
            }
          />
        </FloatingLabel>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            setCompanys([...companys, userInformation]);
            setUserInformation(defaultUserInformation);
            handleClose();
          }}
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function ModalEdipCustom({
  show,
  handleClose,
  companys,
  setCompanys,
  userInformation,
  setUserInformation,
  index,
}) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Update User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FloatingLabel controlId="floatingId" label="ID" className="mb-3">
          <Form.Control
            type="text"
            placeholder="ID"
            value={userInformation.id}
            onChange={(e) =>
              setUserInformation({
                ...userInformation,
                id: e.target.value,
              })
            }
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingName" label="Name" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Name"
            value={userInformation.name}
            onChange={(e) =>
              setUserInformation({
                ...userInformation,
                name: e.target.value,
              })
            }
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingEmail"
          label="Email address"
          className="mb-3"
        >
          <Form.Control
            type="email"
            placeholder="name@example.com"
            value={userInformation.email}
            onChange={(e) =>
              setUserInformation({
                ...userInformation,
                email: e.target.value,
              })
            }
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingPassword"
          label="Password"
          className="mb-3"
        >
          <Form.Control
            type="password"
            placeholder="Password"
            value={userInformation.password}
            onChange={(e) =>
              setUserInformation({
                ...userInformation,
                password: e.target.value,
              })
            }
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPhone" label="Phone" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Phone"
            value={userInformation.phone}
            onChange={(e) =>
              setUserInformation({
                ...userInformation,
                phone: e.target.value,
              })
            }
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingBod" label="BOD" className="mb-3">
          <Form.Control
            type="text"
            placeholder="BOD"
            value={userInformation.bod}
            onChange={(e) =>
              setUserInformation({
                ...userInformation,
                bod: e.target.value,
              })
            }
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingAddress"
          label="Address"
          className="mb-3"
        >
          <Form.Control
            type="text"
            placeholder="Address"
            value={userInformation.address}
            onChange={(e) =>
              setUserInformation({
                ...userInformation,
                address: e.target.value,
              })
            }
          />
        </FloatingLabel>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            let cloneUserData = [...companys, userInformation];
            cloneUserData.splice(index, 1);
            setCompanys(cloneUserData);
            handleClose();
            setUserInformation(defaultUserInformation);
          }}
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function App() {
  const [companys, setCompanys] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [selected, setSelected] = useState(null);
  const [userInformation, setUserInformation] = useState(
    defaultUserInformation
  );

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

  //update user
  const handleUpdateUser = (index, data) => {
    let cloneUserData = [...companys, data];
    cloneUserData.splice(index, 1);
    setCompanys(cloneUserData);
  };

  // Delete user
  const handleDeleteUser = (index) => {
    let cloneUserData = [...companys];
    cloneUserData.splice(index, 1);
    setCompanys(cloneUserData);
  };

  const RowTableData = companys.map((item, index) => {
    const { id, name, email, password, phone, bod, address } = item;
    return (
      <tr key={index}>
        <td>{id}</td>
        <td>{name}</td>
        <td>{email}</td>
        <td>{password}</td>
        <td>{phone}</td>
        <td>{bod}</td>
        <td>{address}</td>
        <td>
          <>
            <Button
              variant="outline-warning"
              onClick={() => {
                setShow(true);
                setUserInformation(item);
                setSelected(index);
              }}
            >
              <BsFillPencilFill />
            </Button>{" "}
            <Button
              variant="outline-danger"
              onClick={() => {
                handleDeleteUser(index);
              }}
            >
              <BsFillTrash3Fill />
            </Button>
            {""}
          </>
        </td>
      </tr>
    );
  });

  return (
    <>
      <div
        style={{
          display: "flex",

          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
        }}
      >
        <ModalCustom
          show={show}
          handleClose={handleClose}
          companys={companys}
          setCompanys={setCompanys}
        />
        <ModalEdipCustom
          show={show}
          handleClose={handleClose}
          companys={companys}
          setCompanys={setCompanys}
          userInformation={userInformation}
          setUserInformation={setUserInformation}
          index={selected}
        />
        <button
          onClick={() => {
            setShow(true);
          }}
        >
          Add new user
        </button>
        {companys.length ? (
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
        ) : (
          <h4>Không có User nào tại đây. OKE!!!!</h4>
        )}
      </div>
    </>
  );
}

export default App;
