import { useSelector } from "react-redux";

import { Card, Col, Row, Typography } from "antd";

import { AppState } from "store";

const WalletInfo = () => {
  const {
    wallet: { walletAddress, balance }
  } = useSelector((state: AppState) => state);
  return (
    <Card title="Wallet Information">
      <Row gutter={[24, 24]}>
        {/* Wallet address */}
        <Col span={24}>
          <Typography.Text>Account Address: {walletAddress}</Typography.Text>
        </Col>
        {/* Wallet balance */}
        <Col span={24}>
          <Typography.Text>Balance: {balance}</Typography.Text>
        </Col>
      </Row>
    </Card>
  );
};

export default WalletInfo;
