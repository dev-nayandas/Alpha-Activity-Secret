import React from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';

const Active = (props) => {
    const {id, name, img, description, time} = props.active;
   const{handleAddToList} = props;
    return (
        <div className='d-flex mb-3'>
          
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
      
        <ListGroup.Item>Time : {time} Min </ListGroup.Item>
      </ListGroup>
      
      <Button onClick={()=>handleAddToList(props.active)} variant="secondary">Add To List</Button>
    </Card>
   
        </div>
    );
};

export default Active;