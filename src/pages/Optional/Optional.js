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
          1. Preferences
        </Title>
        <Card {...cardStyle}>
          <Timeline>
            <Item color='blue'>
              Using linter/prettier integrated in the IDE (VSCode) with extensions to ensure all code follows a uniform
              styling (specially useful for a team).
            </Item>
            <Item color='blue'>
              <Text code>Ant Design</Text> and <Text code>Ant Design Charts</Text> are the design system / component
              library of choice given it's ease of use and great documentation.
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
          </Timeline>
        </Card>
        <Title level={2} style={h2Style}>
          2. Architecture/Folder Structure
        </Title>
        <Card {...cardStyle}>
          <Timeline>
            <Item color='red'>
              <Text code>assets</Text> folder contains images and can contain som other static assets in the future.
            </Item>
            <Item color='red'>
              <Text code>components</Text> folder contains all components that can be reused in multiple places (mostly
              components that will receive props to render the UI). There are exception's (like the{' '}
              <Text code>User</Text>) but this will be addressed later on.
            </Item>
            <Item color='red'>
              <Text code>hooks</Text> folder contains only a single, generic hook for data fetching. As complement, a
              <Text code>useMutation</Text> hook will be eventually created and as an extension, they will be moved into
              their own folders to contain many queries/mutations hooks for the multiple areas/sections of the
              application.
              <br />
              Also, all other hooks will be stored in this folder to allow reusability.
            </Item>
            <Item color='red'>
              <Text code>mocks</Text> folder contains all mocked data for testing and development phase, so the
              application doesn't depends on a backend (either locally or deployed in a dev environment).
              <br />
              This folder is created following the installation guide of MSW (which will be addressed later on too) but
              instead of a handler file, it contains a folder with multiple files matching the areas/sections (or APIs
              consumed) in the application (matching the hooks proposed expansion).
            </Item>
            <Item color='red'>
              <Text code>pages</Text> folder contains all sections of the application, each one on it's own folder so
              they can be extended and complemented (adding styles, wrappers or just to extract constants like the
              column definition for tables).
            </Item>
          </Timeline>
        </Card>
        <Title level={2} style={h2Style}>
          3. Context/State Management
        </Title>
        <Card {...cardStyle}>
          <Timeline>
            <Item color='blue'>
              This application does NOT make use of any <Text code>context</Text> or state management library given the
              simplicity of it.
              <br />
              In a bigger application, one (or multiple) contexts are recommended to share information, being the{' '}
              <Text code>User</Text> component a clear example of it. Theming and other pieces of information that wont
              change frequently are good candidates for a context.
            </Item>
            <Item color='blue'>
              This application does NOT make use of any <Text code>state management</Text> library for the nature of the
              application/challenge itself, but also for the lack of need for a tool like <Text code>Redux</Text>.<br />
              The conscious choice of <Text code>React-Query</Text> and all the features surrounding the library,
              removes the need of a tool like that.
            </Item>
          </Timeline>
        </Card>
        <Title level={2} style={h2Style}>
          4. Testing
        </Title>
        <Card {...cardStyle}>
          <Timeline>
            <Item color='red'>
              In order to properly run tests if you are using an Apple M1 processor, you need to run:
              <br />
              <br />
              <Text code>arch -arm64 brew install pkg-config cairo pango libpng jpeg giflib librsvg</Text>
              <br />
              <br />
              before running
              <br />
              <br />
              <Text code>yarn</Text>
              <br />
              <br />
              so you can install all dependencies and run tests.
            </Item>
            <Item color='red'>
              With the exception of the components tests, all test were made simulating the steps a regular user will do
              in the application. There are a few exceptions with filter/sorting since the API used dont fully support
              this and I choose not to implement this on the UI to prevent consuming all CMC credits with just a few
              page loads fetching all information (or most of it)
            </Item>
            <Item color='red'>
              At the moment of writing this documentation (and with some pieces of code not fully implemented/tested),
              the code coverage is:
              <br />
              <Paragraph>
                <pre>{`--------------------------|---------|----------|---------|---------|-------------------
File                      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
--------------------------|---------|----------|---------|---------|-------------------
All files                 |   92.09 |    77.61 |   93.48 |    92.4 |                   
 src                      |     100 |      100 |     100 |     100 |                   
  App.js                  |     100 |      100 |     100 |     100 |                   
 src/components/Error     |     100 |      100 |     100 |     100 |                   
  Error.js                |     100 |      100 |     100 |     100 |                   
 src/components/Spinner   |     100 |      100 |     100 |     100 |                   
  Spinner.js              |     100 |      100 |     100 |     100 |                   
 src/components/User      |     100 |      100 |     100 |     100 |                   
  User.js                 |     100 |      100 |     100 |     100 |                   
 src/hooks                |   92.68 |    78.57 |     100 |   92.68 |                   
  useData.js              |   92.68 |    78.57 |     100 |   92.68 | 25,28,61          
 src/pages/Chart          |     100 |      100 |     100 |     100 |                   
  Chart.js                |     100 |      100 |     100 |     100 |                   
 src/pages/Converter      |     100 |      100 |     100 |     100 |                   
  Converter.js            |     100 |      100 |     100 |     100 |                   
 src/pages/Cryptocurrency |   71.05 |       50 |   76.92 |   72.97 |                   
  Cryptocurrency.js       |   71.05 |       50 |   76.92 |   72.97 | 22-29,43,48,74    
 src/pages/Optional       |     100 |       75 |     100 |     100 |                   
  Optional.js             |     100 |       75 |     100 |     100 | 181-185           
--------------------------|---------|----------|---------|---------|-------------------
Jest: "global" coverage threshold for branches (80%) not met: 77.61%

Test Suites: 8 passed, 8 total
Tests:       13 passed, 13 total
Snapshots:   0 total
Time:        7.726 s`}</pre>
              </Paragraph>
            </Item>
            <Item color='red'></Item>
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
