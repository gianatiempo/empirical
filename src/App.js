import { Layout, Menu } from 'antd';
import { DollarOutlined, SwapOutlined, LineChartOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import logo from './assets/logo.jpeg';

const { Content, Sider } = Layout;

const App = () => (
  <Layout style={{ height: '100vh' }}>
    <Sider theme='light'>
      <img src={logo} alt='empirical logo' style={{ height: 44, margin: '8px 6px' }} />
      <Menu defaultSelectedKeys={['1']} mode='inline'>
        <Menu.Item key='1' icon={<DollarOutlined />}>
          Cryptocurrencies
        </Menu.Item>
        <Menu.Item key='2' icon={<SwapOutlined />}>
          Converter
        </Menu.Item>
        <Menu.Item key='3' icon={<LineChartOutlined />}>
          Charts
        </Menu.Item>
        <Menu.Item key='4' icon={<QuestionCircleOutlined />}>
          Optional
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout style={{ height: '100vh' }}>
      <Content style={{ margin: '24px', overflow: 'auto' }}>Bill is a cat.</Content>
    </Layout>
  </Layout>
);

export default App;
