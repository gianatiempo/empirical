import { Table, Pagination } from 'antd';
import { useState } from 'react';
import { useCryptocurrency } from '../../hooks/useData';
import { Spinner, Error } from '../../components';

const paginationStyle = { padding: '10px 0', float: 'right' };
const increaseValueColor = { color: '#3f8600' };
const decreaseValueColor = { color: '#cf1322' };

const Cryptocurrency = () => {
  const [pagination, setPagination] = useState({ current: 1, pageSize: 10, sort: null, order: null });
  const { isLoading, isError, data, error } = useCryptocurrency(pagination);

  const onChange = (paginationData, filtersData, sorter, extra) => {
    if (extra.action === 'sort') {
      setPagination({ ...pagination, sort: sorter.columnKey, order: sorter.order });
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <Error message={error.message} />;
  }

  return (
    <>
      <Table columns={columns} dataSource={data.data} rowKey='id' pagination={false} onChange={onChange} />
      <Pagination
        style={paginationStyle}
        size='small'
        total={5000}
        showTotal={(total, range) => `${range[0]}-${range[1]} of ${total}`}
        showSizeChanger
        current={pagination.current}
        pageSize={pagination.pageSize}
        onChange={(current, pageSize) => setPagination({ current, pageSize })}
      />
    </>
  );
};

const columns = [
  { title: '#', dataIndex: 'cmc_rank', key: 'cmc_rank' },
  { title: 'Name', dataIndex: 'name', key: 'name', sorter: (a, b) => a - b, sortDirections: ['ascend', 'descend'] },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    render: (_, row) => `${row.quote.USD.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`
  },
  {
    title: '24h %',
    dataIndex: 'percent_change_24h',
    key: 'percent_change_24h',
    render: (_, row) => (
      <span style={row.quote.USD.percent_change_24h > 0 ? increaseValueColor : decreaseValueColor}>
        {`${row.quote.USD.percent_change_24h.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`}
      </span>
    )
  },
  {
    title: '7d %',
    dataIndex: 'percent_change_7d',
    key: 'percent_change_7d',
    render: (_, row) => (
      <span style={row.quote.USD.percent_change_7d > 0 ? increaseValueColor : decreaseValueColor}>
        {`${row.quote.USD.percent_change_7d.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`}%
      </span>
    )
  },
  {
    title: 'Market Cap',
    dataIndex: 'market_cap',
    key: 'market_cap',
    render: (_, row) => `${row.quote.USD.market_cap.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`
  },
  {
    title: 'Volume (24h)',
    dataIndex: 'volume_24h',
    key: 'volume_24h',
    render: (_, row) => `${row.quote.USD.volume_24h.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`
  },
  {
    title: 'Circulating Supply',
    dataIndex: 'circulating_supply',
    key: 'circulating_supply',
    render: (_, row) => `${row.circulating_supply.toLocaleString('en-US')} ${row.symbol}`
  }
];

export default Cryptocurrency;
