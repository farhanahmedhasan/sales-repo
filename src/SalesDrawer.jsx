    import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
const { Option } = Select;
export function SalesDrawer({isDrawerOpen,onClose}) {
    const onFinish = (values) => {
        console.log('Received values of form:', values);
    };

    return (
        <>
            <Drawer
                title="Add Sale"
                width={1080}
                onClose={onClose}
                open={isDrawerOpen}
                bodyStyle={{
                    paddingBottom: 80,
                }}
            >
                <Form name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
                    <Form.List name="users">
                        {(fields, { add, remove }) => (
                            <>
                                {fields.map(({ key, name, ...restField }) => (
                                    <Space
                                        key={key}
                                        style={{
                                            display: 'flex',
                                            marginBottom: 8,
                                        }}
                                        align="baseline"
                                    >
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'first']}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Missing first name',
                                                },
                                            ]}
                                        >
                                            <Input placeholder="First Name" />
                                        </Form.Item>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'last']}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Missing last name',
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Last Name" />
                                        </Form.Item>
                                        <MinusCircleOutlined onClick={() => remove(name)} />
                                    </Space>
                                ))}
                                <Form.Item>
                                    <Button className="flex items-center justify-center" type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                        Add Product
                                    </Button>
                                </Form.Item>
                            </>
                        )}
                    </Form.List>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Drawer>
        </>
    );
}