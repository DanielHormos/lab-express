import express from "express";
import { createDolmaFeature, Db, Dolma } from "../src/features/dolma";

function createDb(): Db {
  const data: Dolma[] = [];
  return {
    getAll: async () => data,
    cookDolma: async (dolma: Dolma) => {
      data.push(dolma);
    },
  };
}

export function createApp() {
  const app = express();

  app.use(express.json());

  app.get("api/v1/dolma");

  app.get("/status", (req, res) => {
    res.json({ status: "ready" });
  });
  const db = createDb();
  const dolmaFeature = createDolmaFeature(db);

  app.use("/api/v1/dolma", dolmaFeature.getRouter());
  return app;
}
