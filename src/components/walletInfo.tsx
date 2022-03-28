import { Col, Row } from "antd";

const WalletInfo = ({ address, balance }: { address: string; balance: number }) => {
  return (
    <Row gutter={[24, 24]}>
      {/* Wallet address */}
      <Col span={24}>
        <Row gutter={[12, 12]}>
          <Col>Wallet Address:</Col>
          <Col>{address}</Col>
        </Row>
      </Col>
      {/* Wallet balance */}
      <Col span={24}>
        <Row gutter={[12, 12]}>
          <Col>Balance:</Col>
          <Col>{balance}</Col>
        </Row>
      </Col>
    </Row>
  );
};

export default WalletInfo;
