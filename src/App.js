import React, { Suspense } from 'react';
import { Layout, Menu, PageHeader } from 'antd';
import { DollarOutlined, SwapOutlined, LineChartOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { Switch, Route, useHistory, useLocation } from 'react-router-dom';
import logo from './assets/logo.jpeg';
import { User, Spinner } from './components';

const Chart = React.lazy(() => import('./pages/Chart/Chart'));
const Converter = React.lazy(() => import('./pages/Converter/Converter'));
const Cryptocurrency = React.lazy(() => import('./pages/Cryptocurrency/Cryptocurrency'));
const Optional = React.lazy(() => import('./pages/Optional/Optional'));

const { Content, Sider, Header } = Layout;

const layoutStyle = { height: '100vh' };
const logoStyle = { height: 44, margin: '10px 6px' };
const headerStyle = { backgroundColor: 'white', padding: '0 24px', display: 'flex', justifyContent: 'space-between' };
const contentStyle = { margin: '24px', overflow: 'auto' };

const headerTitles = {
  '/': ['Cryptocurrency', 'Check the Crypto world here'],
  '/converter': ['Convert', 'Convert your coins and get rich'],
  '/chart': ['Chart', 'View nice graphs and decide what to buy'],
  '/optional': ['🤯', 'Something nice to play with?']
};

const App = () => {
  const history = useHistory();
  const location = useLocation();

  return (
    <Layout style={layoutStyle}>
      <Sider theme='light'>
        <img src={logo} alt='empirical logo' style={logoStyle} />
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
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>
          <PageHeader title={headerTitles[location.pathname][0]} subTitle={headerTitles[location.pathname][1]} />
          <User />
        </Header>
        <Content style={contentStyle}>
          <Suspense fallback={<Spinner height={'calc(100vh - 48px)'} />}>
            <Switch>
              <Route path='/' exact component={Cryptocurrency} />
              <Route path='/converter' component={Converter} />
              <Route path='/chart' component={Chart} />
              <Route path='/optional' component={Optional} />
            </Switch>
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
