import React, { useEffect, useState } from 'react'
import Input from '../Input'
import './styles.css'

const BinCalc = (props) => {
    const [bin, setBin] = useState()
    const [dec, setDec] = useState()
    const [error, setError] = useState()

    const binValidator = /^[0-1]+$/

    useEffect(() => {
        if (bin) {
            if (binValidator.test(bin)) {
                setDec(parseInt(bin, 2))
                setError('')
            } else {
                setError("Digite somente números! (0-1)")
            }
        }
    }, [bin])

    return (
        <div className="BinCalc">
            <span className="title">Bin2Dec</span>
            <div class="BinCalc-content">
                <Input placeholder="Binário" error={error} onChange={setBin} />
                <Input placeholder="Decimal" disabled value={dec} />
            </div>
        </div>
    )
}

export default BinCalc