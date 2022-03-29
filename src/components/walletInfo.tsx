import { Card, Col, Row, Typography } from "antd";
import { useSelector } from "react-redux";
import { AppState } from "store";

const WalletInfo = () => {
  const {
    wallet: { walletAddress, balance }
  } = useSelector((state: AppState) => state);
  return (
    <Card>
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
