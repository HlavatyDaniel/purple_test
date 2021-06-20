import React, {useEffect, useState} from 'react'

import axios from "axios"

import Header from "../components/Header";

const Statistics: React.FC = () => {

    const [conversionsCount, setConversionsCount] = useState(0)
    const [amountConverted, setAmountConverted] = useState(0)
    const [favoriteDestination, setFavoriteDestination] = useState('')

    useEffect(() => {
        document.title = "Statistics"

        const fetchStatistics = () => {
            axios.get('http://localhost:8080/statistics?specifyStatistic=favoriteDestination')
                .then(response => {
                    setFavoriteDestination(response.data.result)
                })

            axios.get('http://localhost:8080/statistics?specifyStatistic=amountConverted')
                .then(response => {
                    setAmountConverted(Number(Number(response.data.result).toFixed(2)))
                })

            axios.get('http://localhost:8080/statistics?specifyStatistic=conversionCount')
                .then(response => {
                    setConversionsCount(response.data.result);
                })
        }
        fetchStatistics()
    }, []);

    return (
        <div>
            <Header viewName={"Statistics"} />
            <main>
                <p>
                    Most popular destination currency: &nbsp; {favoriteDestination}
                </p>
                <p>
                    Total amount converted (in USD): &nbsp; {amountConverted}
                </p>
                <p>
                    Total amount of conversion requests made: &nbsp; {conversionsCount}
                </p>
            </main>
        </div>
    )
}

export default Statistics