import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Home() {
  const { account, connectWallet, error } = useContext(AppContext);
  console.log(error);
  return (
    <div className="container">
      <div className="box">
        <h2>
          MetaMask <span className="block">Connect.</span>
        </h2>

        {account ? (
          <div className="account-box">
            <p className="shadow-border">{account}</p>
          </div>
        ) : (
          <button className="btn shadow-border" onClick={connectWallet}>
            Connect
          </button>
        )}
        {error && <p className={`error shadow-border`}>{`Error: ${error}`}</p>}
      </div>
    </div>
  );
}
