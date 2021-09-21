import { Table, Pagination } from 'antd';
import { useState } from 'react';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { useCryptocurrency } from '../../hooks/useData';
import { Spinner, Error } from '../../components';

const paginationStyle = { padding: '10px 0', float: 'right' };
const increaseValueColor = { color: '#3f8600' };
const decreaseValueColor = { color: '#cf1322' };

const Cryptocurrency = () => {
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    sort: null,
    order: null,
    filter: null,
    value: null
  });
  const { isLoading, isError, data, error } = useCryptocurrency(pagination);

  const onChange = (_, filtersData, sorter, extra) => {
    if (extra.action === 'filter') {
      const filterKey = Object.keys(filtersData).filter(key => filtersData[key] !== null)[0] || null;
      const filterValue = filterKey ? filtersData[filterKey][0] : null;

      setPagination({ ...pagination, filter: filterKey, value: filterValue });
    } else if (extra.action === 'sort') {
      setPagination({ ...pagination, sort: sorter.columnKey, order: sorter.order });
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <Error message={error.message} />;
  }

  const extendedCol = columns.map(col => {
    // if (col.dataIndex === pagination.filter) {
    //   col['filteredValue'] = [pagination.value];
    // } else {
    //   col['filteredValue'] = null;
    // }
    if (col.dataIndex === pagination.sort) {
      col['sortOrder'] = pagination.order;
    } else {
      col['sortOrder'] = null;
    }
    return col;
  });

  return (
    <>
      <Table columns={extendedCol} dataSource={data.data} rowKey='id' pagination={false} onChange={onChange} />
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
  { title: 'Name', dataIndex: 'name', key: 'name', sorter: (a, b) => a - b, sortDirections: ['ascend'] },
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
    // filters: [
    //   { text: 'Positive values', value: 'pos' },
    //   { text: 'Negative values', value: 'neg' }
    // ],
    render: (_, row) => (
      <span style={row.quote.USD.percent_change_24h > 0 ? increaseValueColor : decreaseValueColor}>
        {row.quote.USD.percent_change_24h > 0 ? <ArrowUpOutlined /> : <ArrowDownOutlined />}&nbsp;
        {`${row.quote.USD.percent_change_24h.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`}
      </span>
    )
  },
  {
    title: '7d %',
    dataIndex: 'percent_change_7d',
    key: 'percent_change_7d',
    // filters: [
    //   { text: 'Positive values', value: 'pos' },
    //   { text: 'Negative values', value: 'neg' }
    // ],
    render: (_, row) => (
      <span style={row.quote.USD.percent_change_7d > 0 ? increaseValueColor : decreaseValueColor}>
        {row.quote.USD.percent_change_7d > 0 ? <ArrowUpOutlined /> : <ArrowDownOutlined />}&nbsp;
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
    render: (_, row) => (
      <span>
        <b>{`${row.circulating_supply.toLocaleString('en-US', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        })} ${row.symbol}`}</b>
      </span>
    )
  }
];

export default Cryptocurrency;
