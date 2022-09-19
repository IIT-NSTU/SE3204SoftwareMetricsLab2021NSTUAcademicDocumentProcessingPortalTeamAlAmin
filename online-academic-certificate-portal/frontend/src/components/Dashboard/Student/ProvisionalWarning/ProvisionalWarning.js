import React from 'react'
import { useParams } from 'react-router-dom'

const ProvisionalWarning = () => {
    const { roll } = useParams()
    return (
        <div>
            <p>Your Provisional certificate has been manipulated</p>
            <p>please contact with your roll (<b>{roll}</b>)</p>
        </div>
    )
}

export default ProvisionalWarning