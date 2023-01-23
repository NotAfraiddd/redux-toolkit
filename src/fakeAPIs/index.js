import { createServer, Model } from "miragejs";

export const setupServer = () => {
    let server = createServer({
        models: {
            todos: Model,
        },
        routes() {
            this.get("/api/todos", (schema) => {
                return schema.todos.all();
            });
            this.post("/api/todos", (schema, request) => {
                const payload = JSON.parse(request.requestBody);
                return schema.todos.create(payload);
            });

            this.post("/api/updateTodo", (schema, request) => {
                const payload = JSON.parse(request.requestBody);
                const currentTodo = schema.todos.find(payload.id);
                currentTodo.update(payload);
            });
        },
    });
    server.get("/api/todos", {
        todos: [
            { id: 1, name: "Di lam", completed: false, priority: "High" },
            { id: 2, name: "An", completed: true, priority: "Medium" },
            { id: 3, name: "Ngu", completed: true, priority: "Low" },
        ],
    });
};
