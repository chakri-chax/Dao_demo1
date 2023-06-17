import React, { useState } from 'react';

const MyComponent = () => {
  const [loading, setLoading] = useState(false);
  const [to,setTo] = useState("")
  const [amount,setAmount] = useState("")

  const handleTransaction = async () => {
    try {
      setLoading(true);
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const transactionObject = {
        from: accounts[0],
        to: to,
        value: '0x' + (amount * 10 ** 18).toString(16), // Amount in wei (1 Ether)
      };
      const transaction = await window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [transactionObject],
      });
      //Value = '0x' + (1 * 10 ** 18).toString(16)
      console.log('Transaction hash:', transaction);
      
    } catch (error) {
      console.error('Error sending transaction:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleClick = () => {
    handleTransaction();
  };

  return (
    <div>
        <input placeholder='Amount in Eth' onChange={(e)=>setAmount(e.target.value)} value={amount} required/>
        <input placeholder='Address' onChange={(e)=>setTo(e.target.value)} value={to} />
        
      <button onClick={handleClick} disabled={loading}>
        {loading ? 'Sending...' : 'Send Transaction'}
      </button>
      <p>0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199</p>
      <p>amount : {amount}</p>
    </div>
  );
};

export default MyComponent;
