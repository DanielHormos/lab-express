import express from "express";

type Db = any;

export function createDolmaFeature(db: Db) {
  return {
    getRouter() {
      const router = express.Router();

      router.get("/", async (req, res) => {
        res.json(await db.getAll());
      });

      return router;
    },
  };
}
