import { Card, Row, Col, Space } from 'antd';
import { Liquid } from '@ant-design/charts';
import { useOptional } from '../../hooks/useData';
import { Error, Spinner } from '../../components';

const rowStyle = { margin: 0 };
const spaceStyle = { float: 'right' };

const Optional = () => {
  const { isLoading, isError, data, error } = useOptional();

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <Error message={error.message} />;
  }

  const plan = data.data.plan;
  const usage = data.data.usage;

  const Rect = ({ p }) => <Liquid percent={p} shape='rect' height={220} width={220} wave={{ length: 128 }} />;
  return (
    <Row gutter={16} style={rowStyle}>
      <Col span={6} offset={18}>
        <Space direction='vertical' style={spaceStyle}>
          <Card title='Minute Consumption'>
            <Rect p={+(usage.current_minute.requests_made / plan.rate_limit_minute)} />
          </Card>
          <Card title='Daily Consumption'>
            <Rect
              p={usage.current_day.credits_used ? +(usage.current_day.credits_used / plan.credit_limit_daily) : 0}
            />
          </Card>
          <Card title='Monthly Consumption'>
            <Rect
              p={usage.current_month.credits_used ? +(usage.current_month.credits_used / plan.credit_limit_monthly) : 0}
            />
          </Card>
        </Space>
      </Col>
    </Row>
  );
};

export default Optional;
