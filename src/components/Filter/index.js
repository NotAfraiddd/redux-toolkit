import { Col, Row, Input, Typography, Radio, Select, Tag } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import filterSlice from "./filterSlice";

const { Search } = Input;

export default function Filters() {
    const [filterSearch, setFilterSearch] = useState("");
    const [filterStatus, setFilterStatus] = useState("All");
    const [filterPriority, setFilterPriority] = useState([]);

    const dispatch = useDispatch();

    const handleFilterSearch = (data) => {
        setFilterSearch(data.target.value);
        dispatch(filterSlice.actions.searchTodo(data.target.value));
    };
    const handleFilterStatus = (data) => {
        setFilterStatus(data.target.value);
        dispatch(filterSlice.actions.statusFilterTodo(data.target.value));
    };
    const handleFilterPriority = (data) => {
        setFilterPriority(data);
        dispatch(filterSlice.actions.priorityFilterTodo(data));
    };

    return (
        <Row justify="center">
            <Col span={24}>
                <Typography.Paragraph style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}>
                    Search
                </Typography.Paragraph>
                <Search placeholder="input search text" value={filterSearch} onChange={handleFilterSearch} />
            </Col>
            <Col sm={24}>
                <Typography.Paragraph style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}>
                    Filter By Status
                </Typography.Paragraph>
                <Radio.Group value={filterStatus} onChange={handleFilterStatus}>
                    <Radio value="All">All</Radio>
                    <Radio value="Completed">Completed</Radio>
                    <Radio value="Todo">To do</Radio>
                </Radio.Group>
            </Col>
            <Col sm={24}>
                <Typography.Paragraph style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}>
                    Filter By Priority
                </Typography.Paragraph>
                <Select
                    value={filterPriority}
                    onChange={handleFilterPriority}
                    mode="multiple"
                    allowClear
                    placeholder="Please select"
                    style={{ width: "100%" }}>
                    <Select.Option value="High" label="High">
                        <Tag color="red">High</Tag>
                    </Select.Option>
                    <Select.Option value="Medium" label="Medium">
                        <Tag color="blue">Medium</Tag>
                    </Select.Option>
                    <Select.Option value="Low" label="Low">
                        <Tag color="gray">Low</Tag>
                    </Select.Option>
                </Select>
            </Col>
        </Row>
    );
}
