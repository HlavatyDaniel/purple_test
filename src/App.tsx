import React from "react"
import {Switch, Route} from "react-router-dom"

import TheNavigation from "./components/TheNavigation/TheNavigation"

//views
import Conversions from "./views/Conversions"
import Statistics from "./views/Statistics"
import Home from "./views/Home"

import styles from "./App.module.scss"

function App() {
    return (
        <div className={styles.App}>
            <header>
                <nav>
                    <TheNavigation/>
                </nav>
            </header>
            <main className={styles.content}>
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/conversions" component={Conversions}/>
                    <Route path="/statistics" component={Statistics}/>
                </Switch>
            </main>
        </div>
    )
}

export default App