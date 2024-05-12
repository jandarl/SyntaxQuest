import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import '/src/Components/fonts.css';
import './ProjectCard.css';

function ProjectCard(props){

    function handleClick(){
      props.setTopic(props.link);
    }

    return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body className="cardBody">
        <Card.Title className="wellfleet-regular">{props.title}</Card.Title>
        <Card.Text className="courier-prime-regular">
          {props.text}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
          {props.info.map((item) => 
            <ListGroup.Item className="cardListItem courier-prime-regular" key={item}>{item}</ListGroup.Item>
          )} 
      </ListGroup>
      <Card.Body className="cardBody courier-prime-regular">
        <Button variant="primary" onClick={handleClick}>{props.btnText}</Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;