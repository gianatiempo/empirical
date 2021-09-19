import { Result, Card } from 'antd';

const cardStyle = { marginBottom: 24 };

const Error = ({ message }) => (
  <Card bordered={false} style={cardStyle}>
    <Result status='error' title='Oops! This should not happen!' subTitle={message} />
  </Card>
);

export default Error;
