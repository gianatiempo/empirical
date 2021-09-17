import { Result, Card } from 'antd';

const Error = ({ message }) => (
  <Card bordered={false} style={{ marginBottom: 24 }}>
    <Result status='error' title='Oops! This should not happen!' subTitle={message} />
  </Card>
);

export default Error;
