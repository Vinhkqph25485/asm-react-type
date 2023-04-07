import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Form, Input } from 'antd';
import { ICategory } from '../../interfaces/category';
interface IProps {
    categories: ICategory[],
    onUpdate: (categoryes: ICategory) => void
}
const UpdateCategoryPage = (props: IProps) => {
    const { id } = useParams()
    
    const navigate = useNavigate()

    const [categories, setCategories] = useState<ICategory>() 
    useEffect(() => { 
        const currentProduct = props.categories.find((categories: ICategory) => categories._id == id)
        
        setCategories(currentProduct) 
    }, [props])
    useEffect(() => {
        setFields() 
    }, [categories])
    const [form] = Form.useForm();
   

    const setFields = () => {
        form.setFieldsValue({ 
            _id: categories?._id,
            name: categories?.name,
        })
    }

    const onFinish = (values: any) => {
        props.onUpdate(values);
        navigate('/admin/categories')
    };

    return (
        <div>
            <Form
                form={form}
                style={{ maxWidth: 600 }}
                onFinish={onFinish}
            >
                {/* đoạn này cần truyền cả id vào form khi submit để lấy được giá trị id truyền lên component App */}
                <Form.Item
                    label=""
                    name="_id"
                    style={{ display: 'none' }} // ẩn input này đi
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>


                <Form.Item
                    label="Product Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button className='bg-blue-500' type="primary" htmlType="submit">
                        Update Product
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default UpdateCategoryPage