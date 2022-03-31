import React, { useEffect, useState } from "react";
import Web3 from "web3";
import "./App.css";

function App() {
  const [account, setAccount] = useState("");

  useEffect(() => {
    (async function load() {
      const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
      const accounts = await web3.eth.requestAccounts();

      setAccount(accounts[0]);
    })();
  }, []);

  return (
    <div className="App">
      <div className="login-info">
        {account ? (
          <div>Your public key is {account}</div>
        ) : (
          <p>MetaMask is locked - please login</p>
        )}
      </div>
    </div>
  );
}

export default App;
