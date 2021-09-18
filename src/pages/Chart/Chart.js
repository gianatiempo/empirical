import { useState, useEffect } from 'react';
import { Card } from 'antd';
import { Stock } from '@ant-design/charts';

const cardStyle = { display: 'flex', flexDirection: 'column', marginBottom: 8 };

const Chart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/qtQ9nYfYJe/stock-data.json')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => {
        console.log('fetch data failed', error);
      });
  }, []);

  var config = {
    data: data,
    xField: 'trade_date',
    yField: ['open', 'close', 'high', 'low']
  };
  return (
    <Card bordered={false} bodyStyle={cardStyle}>
      <Stock {...config} />
    </Card>
  );
};

export default Chart;
