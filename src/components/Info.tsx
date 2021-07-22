import React from 'react';
import _ from "lodash";

interface IProps {
    info: object  | any
}

const Info: React.FC<IProps> = (props) => {
    console.log(props.info)
    if (_.isEmpty(props.info) || props.info.cod !== 200) {
        return (
            <div>
                <p>Failed</p>
            </div>
        )
    }
    else {
        return (
            <div>
                <p><strong>City name: </strong>{ props.info.name }</p>
                <p><strong>Highest Temperature: </strong>{props.info.main.temp_max - 273.14} °C</p>
                <p><strong>Lowest Temperature: </strong>{props.info.main.temp_min - 273.14} °C</p>
                <p><strong>Temperature: </strong>{ props.info.main.temp - 273.14 } °C</p>

            </div>
        )
    }
    
}

export default Info
