import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import {Container, Col, Row, Navbar, Nav, Image} from "react-bootstrap";
import './styles/serviceItem.scss'

const useStyles = makeStyles({
    container: {
        borderRadius: '25px',
        padding: '50px',
        boxShadow: '0px 0px 21px -1px rgba(136,136,136,1)',
        height: '415px',
        width: '530px'
    }
})

const ServiceItem = (props) => {

    const classes = useStyles()

    return (
        <Container className={classes.container} style={{backgroundImage: `url(${props.back})`}}>
            <Row>
                <Col md={12}>
                    <img style={{height: 'auto', width: '20%'}} src={props.icon}/>
                </Col>
                <Col md={12}>
                    <h4 style={{marginTop: '10px'}}>{props.header}</h4>
                </Col>
                <br/>
                <Col>
                    <ul className='unorderedList'>
                        {props.bulletList.map(bullet => <li>{bullet}</li>)}
                    </ul>
                </Col>
            </Row>
            {/*<Row className='d-flex flex-row-reverse'>*/}
            {/*    <img style={{height: 'auto', width: '20%'}} className='align-bottom' src={props.back}/>*/}
            {/*</Row>*/}
        </Container>
    )
}

export default ServiceItem