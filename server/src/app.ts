import express, {Request, Response} from 'express';
import { RegisterRoutes } from "./routes";

const app = express();
app.use(express.json());

RegisterRoutes(app);

const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(`Server is running at http://localhost:${port} 🚀`)
);
  