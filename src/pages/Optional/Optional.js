import { Statistic, Card, Row, Col, Space } from 'antd';
import { useOptional } from '../../hooks/useData';
import { Error, Spinner } from '../../components';

const { Countdown } = Statistic;

const Optional = () => {
  // const [conversion, setConversion] = useState({ origin: null, destination: null, amount: 0 });
  const { isLoading, isError, data, error } = useOptional();
  // const { data: converted, refetch } = useConversion(conversion);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <Error message={error.message} />;
  }

  const plan = data.data.plan;
  const usage = data.data.usage;

  return (
    <Row gutter={16} style={{ margin: 0 }}>
      <Col span={5} offset={19}>
        <Space direction='vertical'>
          <Card
            bodyStyle={{ display: 'none' }}
            title={
              <Statistic
                title='Minute Consumption'
                value={usage.current_minute.requests_made}
                suffix={`/ ${plan.rate_limit_minute}`}
              />
            }
            extra={<Statistic title='Current Time' value={new Date().toLocaleTimeString()} />}
          />
          <Card
            bodyStyle={{ display: 'none' }}
            title={
              <Statistic
                title='Daily Consumption'
                value={usage.current_day.credits_used ?? 0}
                suffix={`/ ${plan.credit_limit_daily.toLocaleString()}`}
              />
            }
            extra={<Countdown title='Reset:' value={new Date(plan.credit_limit_daily_reset_timestamp)} />}
          />
          <Card
            bodyStyle={{ display: 'none' }}
            title={
              <Statistic
                title='Monthly Consumption'
                value={usage.current_month.credits_used ?? 0}
                suffix={`/ ${plan.credit_limit_monthly.toLocaleString()}`}
              />
            }
            extra={
              <Countdown title='Reset:' value={new Date(plan.credit_limit_monthly_reset_timestamp)} format='D:H:m:s' />
            }
          />
        </Space>
      </Col>
    </Row>
  );
};

export default Optional;
