import "./App.css";
import { Divider } from "antd";
import Filters from "./components/Filter";
import TodoList from "./components/TodoList";
import Title from "antd/es/typography/Title";
import { setupServer } from "./fakeAPIs";
import { useEffect } from "react";

if (process.env.NODE_ENV === "development") {
    setupServer();
}

function App() {
    return (
        <div
            style={{
                width: 500,
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "white",
                padding: 20,
                boxShadow: "0 0 10px 4px #bfbfbf",
                borderRadius: 5,
                height: "90vh",
            }}>
            <Title style={{ textAlign: "center" }}>TODO APP with REDUX</Title>
            <Filters />
            <Divider />
            <TodoList />
        </div>
    );
}

export default App;
