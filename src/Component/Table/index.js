import React, { useState } from "react";
import { Table, Container, Form, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Table.scss";

const TableComponent = ({ data }) => {
    const [searchText, setSearchText] = useState("");

    const headers = ["STT", "Name", "Pet Type", "Owner", "Date of birth", "Status"];

    return (
        <div>
            <Container>
                <h1 className="text-center mt-4">List Pet</h1>
                <Form>
                    <InputGroup className="my-3">
                        <Form.Control
                            value={searchText}
                            placeholder="Search pets"
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                    </InputGroup>
                </Form>

                <div>
                <Form>
                  <Form.Check />
                </Form>
                
                </div>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            {headers.map((headerItem) => (
                                <th>{headerItem}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data
                            .filter((pet) => {
                                return searchText.toLowerCase() === ""
                                    ? pet
                                    : pet.name.toLowerCase().includes(searchText) ||
                                          pet.ownerId.toLowerCase().includes(searchText) ||
                                          pet.dob.toLowerCase().includes(searchText);
                            })
                            .map((pet, index) => (
                                <tr key={pet.id}>
                                    <td>{index + 1}</td>
                                    <td>{pet.name}</td>
                                    <td>{pet.petType}</td>
                                    <td>{pet.ownerId}</td>
                                    <td>{pet.dob}</td>
                                    <td className={`${pet.status === "alive" ? "alive" : "deceased"}`}>{pet.status}</td>
                                </tr>
                            ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default TableComponent;
