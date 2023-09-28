    import {DeleteOutlined, MinusCircleOutlined, PlusOutlined} from '@ant-design/icons';
import {Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space, Table, Tag} from 'antd';
    import {useState} from "react";
const { Option } = Select;
export function SalesDrawer({isDrawerOpen,onClose}) {
    const [values, setValues] = useState(null)

    const onChange = (value) => {
        console.log(`selected ${value}`);
        setValues(values)
    };
    const onSearch = (value) => {
        console.log('search:', value);
        setValues(value)
    };

// Filter `option.label` match the user type `input`
    const filterOption = (input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
    const onFinish = (values) => {console.log('Received values of form:', values)};

    const products = [
        {
            value: 'pant',
            label: 'Pant',
            quantity:1,
            price: 30,
            vat:1.9,
        },
        {
            value: 'shirt',
            label: 'Shirt',
            quantity:1,
            price: 14,
            vat:2
        },
        {
            value: 'shoe',
            label: 'Shoe',
            quantity:1,
            price: 59,
            vat:10
        },
    ]

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
                <Row className="mb-2" gutter={16}>
                    <Col span={1}>SL</Col>
                    <Col span={4}>Product</Col>
                    <Col span={1}>U.M.</Col>
                    <Col span={4}>Quantity</Col>
                    <Col span={4}>Sales Price</Col>
                    <Col span={2}>Vat</Col>
                    <Col span={4}>Total</Col>
                    <Col span={4}>Delete</Col>
                </Row>
                <hr/>
                <Form className="mt-2" name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
                        <Form.List name="products">
                                {(fields, { add, remove }) => (
                                    <>
                                        {fields.map(({ key, name, ...restField }) => (
                                                <Row key={key} gutter={16}>
                                                    <Col span={1}>
                                                        <span>{key+1}</span>
                                                    </Col>

                                                    <Col span={4}>
                                                    <Form.Item
                                                        {...restField}
                                                        name={[name, 'product']}
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: 'Missing product',
                                                            },
                                                        ]}
                                                    >
                                                        <Select
                                                            showSearch
                                                            placeholder="Select product"
                                                            optionFilterProp="children"
                                                            onChange={onChange}
                                                            onSearch={onSearch}
                                                            filterOption={filterOption}
                                                            options={products}
                                                        />
                                                    </Form.Item>
                                                    </Col>

                                                    <Col span={1}>
                                                        <Form.Item
                                                            {...restField}
                                                            name={[name, 'um']}
                                                        >
                                                            <Input placeholder="U.." />
                                                        </Form.Item>
                                                    </Col>

                                                    <Col span={4}>
                                                        <Form.Item
                                                            {...restField}
                                                            name={[name, 'quantity']}
                                                        >
                                                            <Input placeholder="Quantity" />
                                                        </Form.Item>
                                                    </Col>

                                                    <Col span={4}>
                                                        <Form.Item
                                                            {...restField}
                                                            name={[name, 'price']}
                                                        >
                                                            <Input placeholder="50000" />
                                                        </Form.Item>
                                                    </Col>

                                                    <Col span={2}>
                                                         <span>0%</span>
                                                     </Col>

                                                    <Col span={4}>
                                                        <span>0</span>
                                                    </Col>

                                                    <Col span={4}>
                                                            <DeleteOutlined onClick={() => remove(name)} className="bg-red-500 text-white p-2 rounded"/>
                                                        </Col>
                                                </Row>
                                        ))}
                                        <Form.Item>
                                            <Button className="flex items-center justify-center" type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                                Add Product
                                            </Button>
                                        </Form.Item>
                                    </>
                                )}
                        </Form.List>
                </Form>
            </Drawer>
        </>
    );
}