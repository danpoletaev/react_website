import React from 'react'
import ServiceItem from "./ServiceItem";
import {Container, Col, Row, Navbar, Nav, Image} from "react-bootstrap";
import {makeStyles} from "@material-ui/core/styles";

//import icons
import ic_calculator from "../images/icon/ic_calc.png"
import ic_graph from "../images/icon/ic_graph.png"
import back1 from '../images/icon/back1.png'
import back2 from '../images/icon/back2.png'
import back3 from '../images/icon/back3.png'
import back4 from '../images/icon/back4.png'
import back5 from '../images/icon/back5.png'

const useStyles = makeStyles({
    serviceHeader: {
        padding: '10px',
        marginTop: '7em'
    }
})

const Services = () => {

    const classes = useStyles()

    return (
        <>
            <Row>
                <Col md={12} className={classes.serviceHeader}>
                    <h1 className='text-center'>Услуги</h1>
                </Col>
            </Row>
            <Row className='justify-content-center w-75 ml-auto mr-auto'>
                <Col>
                    <ServiceItem
                        header='Нормирование и калькулятор численности'
                        bulletList={['Анализ бизнес-процессов', 'Нормирование бизнес-процессов', 'Описание бизнес-процессов и рекомендации по оптимизации', 'Разработка модели расчет численности']}
                        icon={ic_calculator}
                        back={back1}
                    />
                </Col>
                <Col>
                    <ServiceItem
                        header='Планирование гибких графиков'
                        bulletList={['Прогназирование бизнес-драйверов', 'Методология построения рабочей нагрузки на уровен часа', 'Планирование графиков работы для внутреннего персонала', 'Управление внешним персоналом']}
                        icon={ic_graph}
                        back={back2}
                    />
                </Col>
            </Row>
            <Row className='justify-content-center mt-3'>
                <Col>
                    <ServiceItem
                        header='Контроль рабочего времени'
                        bulletList={['Биометрический учет фактически отработанного времени', 'Автоматическое заполнение табеля Т13', 'Анализ отклонений факта от плана']}
                        icon={ic_graph}
                        back={back3}
                    />
                </Col>
                <Col>
                    <ServiceItem
                        header='Контроль рабочего времени'
                        bulletList={['Биометрический учет фактически отработанного времени', 'Автоматическое заполнение табеля Т13', 'Анализ отклонений факта от плана']}
                        icon={ic_graph}
                        back={back3}
                    />
                </Col>
                <Col>
                    <ServiceItem
                        header='Контроль рабочего времени'
                        bulletList={['Биометрический учет фактически отработанного времени', 'Автоматическое заполнение табеля Т13', 'Анализ отклонений факта от плана']}
                        icon={ic_graph}
                        back={back3}
                    />
                </Col>
            </Row>
        </>
    )
}

export default Services