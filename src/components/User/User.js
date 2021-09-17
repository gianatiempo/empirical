import { Avatar, Card, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useUser } from '../../hooks/useData';
import Spinner from '../Spinner/Spinner';

const { Paragraph } = Typography;

const cardStyle = { padding: '16px 0', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' };
const avatarStyle = { margin: '0 8px' };
const pStyle = { marginBottom: 0 };

const UserContainer = ({ children }) => (
  <Card bordered={false} bodyStyle={cardStyle}>
    {children}
  </Card>
);

const User = () => {
  const { isLoading, isError, data } = useUser();

  if (isLoading) {
    return <Spinner size={32} height={100} />;
  }

  if (isError) {
    return (
      <UserContainer>
        <Avatar style={{ backgroundColor: '#FF0000' }} icon={<UserOutlined />} data-testid='user-avatar-error' />
      </UserContainer>
    );
  }

  const user = data.results[0];

  return (
    <UserContainer>
      <Avatar src={user.picture.thumbnail} style={avatarStyle} data-testid='user-avatar' />
      <Paragraph style={pStyle}>{`${user.name.title} ${user.name.first} ${user.name.last}`} </Paragraph>
    </UserContainer>
  );
};

export default User;
