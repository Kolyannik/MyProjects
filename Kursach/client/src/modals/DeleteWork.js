import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";
import {deleteWork} from "../http/workAPI";

const DeleteWork = ({show, onHide}) => {
    let [value, setValue] = useState('')
    const delWork = () => {
        deleteWork({id: value}).then(data => {
        setValue('')
        onHide()
        console.log(value)
        })
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Delete work
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        type = "number"
                        value={parseInt(value)}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Enter work id"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Close</Button>
                <Button variant="outline-success" onClick={delWork}>Delete</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeleteWork;