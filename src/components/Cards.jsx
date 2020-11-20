import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css"
import { Card, Row, Col } from 'react-bootstrap'

function Cards() {
    return (
        <>

            <Row>
                <Col xs={12} sm={6} md={4} lg={3} xl={2}>
                    <Card.Img src="https://via.placeholder.com/275x150" />
                </Col>
                <Col xs={12} sm={6} md={4} lg={3} xl={2}>
                    <Card.Img src="https://via.placeholder.com/275x150" />
                </Col>

                <Col xs={12} sm={6} md={4} lg={3} xl={2}>
                    <Card.Img src="https://via.placeholder.com/275x150" />
                </Col>

                <Col xs={12} sm={6} md={4} lg={3} xl={2}>
                    <Card.Img src="https://via.placeholder.com/275x150" />
                </Col>

                <Col xs={12} sm={6} md={4} lg={3} xl={2}>
                    <Card.Img src="https://via.placeholder.com/275x150" />
                </Col>

                <Col xs={12} sm={6} md={4} lg={3} xl={2}>
                    <Card.Img src="https://via.placeholder.com/275x150" />
                </Col>


            </Row>

        </>
    )
}

export default Cards
