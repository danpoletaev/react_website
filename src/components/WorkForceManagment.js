import React from 'react'
import {makeStyles, withStyles} from '@material-ui/core/styles';
import {Container, Col, Row, Navbar, Nav, Image} from "react-bootstrap";

//import images
import workforce_img from "../images/WorkforceM/background_2.png";

const useStyles = makeStyles({
    paragraphs: {
        fontSize: '14px',
    }
})
const WorkForceManagment = () => {

    const classes = useStyles()

    return (
        <Row className={classes.paragraphs}>
            <Col md={6}>
                <img style={{height: 'auto', width: '100%'}} src={workforce_img}/>
            </Col>
            <Col style={{marginTop: '120px', marginLeft: '100px'}} md={4}>
                <p style={{fontWeight: 'bold', fontSize: '16px'}}>
                    <b>Workforce Management (WFM)</b> - класс автоматизированных решений для планирования рабочего
                    времени персонала в торговых сетях
                </p>
                <br/>
                <div style={{color: '#999999'}}>
                    <p>
                        WFM позволяет бизнесу повышать продажи и экономить на фонде оплаты труда.
                    </p>
                    <p>
                        Программа собирает множество данных от динамики и структуры продаж до рабочих графиков
                        сотрудников, и анализирует их. Затем рассчитывает индивидуальные рабочие графики в зависимости
                        от динамики покупательского потока, особенностей спроса, расположения магазинов, времени суток и
                        пожеланий персонала.
                    </p>
                    <p>
                        Такой подход позволяет повышать прибыль и снижать затраты, с одной стороны, не привлекая лишний
                        персонал, а с другой - сокращая очереди на кассах.
                    </p>
                    <br/>
                </div>
                <p style={{color: '#0066cc', fontWeight: 'bold', fontSize: '18px'}}>Скайп презентация системы &#10230;</p>
            </Col>
        </Row>
    );
}

export default WorkForceManagment