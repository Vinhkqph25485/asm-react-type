import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Button, Checkbox, Form, Input } from 'antd';
import { ICategory } from '../../interfaces/category';
// interface IFormInput {
//     id: number | string,
//     name: string
// }
interface IProps {
    onAdd: (categories: ICategory) => void
}
const AddCategoryPage = (props: IProps) => {
    const navigate = useNavigate()
    // const { register, handleSubmit } = useForm<IFormInput>()
    // const onHandleSubmit: SubmitHandler<IFormInput> = (data) => {
    //     props.onAdd(data);
    //     navigate('/admin/products')
    // }

    const onFinish = (values: any) => {
        props.onAdd(values)
        navigate('/admin/categories')
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
                    label="Category"
                    name="name"
                    rules={[{ required: true, message: 'Please input your Category!' }]}
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

export default AddCategoryPage