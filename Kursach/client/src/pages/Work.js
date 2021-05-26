import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import {Container} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import { Context } from '..';
import WorkList from '../components/WorkList';
import { fetchWorks } from '../http/workAPI';

const Work = observer(() => {
    const {work} = useContext(Context)

    useEffect(() => {
        fetchWorks().then(data => work.setWork(data))
    }, [])

    return (
        <Container>
            <Col>
                <WorkList />
            </Col>
        </Container>
    )
})

export default Work