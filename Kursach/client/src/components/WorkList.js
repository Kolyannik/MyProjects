import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { ListGroup } from 'react-bootstrap'
import { Context } from '..'

const WorkList = observer(() => {
    const {work} = useContext(Context)
    return (
        <ListGroup className="mt-3">
            {work.works.map(work =>
                <ListGroup.Item>{work.id} {work.name}</ListGroup.Item>
                )}
        </ListGroup>
    )
})

export default WorkList