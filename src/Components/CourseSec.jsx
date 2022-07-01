import React from 'react';
import { Card, Container } from 'react-bootstrap';

function CourseSec() {
    return (
        <div className="courses-section pt-5 pb-5">
            <Container>
                <h1 className="text-center hero-title">Courses</h1>
                <div className="row">
                    <div className="col">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up
                                    the bulk of the card&apos;s content.
                                </Card.Text>
                                <a className="btn btn-primary rounded" href="ww">
                                    Go somewhere
                                </a>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col">Column</div>
                    <div className="col">Column</div>
                </div>
            </Container>
        </div>
    );
}

export default CourseSec;
