import React from 'react'

interface Props {
    viewName: string
}

const Header: React.FC<Props> = (props) => {

    const {viewName} = props

    return (
        <header>
            <h1>
                {viewName}
            </h1>
        </header>
    )
}

export default Header