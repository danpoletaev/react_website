import React from 'react'
import {Container, Row, Card, Col} from 'react-bootstrap'
import {makeStyles, withStyles} from '@material-ui/core/styles';

//images
import Forbes_img from "../images/CompanyScroll/forbes.png";
import ibm_img from "../images/CompanyScroll/ibm.png";
import microsoft_img from "../images/CompanyScroll/microsoft.png";
import samsung_img from "../images/CompanyScroll/samsung.png";
import tesla_img from "../images/CompanyScroll/tesla.png";

const useStyles = makeStyles({
    scrollingWrapper: {
        overflowX: 'auto',
        width: '80%',
        marginLeft: '10%'
    },
    cardBlock: {
        height: '200px',
        width: '200px',
        backgroundColor: '#fff',
        border: 'none',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        transition: 'all 0.2s ease-in-out !important',
        borderRadius: '24px',
        '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: 'none'
    }
}

})

const CompanyHorizontalScroll = () => {
    const classes = useStyles();

    return (
        <Container fluid style={{marginTop: '50px'}}>
            <Row className ={`${classes.scrollingWrapper} flex-row flex-nowrap mt-2 pb-2`}>
                <Col md={3}>
                    <Card className={classes.cardBlock}>
                        <img style={{height: '100%', width: '100%'}} src={Forbes_img}/>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className={classes.cardBlock}>
                        <img style={{height: '100%', width: '100%'}} src={ibm_img}/>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className={classes.cardBlock}>
                        <img style={{height: '100%', width: '100%'}} src={microsoft_img}/>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className={classes.cardBlock}>
                        <img style={{height: '100%', width: '100%'}} src={samsung_img}/>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className={classes.cardBlock}>
                        <img style={{height: '100%', width: '100%'}} src={tesla_img}/>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className={classes.cardBlock}>
                        <img style={{height: '100%', width: '100%'}} src={Forbes_img}/>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default CompanyHorizontalScroll