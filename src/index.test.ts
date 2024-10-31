import { deepEqual } from "assert";
import test from "node:test";
import request from "supertest";
import { createApp } from ".";

test("Get / status!", async () => {
  const app = createApp();
  const result = await request(app).get("/status");

  deepEqual(result.status, 200);
  deepEqual(result.body, { status: "ready" });
});
