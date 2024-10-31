import express from "express";
import { create } from "node:domain";

export function createApp() {
  const app = express();

  app.get("/status", (req, res) => {
    res.json({ status: "ready" });
  });
  return app;
}

createApp().listen(3000, () => {
  console.log(`Server started on hhtp://localhost:3000`);
});
