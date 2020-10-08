import React from 'react'
import ServiceItem from "./ServiceItem";
import {Container, Col, Row, Navbar, Nav, Image} from "react-bootstrap";


const Services = () => {

    return (
        <>
            <Row>
                <Col>
                    <h3>Услуги</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ServiceItem/>
                </Col>
            </Row>
        </>
    )
}

export default Services