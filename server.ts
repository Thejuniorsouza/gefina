// import { createServer } from "node:http";
// import send from "./send.ts";

// createServer(function (request, response) {
//     if (request.url !== "/api/health") {
//         send(response, 404, { message: "Recurso não encontrado" });
//         return;
//     }

//     send(response, 200, { message: "Servidor está funcionando corretamente" });
// }).listen(3000);

import express from "express";
import invoices from "./invoice.route.ts";

const app = express();

app.use(function (request, response, next) {
    console.log(request.method + " " + request.url);
    next();
});

app.get("/api/health", function (request, response) {
    response
        .status(200)
        .json({ message: "Servidor está funcionando corretamente" });
});

app.use("/api/invoices", invoices);

app.use(function (request, response) {
    response.status(404).json({ message: "Recurso não encontrado" });
});

app.listen(3000);
