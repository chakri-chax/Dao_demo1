import React from 'react'
import { connectWallet } from '../Blockchain'
import { truncate,useGlobalState } from '../store'

const Header = () => {
    const [connectedAccount] = useGlobalState('connectedAccount')

  return (
    <>
    <div>Header</div>
    <div>
    {connectedAccount ? (
                <button>
                  {truncate(connectedAccount, 4, 4, 11)}
                </button>
              ) : (
                <button
                  onClick={connectWallet}
                >
                  Connect Wallet
                </button>
              )}
    </div>
    </>

  )
}

export default Header