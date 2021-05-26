import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { ListGroup } from 'react-bootstrap'
import { Context } from '..'

const CollectionList = observer(() => {
    const {collection} = useContext(Context)
    return (
        <ListGroup className="mt-3">
            {collection.collections.map(collection =>
                <ListGroup.Item>{collection.id} {collection.name}</ListGroup.Item>
                )}
        </ListGroup>
    )
})

export default CollectionList




//collection
//Collection