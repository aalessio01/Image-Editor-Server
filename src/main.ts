import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

app.get("/imageeditorapi/health", (req: Request, res: Response) => {
  res.status(200).send("OK");
});

app.listen(PORT, () => {
  console.log(`🖼️  Image-Editor-Server listening on http://localhost:${PORT}`);
});