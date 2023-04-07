import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Space, Table, Button, Input } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { ICategory } from '../../interfaces/category'
const {Search} = Input
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
            key: item._id,
            name: item.name,
        }
    })
    const removeCategory = (id: number | string) => {
        props.onRemove(id)
    }
    const updateCategory = (id: number | string) => {
        navigate('/admin/categories/update/' + id)
    }

    const [searchedText, setSearchedText] = useState("")
    const columns: ColumnsType<DataType> = [

        {
          title: 'CategoryName',
          dataIndex: 'name',
          key: 'name',
          filteredValue: [searchedText],
          onFilter(value, record){
            return String(record.name).toLowerCase().includes(String(value).toLowerCase())
          },
          render: (text) => <a>{text}</a>,
        },

        {
          title: 'Action',
          key: 'action',
          render: (record) => (
            <Space size="middle">
              <Button type="primary" style={{ backgroundColor: 'red' }} onClick={() => removeCategory(record.key)}>Remove</Button>
              <Button style={{ backgroundColor: 'blue' }}  type="primary" onClick={() => updateCategory(record.key)}>Update</Button>
            </Space>
          ),
        },
      ];
    return (
        <div>
           <Search className='bg-blue-500' placeholder="input search text" enterButton="Search" size="large" style={{margin:'0 0 10px 0'}} onSearch={(value)=>{setSearchedText(value)}}/>
            <Button style={{ backgroundColor: 'blue' }} type="primary"><Link to={'/admin/categories/add'}>Add Products</Link></Button>
            <Table columns={columns} dataSource={data} pagination={{ pageSize: 4, showQuickJumper: true }} />
        </div>
    )
}
