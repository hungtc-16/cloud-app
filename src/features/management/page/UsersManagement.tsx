import { Button, Space, Table, Tag } from "antd";
import type { ColumnsType } from 'antd/es/table';
import { useDisclose } from "~/hooks";
import CreateOrEditUser from "../components/CreateOrEditUser";
import { ActionType } from "../configs/constants";
import '../styles/user.scss';

interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
}

const columns: ColumnsType<DataType> = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, { tags }) => (
            <>
                {tags.map((tag) => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: () => (
            <Space size="small">
                <a>Edit</a>
                <a>Delete</a>
            </Space>
        ),
    },
];

const data: DataType[] = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];
const UsersMana = () => {
    const { isOpen, onClose, onOpen } = useDisclose();
    return (
        <div className="user-container">
            <div className="header-table">
                <h3>User Management</h3>
                <Button type="primary" onClick={onOpen}>
                    Create new User
                </Button>
            </div>
            <Table size="small" columns={columns} dataSource={data} />
            {
                isOpen && <CreateOrEditUser onClose={onClose} isOpen={isOpen} actionType={ActionType.Create} />
            }
        </div>
    );
};

export default UsersMana;