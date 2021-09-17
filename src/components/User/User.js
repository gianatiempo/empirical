import { Avatar, Card, Typography } from 'antd';
import { useState, useEffect } from 'react';
import Spinner from '../Spinner/Spinner';

const { Paragraph } = Typography;

const cardStyle = { padding: '16px 0', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' };
const avatarStyle = { margin: '0 8px' };
const pStyle = { marginBottom: 0 };

const User = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => setUser(data.results[0]));
  }, []);

  return user ? (
    <Card bordered={false} bodyStyle={cardStyle}>
      <Avatar src={user.picture.thumbnail} data-testid='user-avatar' style={avatarStyle} />
      <Paragraph style={pStyle}>{`${user.name.title} ${user.name.first} ${user.name.last}`} </Paragraph>
    </Card>
  ) : (
    <Spinner size={32} height={100} />
  );
};

export default User;
