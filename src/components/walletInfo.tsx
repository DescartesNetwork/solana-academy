import { Button, Card, Col, Form, Input, Row, Space, Typography } from "antd";
import form from "antd/lib/form";

const WalletInfo = ({
  address,
  balance
}: {
  address: string;
  balance: number;
}) => {
  return (
    <Card>
      <Row gutter={[24, 24]}>
        {/* Wallet address */}
        <Col span={24}>
          <Typography.Text>Account Address: {address}</Typography.Text>
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
