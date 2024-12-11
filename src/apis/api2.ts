import { FunctionReference, anyApi } from "convex/server";
import { GenericId as Id } from "convex/values";

export const api: PublicApiType = anyApi as unknown as PublicApiType;
export const internal: InternalApiType = anyApi as unknown as InternalApiType;

export type PublicApiType = {
  messages: {
    list: FunctionReference<"query", "public", Record<string, never>, any>;
    send: FunctionReference<
      "mutation",
      "public",
      { author: string; body: string },
      any
    >;
  };
  likes: {
    like: FunctionReference<
      "mutation",
      "public",
      { liker: string; messageId: Id<"messages"> },
      any
    >;
  };
  ai: {
    chat: FunctionReference<"action", "public", { messageBody: string }, any>;
  };
};
export type InternalApiType = {};
