import { Card, Typography } from 'antd';
import { Column } from '@ant-design/charts';
import { useCryptocurrency } from '../../hooks/useData';
import { Error, Spinner } from '../../components';

const { Title } = Typography;
const HUNDRED_M = 100000000;

const cardStyle = { display: 'flex', flexDirection: 'column', marginBottom: 8 };
const titleStyle = { display: 'flex', margin: 0, justifyContent: 'center' };

const Chart = () => {
  const { isLoading, isError, data, error } = useCryptocurrency({ current: 1, pageSize: 30 });

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <Error message={error.message} />;
  }

  const graphData = data.data.map(coin => ({
    name: `${coin.name} (${coin.symbol})`,
    marketCap: +(coin.quote.USD.market_cap / HUNDRED_M).toFixed(2)
  }));

  return (
    <>
      <Card bordered={false} bodyStyle={cardStyle}>
        <Title level={3} style={titleStyle}>
          Market Cap for TOP 10 Biggest Coins
        </Title>
      </Card>
      <Card bordered={false} bodyStyle={cardStyle}>
        <Column
          data={graphData}
          xField='name'
          yField='marketCap'
          columnWidthRatio={0.8}
          meta={{ marketCap: { alias: 'Market Cap (100MM)' } }}
        />
      </Card>
    </>
  );
};

export default Chart;
