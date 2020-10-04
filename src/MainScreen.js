import React from 'react'
import {Container, Col, Row, Navbar, Nav, Image} from "react-bootstrap";
import CustomNavbar from "./components/CustomNavbar";
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

//images and resources
import Background_sh1 from './images/Site_back.jpg'
import Main_img from './images/m_r.png'

const useStyles = makeStyles({
    mainContainer: {
        background: '#ffffff',
        fontColor: '#FFFFFF',
        height: '100vh',
        backgroundImage: `url(${Background_sh1})`,
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat'
    },
    firstScreenShape: {
        color: '#ffffff',
        marginLeft: '5%',
        marginTop: '2%'
    },
    imageContainer: {
        marginTop: '10px'
    }
})

const MainButton = withStyles((theme) => ({
    root: {
        color: '#ffffff',
        fontSize: '12px',
        background: 'linear-gradient(42deg, rgba(255,51,204,1) 0%, rgba(255,153,255,1) 87%)',
        '&:hover': {
            backgroundColor: '#126753',
        },
        borderRadius: '40px',
        padding: '20px',
        width: '240px'
    },
}))(Button);

const LandingPage = () => {

    const classes = useStyles();

    return (
        <>
            <Container fluid className={classes.mainContainer}>
                <CustomNavbar/>
                <Container fluid className={`${classes.firstScreenShape}`}>
                    <Row>
                        <Col md={5}>
                            <h1 style={{fontSize: '60px', lineHeight: '0.9'}}>Гибкие графики персонала</h1>
                            <h3 style={{marginTop: '20px'}}>Для оптимизации затрат</h3>
                            <br/>
                            <p style={{width: '70%'}}>Снижаем затраты на ФОТ и увеличиваем выручку за счет внедрения процесса управлени
                                рабочим
                                временем</p>
                            <br/>
                            <MainButton>Внедрить систему</MainButton>
                        </Col>
                        <Col md={6} className={classes.imageContainer}>
                            <img style={{height: 'auto', width: '115%'}} src={Main_img}/>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default LandingPage