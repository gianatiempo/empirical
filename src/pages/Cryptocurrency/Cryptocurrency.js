import { Table, Pagination } from 'antd';
import { useState } from 'react';
import { useCryptocurrency } from '../../hooks/useData';
import Error from '../../components/Error/Error';

const paginationStyle = { padding: '10px 0', float: 'right' };

const Cryptocurrency = () => {
  const [pagination, setPagination] = useState({ current: 1, pageSize: 10 });
  const { isLoading, isError, data, error } = useCryptocurrency(pagination);

  const onChange = (paginationData, filtersData, sorter, extra) => {
    console.log(extra.action);
    if (extra.action === 'sort') {
      console.log(extra.action, sorter.field, sorter.order);
      // setPagination({ ...pagination, sort: sorter.columnKey, order: sorter.order });
    }
  };

  if (isError) {
    return <Error message={error.message} />;
  }

  return (
    <>
      <Table
        columns={columns}
        dataSource={data?.data ?? []}
        rowKey='id'
        size='middle'
        pagination={false}
        loading={isLoading}
        onChange={onChange}
      />
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
    sorter: (a, b) => a - b,
    render: (_, row) => `$ ${row.quote.USD.price.toFixed(2)}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  },
  {
    title: '24h %',
    dataIndex: 'percent_change_24h',
    key: 'percent_change_24h',
    sorter: (a, b) => a - b,
    render: (_, row) => (
      <span style={{ color: row.quote.USD.percent_change_24h > 0 ? '#3f8600' : '#cf1322' }}>
        {`${row.quote.USD.percent_change_24h.toFixed(2)}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}%
      </span>
    )
  },
  {
    title: '7d %',
    dataIndex: 'percent_change_7d',
    key: 'percent_change_7d',
    sorter: (a, b) => a - b,
    render: (_, row) => (
      <span style={{ color: row.quote.USD.percent_change_7d > 0 ? '#3f8600' : '#cf1322' }}>
        {`${row.quote.USD.percent_change_7d.toFixed(2)}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}%
      </span>
    )
  },
  {
    title: 'Market Cap',
    dataIndex: 'market_cap',
    key: 'market_cap',
    sorter: (a, b) => a - b,
    render: (_, row) => `$ ${row.quote.USD.market_cap.toFixed(0)}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  },
  {
    title: 'Volume (24h)',
    dataIndex: 'volume_24h',
    key: 'volume_24h',
    sorter: (a, b) => a - b,
    render: (_, row) => `$ ${row.quote.USD.volume_24h.toFixed(0)}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  },
  {
    title: 'Circulating Supply',
    dataIndex: 'circulating_supply',
    key: 'circulating_supply',
    sorter: (a, b) => a - b,
    render: (_, row) => `${row.circulating_supply.toFixed(0)} ${row.symbol}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
];

export default Cryptocurrency;
