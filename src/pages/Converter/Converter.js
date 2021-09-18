import { useState } from 'react';
import { Card, Col, Row, TreeSelect, InputNumber, Space, Button, Typography } from 'antd';
import { SwapOutlined } from '@ant-design/icons';
import { useCryptocurrency } from '../../hooks/useData';
import { Error, Spinner } from '../../components';

const cardStyle = { display: 'flex', flexDirection: 'column', marginBottom: 8 };

const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    selectable: false,
    children: [
      { title: 'Child Node1', value: '0-0-1' },
      { title: 'Child Node2', value: '0-0-2' }
    ]
  },
  { title: 'Node2', value: '0-1', selectable: false }
];

const Converter = () => {
  const [conversion, setConversion] = useState({ current: 1, pageSize: 10, value: '0-0-1' });
  const { isLoading, isError, data, error } = useCryptocurrency(conversion);

  if (isError) {
    return <Error message={error.message} />;
  }

  return (
    <>
      <Card bordered={false} bodyStyle={cardStyle}>
        {isLoading ? <Spinner /> : null}
        {data ? (
          <Space direction='vertical'>
            <Row>
              <Col span={10}>
                <InputNumber style={{ width: '100%' }} min='0' step='0.00000001' stringMode />
              </Col>
            </Row>
            <Row>
              <Col span={10}>
                <TreeSelect
                  style={{ width: '100%' }}
                  value={conversion.value}
                  dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                  treeData={treeData}
                  placeholder='Please select'
                  treeDefaultExpandAll
                  onChange={value => setConversion({ ...conversion, value })}
                />
              </Col>
              <Col span={1} offset={2}>
                <SwapOutlined />
              </Col>
              <Col span={10} offset={1}>
                <TreeSelect
                  style={{ width: '100%' }}
                  value={conversion.value}
                  dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                  treeData={treeData}
                  placeholder='Please select'
                  treeDefaultExpandAll
                  onChange={value => setConversion({ ...conversion, value })}
                />
              </Col>
            </Row>
          </Space>
        ) : null}
      </Card>
      <Row>
        <Col span={6} offset={9}>
          <Card bordered={false} bodyStyle={cardStyle}>
            <Typography.Title level={3}>1234 BTC</Typography.Title>
            <Button>Convert</Button>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Converter;
