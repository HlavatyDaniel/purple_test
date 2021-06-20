import React, {useEffect} from 'react'

import Header from "../components/Header"

import HomeLogo from "../assets/Home_logo.png"

const Home: React.FC = () => {

    useEffect(() => {
        document.title = "Welcome";
    })

    return (
        <div>
            <Header viewName={"Welcome"} />
            <img src={HomeLogo} alt="HomeLogo"/>
        </div>
    )
}

export default Home