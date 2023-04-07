import React, { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { IProduct } from '../interfaces/products'
import { Space, Table, Button, Input , Image} from 'antd';
import type { ColumnsType } from 'antd/es/table';
const {Search} = Input
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

    const [searchedText, setSearchedText] = useState("")

    const columns: ColumnsType<DataType> = [
        {
          title: 'ProductName',
          dataIndex: 'name',
          key: 'name',
          filteredValue: [searchedText],
          onFilter(value, record){
            return String(record.name).toLowerCase().includes(String(value).toLowerCase())
          },
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
          render: (text) =><Image src={text} width={80}/>
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
              <Button style={{ backgroundColor: 'blue' }} type="primary" onClick={() => updateProduct(record.key)}>Update</Button>
            </Space>
          ),
        },
      ];
    return (
        <div>
          <Search className='bg-blue-500' placeholder="input search text" enterButton="Search" size="large" style={{margin:'0 0 10px 0'}} onSearch={(value)=>{setSearchedText(value)}}/>
            <Button className='bg-blue-500' type="primary"><Link to={'/admin/products/add'}>Add Products</Link></Button>
            <Table columns={columns} dataSource={data} pagination={{ pageSize: 5, showQuickJumper: true }} />
        </div>
    )
}