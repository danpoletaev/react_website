import React from 'react'
import {makeStyles} from "@material-ui/core/styles";

import stages_main from "../images/icon/ic_calc.png"
import workforce_img from "../images/WorkforceM/background_2.png";

const useStyles = makeStyles({
    container: {
        width: '500px',
        height: '400px',
        borderRadius: '25px',
        padding: '50px',
        marginLeft: '50px',
        boxShadow: '0px 0px 21px -1px rgba(136,136,136,1)',
    }
})

const ServiceItem = () => {

    const classes = useStyles()

    return (
        <div className={classes.container}>
            <img style={{height: 'auto', width: '20%', marginBotom: '10px'}} src={stages_main}/>
            <h4>Нормирование и калькулятор численности</h4>
            <br/>
            <ul>
                <li>Анализ бизнес-процессов</li>
                <li>Нормирование бизнес-процессов</li>
                <li>Описание бизнес-процессов и рекомендации по оптимизации</li>
                <li>Разработка модели расчет численности</li>
            </ul>
        </div>
    )
}

export default ServiceItem