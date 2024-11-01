import express from "express";
import { v4 } from "uuid";

export type DolmaLayer = {
  content: string;
};

export type Dolma = {
  id: string;
  layer: DolmaLayer[];
};

export type Db = {
  getAll: () => Promise<Dolma[]>;
  cookDolma: (dolma: Dolma) => Promise<void>;
};
export function createDolmaFeature(db: Db) {
  return {
    getRouter() {
      const router = express.Router();

      router.get("/", async (req, res) => {
        res.json(await db.getAll());
      });

      router.post("/", async (req, res) => {
        const { layer } = req.body;

        const id = v4();

        const dolma = { id, layer };
        db.cookDolma(dolma);

        res.status(200).json({ id });
      });

      return router;
    },
  };
}
