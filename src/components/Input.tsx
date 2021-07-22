import axios from 'axios';
import React from 'react'
import Info from './Info';


interface IName {
    name: string
}

const Input: React.FC = () => {
    const [city, setCity] = React.useState<IName>({} as IName);
    const [info, setInfo] = React.useState<any>()

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(city.name);
        setCity({...city, [e.target.name]: e.target.value})
    }

    const onClick = async () => {
        await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=201320f6eabcb805d679c66df6a4d778`)
            .then(res => {
                setInfo(res.data)
            console.log( res.data)
            }).catch(e => {
                console.log(e)
            })
    }

    // console.log("info: ",typeof info.cod)

    return (
        <div>
            <input type="text" name="name" onChange={onChange} placeholder="select a city name" />
            <button onClick={onClick}>Get Weather</button>

            {/* {!_.isEmpty(info) && info.cod !== 200 && } */}
            <Info info={ info }/>
        </div>
    )
}

export default Input