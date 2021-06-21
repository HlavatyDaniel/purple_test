import React, {useState, useEffect} from "react";
import axios from "axios";

import styles from "./InputForm.module.scss"

import InputCurrency from "./InputCurrency";
import SelectCurrency from "./SelectCurrency";

import {CurrencyOption} from "../../types"

const InputForm: React.FC = () => {

    const [inputCurrencyAmount, setInputCurrencyAmount] = useState(0)
    const [currencyFromOption, setCurrencyFromOption] = useState('');
    const [currencyToOption, setCurrencyToOption] = useState('');
    const [currencyOptions, setCurrencyOptions] = useState<CurrencyOption[]>([]);

    const [amountWarning, setAmountWaring] = useState('');
    const [currencyWarning, setCurrencyWarning] = useState('');
    const [convertedResult, setConvertedResult] = useState('');

    useEffect(() => {
        const fetchCurrencies = () => {
            axios.get('http://localhost:8080/currencies')
                .then(response => {

                    let newCurrencyOptions: CurrencyOption[] = [];
                    let i = 0;
                    Object.keys(response.data).forEach(function(key) {
                        const newCurrencyOption : CurrencyOption = {
                            id : i,
                            currency: key,
                            rate: response.data[key]
                        };
                        i++;
                        newCurrencyOptions.push(newCurrencyOption);
                    })

                    setCurrencyOptions(newCurrencyOptions);
                }).catch(ignore => {
                    console.log("not sure what should i do here, what is standard")
            })
        };

        fetchCurrencies();
    }, []);

    const handleInputCurrencyAmountChange = (amount : number) => {
        setInputCurrencyAmount(amount)
    }

    const handleFromCurrencyChange = (option : string) => {
        setCurrencyFromOption(option)
    }

    const handleToCurrencyChange = (option : string) => {
        setCurrencyToOption(option)
    }

    const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        emptyParagraphs()

        if (inputCurrencyAmount === 0 || inputCurrencyAmount === undefined)
        {
            setAmountWaring("Amount needs to be set!")
            return
        }

        if (currencyFromOption === currencyToOption)
        {
            setCurrencyWarning("Currencies need to differ!")
            return
        }

        axios.get('http://localhost:8080/calculate?from=' + currencyFromOption + '&to=' + currencyToOption + '&amount=' + inputCurrencyAmount
        ).then(response => {
            setConvertedResult("Converted Amount: " + Number(response.data.result).toFixed(2));
        });
    }

    const emptyParagraphs = () => {
        setConvertedResult("")
        setCurrencyWarning("")
        setAmountWaring("")
    }

    return (
        <form className={styles.form}>
            <div className={styles.formGrid}>
                <div className={styles.inputCurrency}>
                    <InputCurrency
                        onValueChange={handleInputCurrencyAmountChange}
                        labelString={"Input amount: "}
                    />
                </div>
                <p className={styles.amountWarning}> {amountWarning} </p>
                <div className={styles.inputFromCurrency}>
                    <SelectCurrency
                        labelString={"Currency from: "}
                        currencyOptions={currencyOptions}
                        onOptionChange={handleFromCurrencyChange}
                    />
                </div>
                <div className={styles.inputToCurrency}>
                    <SelectCurrency
                        labelString={"Currency to: "}
                        currencyOptions={currencyOptions}
                        onOptionChange={handleToCurrencyChange}
                    />
                </div>
                <p className={styles.currencyWarning}> {currencyWarning} </p>
                <input
                    className={styles.inputSubmit}
                    type="submit"
                    onClick={handleSubmit}
                />
                <p> {convertedResult} </p>
            </div>
        </form>
    )
}

export default InputForm