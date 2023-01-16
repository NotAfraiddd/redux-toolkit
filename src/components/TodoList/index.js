import { Col, Row, Input, Button, Select, Tag } from "antd";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { todoShowResults } from "../../contain/selector";
import Todo from "../Todo";
import todoSlice from "./todoSlice";

export default function TodoList() {
    const [nameTodo, setNameTodo] = useState("");
    const [priority, setPriority] = useState("Medium");

    const todoList = useSelector(todoShowResults);
    // useSelector là lấy state từ store

    const inputRef = useRef();

    const dispatch = useDispatch();
    // dispatch là return về 1 tham chiếu đến dispatch func
    // gửi các action đến store
    const handleAddTodo = () => {
        dispatch(
            todoSlice.actions.addTodo({
                id: uuidv4(),
                name: nameTodo,
                priority: priority,
                completed: false,
            })
        );
        setNameTodo("");
        setPriority("Medium");
        inputRef.current.focus();
    };

    const handleInputAddTodo = (e) => {
        setNameTodo(e.target.value);
    };

    const handleSelectPriority = (e) => {
        setPriority(e);
    };
    return (
        <Row style={{ height: "calc(100% - 40px)" }}>
            <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
                {todoList.map((todo) => (
                    <Todo key={todo.id} name={todo.name} priority={todo.priority} completed={todo.completed} />
                ))}
            </Col>
            <Col span={24}>
                <Input.Group style={{ display: "flex" }} compact>
                    <Input ref={inputRef} value={nameTodo} onChange={handleInputAddTodo} />
                    <Select defaultValue="Medium" value={priority} onChange={handleSelectPriority}>
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
                    <Button type="primary" onClick={handleAddTodo}>
                        Add
                    </Button>
                </Input.Group>
            </Col>
        </Row>
    );
}
