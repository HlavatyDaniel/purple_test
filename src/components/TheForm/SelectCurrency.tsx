import React, {useRef} from "react"

import styles from './SelectCurrency.module.scss'

import {CurrencyOption} from "../../types";

interface Props {
    currencyOptions: CurrencyOption[]
    onOptionChange: (option: string) => void
    labelString: string
}

const SelectCurrency: React.FC<Props> = (props) => {

    const {currencyOptions} = props
    const inputCurrencyRef = useRef<HTMLSelectElement>(null)

    const handleChange = () => {
        let currency : string = String(inputCurrencyRef.current?.value)
        if (currency) props.onOptionChange(currency)
    }

    return (
        <label>
            {props.labelString}
            <select
                className={styles.selectCurrency}
                onChange={handleChange}
                ref={inputCurrencyRef}
            >
                {currencyOptions.map(currency => (
                    <option key={currency.id}>
                        {currency.currency}
                    </option>
                ))}
            </select>
        </label>
    )

}

export default SelectCurrency