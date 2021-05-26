import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateWork from "../modals/CreateWork";
import CreateCollection from "../modals/CreateCollection";
import DeleteWork from "../modals/DeleteWork";
import DeleteCollection from "../modals/DeleteCollection"
// import Backup from "../modals/BackupDB"

const Admin = () => {
    const [workVisible, setWorkVisible] = useState(false)
    const [collectionVisible, setCollectionVisible] = useState(false)
    const [dworkVisible, setdWorkVisible] = useState(false)
    const [dcollectionVisible, setdCollectionVisible] = useState(false)
    // const [backUpVisible, setbackUpVisible] = useState(false)

    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setCollectionVisible(true)}
            >
                Add collection
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setWorkVisible(true)}
            >
                Add work
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setdWorkVisible(true)}
            >
                Delete work
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setdCollectionVisible(true)}
            >
                Delete collection
            </Button>
            {/* <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setbackUpVisible(true)}
            >
                Make backup
            </Button> */}

            <CreateWork show={workVisible} onHide={() => setWorkVisible(false)}/>
            <CreateCollection show={collectionVisible} onHide={() => setCollectionVisible(false)}/>
            <DeleteWork show={dworkVisible} onHide={() => setdWorkVisible(false)}/>
            <DeleteCollection show={dcollectionVisible} onHide={() => setdCollectionVisible(false)}/>
            {/* <Backup show={backUpVisible} onHide={() => setbackUpVisible(false)}/> */}
        </Container>
    );
};

export default Admin;