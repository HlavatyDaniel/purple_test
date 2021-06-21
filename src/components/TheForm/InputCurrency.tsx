import React from "react"

import styles from "./InputCurrency.module.scss"

import CurrencyInput from "react-currency-input-field";

interface Props {
    onValueChange: (value : number ) => void
    labelString: string
}

const InputCurrency: React.FC<Props> = (props) => {

    const handleValueChange = (value : string | undefined) => {
        let amount : number = Number(Number(value?.split(',').join('')).toFixed(2))
        if (amount) props.onValueChange(amount)
        else props.onValueChange(0)
    }

    return (
        <label>
            {props.labelString}
            <CurrencyInput
                className={styles.currencyInput}
                placeholder="$1,234,567.00"
                allowDecimals={true}
                onValueChange={handleValueChange}
            />
        </label>
    )
}

export default InputCurrency