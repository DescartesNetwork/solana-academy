import { useCallback, useEffect, useState } from "react";
import {
  useWalletKit,
  useSolana,
  useConnectedWallet
} from "@gokiprotocol/walletkit";

import { Button, Col, Row } from "antd";
import WalletInfo from "components/walletInfo";

import "./App.css";

function App() {
  // State: balance (type = number, default value = 0)
  const [balance, setBalance] = useState<number>(0);
  // Goki hooks
  const wallet = useConnectedWallet();
  const { connect } = useWalletKit();
  const { disconnect, providerMut } = useSolana();

  const fetchBalance = useCallback(async () => {
    // TODO: fetch balance
    if (wallet && providerMut) {
      let balance = await providerMut.connection.getBalance(wallet.publicKey);
      return setBalance(balance);
    }
    setBalance(0);
  }, [providerMut, wallet]);

  useEffect(() => {
    fetchBalance();
  }, [fetchBalance]);

  return (
    <Row justify="center" gutter={[24, 24]}>
      <Col span={12} style={{ paddingTop: "50px" }}>
        <WalletInfo
          address={wallet?.publicKey.toBase58() || ""}
          balance={balance}
        />
      </Col>
      {/* Button connect wallet */}
      <Col span={24} style={{ textAlign: "center" }}>
        {wallet ? (
          <Button type="primary" onClick={disconnect}>
            Disconnect
          </Button>
        ) : (
          // Call connectWallet function when click Button
          <Button type="primary" onClick={connect}>
            Connect Wallet
          </Button>
        )}
      </Col>
    </Row>
  );
}

export default App;
