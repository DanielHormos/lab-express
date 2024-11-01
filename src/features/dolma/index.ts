import express from "express";

export function createDolmaFeature() {
  return {
    getRouter() {
      const router = express.Router();

      router.get("/", (req, res) => {
        res.json([]);
      });

      return router;
    },
  };
}
