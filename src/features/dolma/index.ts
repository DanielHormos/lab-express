import express from "express";

type Dolma = unknown;

type Db = {
  getAll: () => Promise<Dolma[]>;
};
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
