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

type InvoiceStatus = "pending" | "paid";

interface Customer {
    id: number;
    name: string;
    email: string;
}

interface Invoice {
    id: number;
    amount: number;
    status: InvoiceStatus;
    issueDate: string;
    dueDate: string;
    customer: Customer;
}

const invoices: Invoice[] = [
    {
        id: 1,
        amount: 125000,
        status: "pending",
        issueDate: "2026-06-01",
        dueDate: "2026-06-15",
        customer: {
            id: 1,
            name: "Construtora Meridiano",
            email: "contato@meridiano.com.br",
        },
    },
    {
        id: 2,
        amount: 348000,
        status: "paid",
        issueDate: "2026-05-12",
        dueDate: "2026-06-11",
        customer: {
            id: 1,
            name: "Construtora Meridiano",
            email: "contato@meridiano.com.br",
        },
    },
    {
        id: 3,
        amount: 96500,
        status: "pending",
        issueDate: "2026-06-20",
        dueDate: "2026-07-20",
        customer: {
            id: 2,
            name: "Gráfica Aurora",
            email: "contato@graficaaurora.com.br",
        },
    },
];

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

app.get("/api/invoices", function (request, response) {
    response.status(200).json(invoices);
});

app.get("/api/invoices/:id", function (request, response) {
    const id = +request.params.id;

    for (let i = 0; i < invoices.length; i++) {
        if (invoices[i].id === id) {
            response.status(200).json(invoices[i]);
            return;
        }
    }

    response.status(404).json({ error: { message: "Fatura não encontrada" } });
});

app.use(function (request, response) {
    response.status(404).json({ message: "Recurso não encontrado" });
});

app.listen(3000);
