import express from 'express';
import cors from 'cors';
import { RegisterRoutes } from "./routes";
import * as swaggerJson from "./swagger.json";
import * as swaggerUI from "swagger-ui-express";

const app = express();
app.use(cors());
app.use(express.json());

RegisterRoutes(app);
app.use(["/openapi", "/docs", "/swagger"], swaggerUI.serve, swaggerUI.setup(swaggerJson));

const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(`Server is running at http://localhost:${port} 🚀`)
);
  