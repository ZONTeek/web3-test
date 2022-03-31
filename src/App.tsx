import React, { useEffect, useState } from "react";
import Web3 from "web3";
import "./App.css";

function App() {
  const [account, setAccount] = useState("");
  const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");

  async function getKey() {
    const accounts = await web3.eth.requestAccounts();
    setAccount(accounts[0]);
  }

  useEffect(() => {
    getKey();
  }, []);

  return (
    <div className="App">
      <div className="login-info">
        {account ? (
          <div>Your public key is {account}</div>
        ) : (
          <div>
            <p>MetaMask is locked - please login</p>
            <button onClick={getKey}>Get public key</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
