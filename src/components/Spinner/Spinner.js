import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const loadingIconStyle = { margin: 'auto' };
const spinStyle = { display: 'flex', alignItems: 'center' };

const Spinner = ({ size = 128, height = 'calc(100vh - 112px)' }) => {
  const indicator = <LoadingOutlined style={{ ...loadingIconStyle, fontSize: size }} spin />;
  return <Spin style={{ ...spinStyle, height }} indicator={indicator} data-testid='spinner' />;
};

export default Spinner;
