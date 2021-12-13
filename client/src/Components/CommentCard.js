import React from 'react';

import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css';

function CommentCard({comment}){

    return (
        <>
            <Card id="reviewCard" bg="transparent" text="dark">
                <Card.Body>
                    <Card.Title>{comment.user.name} says:</Card.Title>
                    <Card.Text>
                        {comment.body}
                    </Card.Text>
                </Card.Body>
            </Card>
        <br/>
        </>
    )
}

export default CommentCard;