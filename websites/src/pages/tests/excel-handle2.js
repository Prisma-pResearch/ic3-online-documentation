import React from 'react';
import { Space, Table, Tag } from 'antd';
import data_main from './menu-json.json'
const columns = [
  {
    title: 'Name',
    // dataindex bind with the data keys
    dataIndex: 'Table_name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },

  {
    title: 'Discription',
    dataIndex: 'discription',
    key: 'address',
    
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.Table_name}</a>
        <a>Edit Discription</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    Table_name: 'John Brown',

    discription: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    Table_name: 'Jim Green',

    discription: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    Table_name: 'Joe Black',
    age: 32,
    discription: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const ExcelHandle2 = () => {
  return (
    <div>
      <Table columns={columns} dataSource={data} />;

    </div>
  )
}


export default ExcelHandle2






