import express, { Express, Request, Response } from "express"
import router from "./router/router";

const server: Express = express()

server.use(express.json());

server.use("/task", router)

server.listen(9000, () => console.log(`Server listenin in PORT: ${9000}`))