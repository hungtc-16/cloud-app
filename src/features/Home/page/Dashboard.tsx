import { Avatar, Col, List, Row } from 'antd';
import { AiFillProject } from "react-icons/ai";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { MdNotifications } from "react-icons/md";

import '../styles/dashboard.scss';
const data = [
    {
        title: 'Ant Design Title 1',
    },
    {
        title: 'Ant Design Title 2',
    },
    {
        title: 'Ant Design Title 1',
    },
];
const Dashboard = () => {
    return (
        <Row gutter={16}>
            <Col span={17}>
                <div className='calendar card mb-18 dashboard-card'>
                    <div className='header-card mb-10 space-between'>
                        <div className='center-y'>
                            <BsFillCalendar2WeekFill />
                            <strong className='ms-10 mt-2'>Calendar</strong>
                        </div>
                        <div>
                            <a>View all events</a>
                        </div>
                    </div>
                    <Row gutter={16}>
                        <Col span={8}>
                            <div className='card-calendar first'>
                                <strong>
                                    Meeting with Ant Design
                                </strong>
                                <span className='time'>
                                    12:00 - 1:00 PM
                                </span>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At esse distinctio optio
                                </p>
                                <a className='document'>View Documents</a>
                                <div className='card-calendar-footer'>
                                    Zome - Link
                                </div>
                            </div>
                        </Col >
                        <Col span={8}>
                            <div className='card-calendar'>
                                <strong>
                                    Meeting with Ant Design
                                </strong>
                                <span className='time'>
                                    12:00 - 1:00 PM
                                </span>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At esse distinctio optio
                                </p>
                                <a className='document'>View Documents</a>
                                <div className='card-calendar-footer'>
                                    Zome - Link
                                </div>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div className='card-calendar'>
                                <strong>
                                    Meeting with Ant Design
                                </strong>
                                <span className='time'>
                                    12:00 - 1:00 PM
                                </span>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At esse distinctio optio
                                </p>
                                <a className='document'>View Documents</a>
                                <div className='card-calendar-footer'>
                                    Zome - Link
                                </div>
                            </div>
                        </Col>
                    </Row >
                </div >
                <div className='dashboard-card'>
                    <div className='header-card mb-10 space-between'>
                        <div className='center-y'>
                            <AiFillProject className='fz-18' />
                            <strong className='ms-10 mt-2'>Projects</strong>
                        </div>
                        <div>
                            <a>View all project</a>
                        </div>
                    </div>
                    <List
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={(item, index) => (
                            <List.Item className='flex-column flex-column-start'>
                                <Row className='w-100'>
                                    <Col span={12}>
                                        <strong>Web designer</strong>
                                        <List.Item.Meta
                                            className='w-100 mt-10 center-y'
                                            avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
                                            title={<a href="https://ant.design" className='mt-1'>{item.title}</a>}
                                        />
                                    </Col>
                                </Row>
                            </List.Item>
                        )}
                    />
                </div>
            </Col>
            <Col span={7}>
                <div className='dashboard-card notification'>
                    <div className='noti-header center-y'>
                        <MdNotifications className='fz-18' />
                        <strong className='mt-1 ms-5'>Notification</strong>
                    </div>
                    <List
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={(item) => (
                            <List.Item>
                                <List.Item.Meta
                                    title={<a href="https://ant.design">{item.title}</a>}
                                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                />
                            </List.Item>
                        )}
                    />
                </div>
            </Col>
        </Row >
    );
};

export default Dashboard;