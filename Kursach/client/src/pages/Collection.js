import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import {Container} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import { Context } from '..';
import CollectionList from '../components/CollectionList';
import { fetchCollections } from '../http/collectionAPI';

const Collection = observer(() => {
    const {collection} = useContext(Context)

    useEffect(() => {
        fetchCollections().then(data => collection.setCollection(data))
    }, [])

    return (
        <Container>
            <Col>
                <CollectionList />
            </Col>
        </Container>
    )
})

export default Collection