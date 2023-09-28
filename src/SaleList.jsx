import { useState } from 'react';
import {Button, Table} from 'antd';
import {EyeOutlined, PlusOutlined} from "@ant-design/icons";
import {SalesDrawer} from "./SalesDrawer.jsx";
const originData = [];

for (let i = 0; i < 56; i++) {
    originData.push({
        key: i.toString(),
        invoice_No: i,
        date: "25 sep",
        customer_name: `Edward ${i}`,
        total_amount: 132,
        discount: Math.floor(Math.random() * 10),
        due_amount: Math.floor(Math.random() * 40),
        paid_amount: 20,
        profit: 10,
        sales_person: "staff",
        action: "save"
    });
}

const SalesList = () => {
    const [data, setData] = useState(originData);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    const columns = [
        {
            title: 'Invoice No',
            dataIndex: 'invoice_No',
            width: '4%',
        },
        {
            title: 'date',
            dataIndex: 'date',
            width: '7%',
            editable: true,
        },
        {
            title: 'Customer Name',
            dataIndex: 'customer_name',
            width: '10%',
            editable: true,
        },
        {
            title: 'Total Amount',
            dataIndex: 'total_amount',
            width: '7%',
            editable: true,
        },
        {
            title: 'Discount',
            dataIndex: 'discount',
            width: '7%',
            editable: true,
        },
        {
            title: 'Due Amount',
            dataIndex: 'due_amount',
            width: '7%',
            editable: true,
        },
        {
            title: 'Paid Amount',
            dataIndex: 'paid_amount',
            width: '7%',
            editable: true,
        },
        {
            title: 'Profit',
            dataIndex: 'profit',
            width: '7%',
            editable: true,
        },
        {
            title: 'Sales Person',
            dataIndex: 'sales_person',
            width: '10%',
            editable: true,
        },
        {
            title: 'Action',
            dataIndex: 'action',
            width: '7%',
            editable: true,
            render: (_,record) => {
                return <Button type="primary" icon={<EyeOutlined />}></Button>
            }
        },
    ];
    const mergedColumns = columns.map((col) => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: (record) => ({
                record,
                inputType: col.dataIndex === 'age' ? 'number' : 'text',
                dataIndex: col.dataIndex,
                title: col.title,
            }),
        };
    });

    function handleDrawerClose(){
        setIsDrawerOpen(false)
    }

    return (
        <>
            <div className="flex justify-between">
                <h1 className="text-2xl font-bold mb-4">
                    Sales
                </h1>
                <Button type="primary" className="flex items-center" icon={<PlusOutlined />} onClick={()=> setIsDrawerOpen(true)}>
                    Add Sale
                </Button>
            </div>

            {isDrawerOpen && <SalesDrawer isDrawerOpen={isDrawerOpen} onClose={handleDrawerClose}/>}

                <Table
                    bordered
                    dataSource={data}
                    columns={mergedColumns}
                    rowClassName="editable-row"
                    pagination={{
                        total:data.length,
                        showTotal:(total, range) => `${range[0]}-${range[1]} of ${total} items`,
                        defaultPageSize:10,
                        defaultCurrent:1,
                        position:["bottomRight"]
                    }}
                />

        </>
    );
};
export default SalesList;