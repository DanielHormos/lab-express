import { deepEqual } from "assert";
import test from "node:test";
import request from "supertest";
import { createApp } from "./app";

test("Get / status!", async () => {
  const app = createApp();
  const result = await request(app).get("/status");

  deepEqual(result.status, 200);
  deepEqual(result.body, { status: "ready" });
});

test("Get /api/v1/dolma", async () => {
  const app = createApp();
  const result = await request(app).get("/api/v1/dolma");

  deepEqual(result.status, 200);
  deepEqual(result.body, []);
});

test("POST /api/v1/dolma", async () => {
  const app = createApp();
  const result = await request(app).post("/api/v1/dolma").send({ layers: [] });

  const getResult = await request(app).get("/api/v1/dolma");

  deepEqual(result.status, 200);
  deepEqual(getResult.body, [{ layers: [] }]);
});
