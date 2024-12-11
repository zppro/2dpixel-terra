import { FunctionReference, anyApi } from "convex/server";
import { GenericId as Id } from "convex/values";

export const api: PublicApiType = anyApi as unknown as PublicApiType;
export const internal: InternalApiType = anyApi as unknown as InternalApiType;

export type PublicApiType = {
  users: {
    current: FunctionReference<"query", "public", Record<string, never>, any>;
  };
  worlds: {
    create: FunctionReference<
      "mutation",
      "public",
      {
        desc?: string;
        name: string;
        timeSpeedRatio: string;
        type: "normal" | "super";
      },
      any
    >;
    createWorld: FunctionReference<
      "action",
      "public",
      {
        desc?: string;
        name: string;
        timeSpeedRatio: string;
        type: "normal" | "super";
      },
      any
    >;
    deleteWorld: FunctionReference<
      "action",
      "public",
      { id: Id<"worlds"> },
      any
    >;
    list: FunctionReference<"query", "public", any, any>;
    listWorlds: FunctionReference<"action", "public", any, any>;
    read: FunctionReference<"query", "public", { id: Id<"worlds"> }, any>;
    update: FunctionReference<
      "mutation",
      "public",
      { desc?: string; id: Id<"worlds">; name: string },
      any
    >;
  };
  world: {
    scenes: {
      create: FunctionReference<
        "mutation",
        "public",
        { desc?: string; name: string; worldId: Id<"worlds"> },
        any
      >;
      read: FunctionReference<"query", "public", { id: Id<"scenes"> }, any>;
      list: FunctionReference<
        "query",
        "public",
        { worldId: Id<"worlds"> },
        any
      >;
      update: FunctionReference<
        "mutation",
        "public",
        { desc?: string; id: Id<"scenes">; name: string },
        any
      >;
      delete_: FunctionReference<
        "mutation",
        "public",
        { id: Id<"scenes"> },
        any
      >;
    };
    resources: {
      generateUploadUrl: FunctionReference<"mutation", "public", any, any>;
      generateDownloadUrl: FunctionReference<
        "query",
        "public",
        { id: Id<"_storage"> },
        any
      >;
      create: FunctionReference<
        "mutation",
        "public",
        {
          desc?: string;
          name: string;
          storageId: Id<"_storage">;
          type: "tileset" | "tilemap" | "item" | "music";
          worldId: Id<"worlds">;
        },
        any
      >;
      read: FunctionReference<"query", "public", { id: Id<"resources"> }, any>;
      list: FunctionReference<
        "query",
        "public",
        {
          type: "tileset" | "tilemap" | "item" | "music";
          worldId: Id<"worlds">;
        },
        any
      >;
      update: FunctionReference<
        "mutation",
        "public",
        {
          desc?: string;
          id: Id<"resources">;
          name: string;
          storageId: Id<"_storage">;
        },
        any
      >;
      delete_: FunctionReference<
        "mutation",
        "public",
        { id: Id<"resources"> },
        any
      >;
    };
  };
};
export type InternalApiType = {};
