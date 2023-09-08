import { useWeb3Modal } from '@web3modal/react'


export default function W3Button() {
    const { open, close } = useWeb3Modal()

    return <button onClick={() => open()}>Connect</button>
}