import React from 'react'
import {makeStyles, withStyles} from '@material-ui/core/styles';
import {Container, Col, Row, Navbar, Nav, Image} from "react-bootstrap";

//import images
import stages_main from "../images/Stages/stages.png"
import workforce_img from "../images/WorkforceM/background_2.png";

const useStyles = makeStyles({
    paragraphs: {
        fontSize: '14px',
    }
})

const Stages = () => {

    return (
        <Row style={{marginTop: '150px'}}>
            <Col md>
                <img style={{height: 'auto', width: '100%'}} src={stages_main}/>
            </Col>
        </Row>
    )
}

export default Stages