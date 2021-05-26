import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";
import {deleteCollection} from "../http/collectionAPI";

const DeleteCollection = ({show, onHide}) => {
    let [value, setValue] = useState('')
    const delColl = () => {
        deleteCollection({id: value}).then(data => {
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
                    Delete collection
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        type = "number"
                        value={parseInt(value)}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Enter collection id"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Close</Button>
                <Button variant="outline-success" onClick={delColl}>Delete</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeleteCollection;