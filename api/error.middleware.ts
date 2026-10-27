import type { ErrorRequestHandler } from "express";

const handlError: ErrorRequestHandler = (error, _request, response, _next) => {
    console.error(error);

    response.status(500).json({ error: {
        status: 500,
        message: "Nào foi possível concluir a operaçào."
    }})
};

export default handlError;