import * as dotenv from "dotenv";
import express, { Request, Response, NextFunction } from "express";
import { sequelize } from "./models";	//방금 만든 sequelize객체를 import해준다.(index.ts에 만들었으므로 폴더명만 입력하면 먼저 자동으로 index.ts를 찾아 그 안에 있는거 import)

dotenv.config();

const PORT: number = parseInt(process.env.PORT as string, 10);
const HOST: string = String(process.env.HOST);
const app = express();

app.use(express.json());
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`Request Occur! ${req.method}, ${req.url}`);
  next();
})

app.listen(PORT, HOST, async () => {
  console.log(`Server Listening on ${HOST}:${PORT}`);

  // //sequelize-db 연결 테스트
  await sequelize.authenticate()
    .then(async () => {
      console.log("Database connected successfully.");
    })
    .catch((e) => {
      console.log('TT : ', e);
    })
})
