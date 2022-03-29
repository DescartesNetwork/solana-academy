import { useSelector } from "react-redux";

import { Card, Col, Row, Typography } from "antd";

import { AppState } from "store";

const Transfer = () => {
  const {
    wallet: { walletAddress, balance }
  } = useSelector((state: AppState) => state);
  return (
    <Card title="Transfer">
      <Row gutter={[24, 24]}>
        {/* Sender address */}
        <Col span={24}>
          <Typography.Text>Sender Address: {walletAddress}</Typography.Text>
        </Col>
        {/* Sender balance */}
        <Col span={24}>
          <Typography.Text>Sender Balance: {balance}</Typography.Text>
        </Col>
      </Row>
    </Card>
  );
};

export default Transfer;
