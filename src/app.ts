import express from "express";
import { createDolmaFeature } from "../src/features/dolma";

export function createApp() {
  const app = express();
  app.get("api/v1/dolma");

  app.get("/status", (req, res) => {
    res.json({ status: "ready" });
  });
  const db = { getAll: async () => [] };
  const dolmaFeature = createDolmaFeature(db);

  app.use("/api/v1/dolma", dolmaFeature.getRouter());
  return app;
}
