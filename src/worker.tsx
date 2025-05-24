import { defineApp, ErrorResponse } from "rwsdk/worker";
import { route, render, prefix } from "rwsdk/router";
import { Document } from "@/app/Document";
import { Home } from "@/app/pages/Home";
import { setCommonHeaders } from "@/app/headers";
import { userRoutes } from "@/app/pages/user/routes";
import { sessions, setupSessionStore } from "./session/store";
import { Session } from "./session/durableObject";
import { db, setupDb } from "@/db";
import { env } from "cloudflare:workers";
import Redirect from "./app/pages/Redirect";
import Here from "./app/pages/Here";

export type AppContext = {};

export default defineApp([
  setCommonHeaders(),
  async ({ ctx, request, headers }) => {
    await setupDb(env);
    // setupSessionStore(env);
  },
  render(Document, [
    route("/", () => new Response("Hello, World!")),
    route("/redirect", Redirect),
    route("/redirect/:id", Redirect),
    route("/here", Here),
  ]),
]);
