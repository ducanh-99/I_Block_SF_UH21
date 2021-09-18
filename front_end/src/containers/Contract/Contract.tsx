import React from 'react';
import { Button, Table, Tag } from 'antd';
import AppContainer from 'containers/AppLayout/AppContainer';
// import { brandHooks } from 'hooks';

// const { useBrandData } = brandHooks;

const data = [
  {
    key: '1',
    name: 'Full-time employment contract - Adam Whitemans',
    position: 'Accouting',
    status: ['Editing'],
  },
  {
    key: '1',
    name: 'Intern employment contract - Nell McCoy',
    position: 'Software engineer',
    status: ['Completed'],
  },
  {
    key: '1',
    name: 'Full-time employment contract - Adam Whitemans',
    position: 'Security',
    status: ['Sent to sign'],
  },
  {
    key: '1',
    name: 'Independent contractor - Ann Huff',
    position: 'Accouting',
    status: ['Editing'],
  },
  {
    key: '1',
    name: 'Full-time employment contract - Adam Whitemans',
    position: 'Accouting',
    status: ['Editing'],
  },
  {
    key: '1',
    name: 'Intern employment contract - Nell McCoy',
    position: 'Software engineer',
    status: ['Completed'],
  },
  {
    key: '1',
    name: 'Full-time employment contract - Adam Whitemans',
    position: 'Security',
    status: ['Sent to sign'],
  },
  {
    key: '1',
    name: 'Independent contractor - Ann Huff',
    position: 'Accouting',
    status: ['Editing'],
  },
  {
    key: '1',
    name: 'Intern employment contract - Nell McCoy',
    position: 'Software engineer',
    status: ['Completed'],
  },
  {
    key: '1',
    name: 'Full-time employment contract - Adam Whitemans',
    position: 'Security',
    status: ['Sent to sign'],
  },
  {
    key: '1',
    name: 'Independent contractor - Ann Huff',
    position: 'Accouting',
    status: ['Editing'],
  },
];

const columns = [
  {
    title: 'Contract',
    dataIndex: 'name',
  },
  {
    title: 'Position',
    dataIndex: 'position',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    render: (_: string[]) =>
      _.map(tag => {
        let color = tag.length > 8 ? 'geekblue' : 'volcano';
        if (tag === 'Completed') {
          color = 'green';
        }
        return (
          <Tag color={color} key={tag}>
            {tag.toUpperCase()}
          </Tag>
        );
      }),
  },
];

const Contract = () => {
  return (
    <AppContainer title="List of Contract">
      <Button
        type="primary"
        style={{ float: 'right' }}
        href="https://powerforms-d.docusign.net/e3558b87-5195-4d4e-be19-4bae4e0d5836?env=demo&acct=7bfe8da9-2a9b-4f67-a5dd-216568082a84&accountId=7bfe8da9-2a9b-4f67-a5dd-216568082a84"
      >
        Create Contract
      </Button>
      <br />
      <br />
      <Table dataSource={data} columns={columns} />
    </AppContainer>
  );
};

export default Contract;
