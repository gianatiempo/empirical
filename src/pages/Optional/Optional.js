/* eslint-disable no-template-curly-in-string */
import { Card, Row, Col, Typography, Timeline } from 'antd';
import { Liquid } from '@ant-design/charts';
import { useOptional } from '../../hooks/useData';
import { Error, Spinner } from '../../components';

const { Title, Paragraph, Text } = Typography;
const { Item } = Timeline;

const h1Style = { backgroundColor: 'white', padding: 16 };
const h2Style = { backgroundColor: 'white', padding: 16, margin: '8px 0' };
const cardStyle = { bodyStyle: { padding: '0' }, style: { padding: 16, margin: '8px 0' } };
const rowStyle = { margin: 0 };
const indicatorCardStyle = { marginBottom: 8 };

const Indicator = ({ label, value }) => (
  <Card title={label} style={indicatorCardStyle}>
    <Liquid percent={value} shape='rect' height={220} width={220} wave={{ length: 128 }} />
  </Card>
);

const Optional = () => {
  const { isLoading, isError, data, error } = useOptional();

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <Error message={error.message} />;
  }

  const plan = data.data.plan;
  const usage = data.data.usage;

  return (
    <Row gutter={16} style={rowStyle}>
      <Col span={19}>
        <Title style={h1Style}>Documentation</Title>
        <Card {...cardStyle}>
          <Paragraph>
            Considering this as an MVP, there are a few thing that from the top of my mind I see as future improvements.
            The pages are already being lazy loaded, reducing the bundle size for the initial download, but this can be
            improved with a few simple steps:
          </Paragraph>
          <Paragraph>
            First of all, I will remove, the .css file import in the <Text code>index.css</Text> file and replace it
            with the sass version (detailed instructions can be found in ant design website).
          </Paragraph>
          <Paragraph>Next, I will replace moment with dayjs to further reduce the bundle size.</Paragraph>
        </Card>

        <Title level={2} style={h2Style}>
          1. Architecture Decisions/Preferences
        </Title>
        <Card {...cardStyle}>
          <Timeline>
            <Item color='blue'>
              Using linter/prettier integrated in the IDE (VSCode) with extensions to ensure all code follows a uniform
              styling (specially useful for a team).
            </Item>
            <Item color='blue'>
              Using a folder for pages (sections of the application) separated of the components (in their own folder)
              considering the components could be reused in multiples pages, in opposition to a page being a particular
              set of components working together to provide the user with valuable information.
            </Item>
            <Item color='blue'>
              Since I'm not applying any particular Visual Design, I'm just styling components using a variable (
              <Text code>const</Text> actually) named <Text code>$&#123;component&#125;Style</Text> but probably
              following a VD I will create a custom theme for the component library of choice and then use a library
              like <Text code>emotion</Text> or similar to style components in particular cases.
            </Item>
            <Item color='blue'>
              The Backend For Frontend required for a successful Heroku deploy was implemented in the{' '}
              <Text code>server.js</Text> file in the root folder, keeping all client/UI code in the{' '}
              <Text code>src</Text> folder.
            </Item>
            <Item color='blue'>
              For fetching services data, I choose React-Query, since this library provide an indicator for
              loading/error state among other features (refetch, caching, etc).
            </Item>
            <Item color='blue'>
              For testing purposes, MSW is being used, since it provides a consistent and easy way to mock data (even
              when running the app locally). This can be seen in the <Text code>index.js</Text> file, where the service
              worker is initialized, consuming all mock data for the browser from the handlers in the{' '}
              <Text code>mocks</Text> folder.
            </Item>
            <Item color='blue'></Item>
            <Item color='blue'></Item>
            <Item color='blue'></Item>
            <Item color='blue'></Item>
            <Item color='blue'></Item>
            <Item color='blue'></Item>
            <Item color='blue'></Item>
            <Item color='blue'></Item>
          </Timeline>
        </Card>
        <Title level={2} style={h2Style}>
          2. testing
        </Title>
        <Card {...cardStyle}>
          <Timeline>
            <Item color='blue'>
              In order to properly run tests if you are using an Apple M1 processor, you need to run:
              <br />
              <Text code>arch -arm64 brew install pkg-config cairo pango libpng jpeg giflib librsvg</Text>
              <br />
              before running
              <br />
              <Text code>yarn</Text>
              <br />
              so you can install all dependencies and run tests.
            </Item>
            <Item color='blue'>
              Using a folder for pages (sections of the application) separated of the components (in their own folder)
              considering the components could be reused in multiples pages, in opposition to a page being a particular
              set of components working together to provide the user with valuable information.
            </Item>
            <Item color='blue'>
              Since I'm not applying any particular Visual Design, I'm just styling components using a variable (
              <Text code>const</Text> actually) named <Text code>$&#123;component&#125;Style</Text> but probably
              following a VD I will create a custom theme for the component library of choice and then use a library
              like <Text code>emotion</Text> or similar to style components in particular cases.
            </Item>
            <Item color='blue'>
              The Backend For Frontend required for a successful Heroku deploy was implemented in the{' '}
              <Text code>server.js</Text> file in the root folder, keeping all client/UI code in the{' '}
              <Text code>src</Text> folder.
            </Item>
            <Item color='blue'>
              For fetching services data, I choose React-Query, since this library provide an indicator for
              loading/error state among other features (refetch, caching, etc).
            </Item>
            <Item color='blue'>
              For testing purposes, MSW is being used, since it provides a consistent and easy way to mock data (even
              when running the app locally). This can be seen in the <Text code>index.js</Text> file, where the service
              worker is initialized, consuming all mock data for the browser from the handlers in the{' '}
              <Text code>mocks</Text> folder.
            </Item>
            <Item color='blue'></Item>
            <Item color='blue'></Item>
            <Item color='blue'></Item>
            <Item color='blue'></Item>
            <Item color='blue'></Item>
            <Item color='blue'></Item>
            <Item color='blue'></Item>
            <Item color='blue'></Item>
          </Timeline>
        </Card>
      </Col>
      <Col span={5}>
        <Indicator label='Minute Consumption' value={+(usage.current_minute.requests_made / plan.rate_limit_minute)} />
        <Indicator
          label='Daily Consumption'
          value={usage.current_day.credits_used ? +(usage.current_day.credits_used / plan.credit_limit_daily) : 0}
        />
        <Indicator
          label='Monthly Consumption'
          value={usage.current_month.credits_used ? +(usage.current_month.credits_used / plan.credit_limit_monthly) : 0}
        />
      </Col>
    </Row>
  );
};

export default Optional;
