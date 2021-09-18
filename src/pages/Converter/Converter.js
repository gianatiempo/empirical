import { useState } from 'react';
import { Card, Col, Row, Select, InputNumber, Space, Button, Typography } from 'antd';
import { SwapOutlined } from '@ant-design/icons';
import { useCoin, useConversion } from '../../hooks/useData';
import { Error, Spinner } from '../../components';

const { Option } = Select;

const cardStyle = { display: 'flex', flexDirection: 'column', marginBottom: 8 };

const Converter = () => {
  const [conversion, setConversion] = useState({ origin: null, destination: null, amount: 0 });
  const { isLoading, isError, data: coins, error } = useCoin();
  const { data: converted, refetch } = useConversion(conversion);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <Error message={error.message} />;
  }

  const coinList = coins.data[Object.keys(coins.data)[0]];

  return (
    <>
      <Card bordered={false} bodyStyle={cardStyle}>
        <Space direction='vertical'>
          <Row>
            <Col span={10}>
              <InputNumber
                style={{ width: '100%' }}
                min='0'
                step='0.00000001'
                stringMode
                onChange={value => setConversion({ ...conversion, amount: value })}
              />
            </Col>
          </Row>
          <Row>
            <Col span={10}>
              <Select
                style={{ width: '100%' }}
                value={conversion.origin}
                placeholder='Origin COIN'
                onChange={value => setConversion({ ...conversion, origin: value })}>
                {coinList.map(coin => (
                  <Option key={coin.symbol}>
                    {coin.name} - {coin.symbol}
                  </Option>
                ))}
              </Select>
            </Col>
            <Col span={1} offset={2}>
              <SwapOutlined />
            </Col>
            <Col span={10} offset={1}>
              <Select
                style={{ width: '100%' }}
                value={conversion.destination}
                placeholder='Destination COIN'
                onChange={value => setConversion({ ...conversion, destination: value })}>
                {coinList.map(coin => (
                  <Option key={coin.symbol}>
                    {coin.name} - {coin.symbol}
                  </Option>
                ))}
              </Select>
            </Col>
          </Row>
        </Space>
      </Card>
      <Row>
        <Col span={6} offset={9}>
          <Card bordered={false} bodyStyle={cardStyle}>
            {converted ? (
              <Typography.Title level={3}>
                {converted.data.quote[Object.keys(converted.data.quote)[0]].price.toFixed(8)} {conversion.destination}
              </Typography.Title>
            ) : (
              <Typography.Title level={3}>
                {conversion.amount} {conversion.origin}
              </Typography.Title>
            )}
            <Button
              onClick={refetch}
              disabled={conversion.origin === null || conversion.destination === null || conversion.amount <= 0}>
              Convert
            </Button>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Converter;
