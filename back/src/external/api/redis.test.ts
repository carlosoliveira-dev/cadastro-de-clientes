import { createClient, RedisClientType } from "redis";
import { RedisContainer, StartedRedisContainer } from "@testcontainers/redis";

describe("Redis", () => {
  let container: StartedRedisContainer;
  let redisClient: RedisClientType;

  beforeAll(async () => {
    container = await new RedisContainer("redis:8").start();
    redisClient = createClient({ url: container.getConnectionUrl() });
    await redisClient.connect();
  });

  afterAll(async () => {
    await redisClient.disconnect();
    await container.stop();
  });

  it("works", async () => {
    await redisClient.set("key", "val");
    expect(await redisClient.get("key")).toBe("val");
  });
});