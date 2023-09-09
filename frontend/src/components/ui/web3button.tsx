import { Web3Button } from '@web3modal/react'

interface Props {
    icon?: 'show' | 'hide'
    label?: string
    balance?: 'show' | 'hide'
}

export default function W3Button() {

    return (
        <Web3Button />
    )
}