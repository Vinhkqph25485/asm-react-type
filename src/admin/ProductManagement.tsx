import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IProduct } from '../interfaces/products'
import { Space, Table, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
interface IPorps {
    products: IProduct[],
    onRemove: (id:number | string) => void
}
interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
  }
export const ProductManagement = (props:IPorps) => {
    // const [data, setData] = useState<IProduct[]>([])
    const navigate = useNavigate()

    const data = props.products.map(item => {
        return {
            key: item._id,
            name: item.name,
            price: item.price,
            image: item.image,
            description: item.description

        }
    })
    const removeProducts = (id: number | string) => {
        props.onRemove(id)
    }
    const updateProduct = (id: number | string) => {
        navigate('/admin/products/update/' + id)
    }

    const columns: ColumnsType<DataType> = [
        {
          title: 'ProductName',
          dataIndex: 'name',
          key: 'name',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Price',
          dataIndex: 'price',
          key: 'price',
        },
        {
          title: 'Image',
          dataIndex: 'image',
          key: 'image',
          render: (text) => <img src={text} width={80}/>
        },
        {
          title: 'Description',
          dataIndex: 'description',
          key: 'description',
        },
        {
          title: 'Action',
          key: 'action',
          render: (record) => (
            <Space size="middle">
              <Button type="primary" style={{ backgroundColor: 'red' }} onClick={() => removeProducts(record.key)}>Remove</Button>
              <Button type="primary" onClick={() => updateProduct(record.key)}>Update</Button>
            </Space>
          ),
        },
      ];
    return (
        <div>
            <Button type="primary"><Link to={'/admin/products/add'}>Add Products</Link></Button>
            <Table columns={columns} dataSource={data} pagination={{ pageSize: 4, showQuickJumper: true }} />
        </div>
    )
}
