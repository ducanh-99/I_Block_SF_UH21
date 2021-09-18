import React from 'react';
import { Button, Space, Table, Tag } from 'antd';
import AppContainer from 'containers/AppLayout/AppContainer';
// import { brandHooks } from 'hooks';

// const { useBrandData } = brandHooks;

const data = [
  {
    key: '1',
    name: 'Director Human Resource Contract',
    position: 'Accouting',
    status: ['official'],
  },
  {
    key: '1',
    name: 'Full-time Contract',
    position: 'Accouting',
    status: ['official'],
  },
  {
    key: '1',
    name: 'Part-time Contract',
    position: 'Accouting',
    status: ['draft'],
  },
  {
    key: '1',
    name: 'Software Engineering L1 Contract',
    position: 'Accouting',
    status: ['official'],
  },
  {
    key: '1',
    name: 'Software Engineering L2 Contract',
    position: 'Accouting',
    status: ['official'],
  },
  {
    key: '1',
    name: 'Software Engineering L3 Contract',
    position: 'Accouting',
    status: ['draft'],
  },
  {
    key: '1',
    name: 'Software Engineering L4 Contract',
    position: 'Accouting',
    status: ['official'],
  },
  {
    key: '1',
    name: 'Software Engineering L5 Contract',
    position: 'Accouting',
    status: ['official'],
  },
  {
    key: '1',
    name: 'Product Owner Contract',
    position: 'Accouting',
    status: ['official'],
  },
  {
    key: '1',
    name: 'Director Contract',
    position: 'Accouting',
    status: ['official'],
  },
  {
    key: '1',
    name: 'Intern Contract',
    position: 'Accouting',
    status: ['official'],
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    render: (_: string[]) =>
      _.map(tag => {
        let color = tag.length > 8 ? 'geekblue' : 'green';
        if (tag === 'draft') {
          color = 'volcano';
        }
        return (
          <Tag color={color} key={tag}>
            {tag.toUpperCase()}
          </Tag>
        );
      }),
  },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: () => (
      <Space>
        <Button type="primary">Edit</Button>
        <Button danger>Delete</Button>
      </Space>
    ),
  },
];

const TypeContract = () => {
  return (
    <AppContainer title="Type of Contract">
      <Button type="primary" style={{ float: 'right' }}>
        Create Type Contract
      </Button>
      <br />
      <br />
      <Table dataSource={data} columns={columns} />
    </AppContainer>
  );
};

export default TypeContract;
