import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const loadingIconStyle = { margin: 'auto' };
const spinStyle = { display: 'flex', alignItems: 'center' };

const Spinner = ({ size = 128, height = '100vh' }) => {
  const indicator = <LoadingOutlined style={{ ...loadingIconStyle, fontSize: size }} spin />;
  return <Spin style={{ ...spinStyle, height }} indicator={indicator} />;
};

export default Spinner;
