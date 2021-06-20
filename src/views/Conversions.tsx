import React, {useEffect} from 'react'

import InputForm from "../components/TheForm/InputForm";

import Header from "../components/Header"

const Conversions: React.FC = () => {

    useEffect(() => {
        document.title = "Conversions";
    })

    return (
        <div>
            <Header viewName={"Conversions"} />
            <InputForm/>
        </div>
    )
}

export default Conversions