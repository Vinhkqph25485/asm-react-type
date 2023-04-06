import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Space, Table, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { ICategory } from '../../interfaces/category'
interface IPorps {
    categories: ICategory[],
    onRemove: (id:number | string) => void
}
interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
  }
export const CategoryManagement = (props:IPorps) => {
  
    // const [data, setData] = useState<IProduct[]>([])
    const navigate = useNavigate()

    const data = props.categories.map(item => {
        return {
            key: item.id,
            name: item.name,
        }
    })
    const removeCategory = (id: number | string) => {
        props.onRemove(id)
    }
    const updateCategory = (id: number | string) => {
        navigate('/admin/categories/update/' + id)
    }

    const columns: ColumnsType<DataType> = [
        {
          title: 'CategoryName',
          dataIndex: 'name',
          key: 'name',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Action',
          key: 'action',
          render: (record) => (
            <Space size="middle">
              <Button type="primary" style={{ backgroundColor: 'red' }} onClick={() => removeCategory(record.key)}>Remove</Button>
              <Button type="primary" onClick={() => updateCategory(record.key)}>Update</Button>
            </Space>
          ),
        },
      ];
    return (
        <div>
            <Button type="primary"><Link to={'/admin/categories/add'}>Add Products</Link></Button>
            <Table columns={columns} dataSource={data} pagination={{ pageSize: 4, showQuickJumper: true }} />
        </div>
    )
}
