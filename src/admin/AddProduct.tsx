import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { IProduct } from '../interfaces/products'
import { useNavigate } from 'react-router-dom'
import { Button, Checkbox, Form, Input } from 'antd';
interface IFormInput {
    id: number,
    name: string,
    price: number
}
interface IProps {
    onAdd: (product: IProduct) => void
}
const AddProductPage = (props: IProps) => {
    const navigate = useNavigate()
    // const { register, handleSubmit } = useForm<IFormInput>()
    // const onHandleSubmit: SubmitHandler<IFormInput> = (data) => {
    //     props.onAdd(data);
    //     navigate('/admin/products')
    // }

    const onFinish = (values: any) => {
        props.onAdd(values)
        navigate('/admin/products')
      };
      
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };
    return (
        <div>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="ProductName"
                    name="name"
                    rules={[{ required: true, message: 'Please input your Product!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Price"
                    name="price"
                    rules={[{ required: true, message: 'Please input your price!' }]}
                >
                    <Input />
                </Form.Item>


                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default AddProductPage