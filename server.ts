import { createServer } from "node:http";

createServer(function (request, response) {
    if (request.url !== "/api/health") {
        response.writeHead(404, { "Content-Type": "application/json" });
        response.end(JSON.stringify({ message: "Recurso não encontrado" }));
        return;
    }

    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ status: "ok" }));
}).listen(3000);
