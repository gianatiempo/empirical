import { Layout, Menu } from 'antd';
import { DollarOutlined, SwapOutlined, LineChartOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { Switch, Route, useHistory, useLocation } from 'react-router-dom';
import { Chart, Converter, Cryptocurrency, Optional } from './pages';
import logo from './assets/logo.jpeg';

const { Content, Sider } = Layout;

const App = () => {
  const history = useHistory();
  const location = useLocation();

  return (
    <Layout style={{ height: '100vh' }}>
      <Sider theme='light'>
        <img src={logo} alt='empirical logo' style={{ height: 44, margin: '8px 6px' }} />
        <Menu defaultSelectedKeys={[location.pathname]} mode='inline'>
          <Menu.Item key='/' icon={<DollarOutlined />} onClick={() => history.push('/')}>
            Cryptocurrencies
          </Menu.Item>
          <Menu.Item key='/converter' icon={<SwapOutlined />} onClick={() => history.push('/converter')}>
            Converter
          </Menu.Item>
          <Menu.Item key='/chart' icon={<LineChartOutlined />} onClick={() => history.push('/chart')}>
            Charts
          </Menu.Item>
          <Menu.Item key='/optional' icon={<QuestionCircleOutlined />} onClick={() => history.push('/optional')}>
            Optional
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ height: '100vh' }}>
        <Content style={{ margin: '24px', overflow: 'auto' }}>
          <Switch>
            <Route path='/' exact component={Cryptocurrency} />
            <Route path='/converter' component={Converter} />
            <Route path='/chart' component={Chart} />
            <Route path='/optional' component={Optional} />
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
