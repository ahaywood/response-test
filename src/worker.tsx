import { defineApp } from "rwsdk/worker";
import { route, render } from "rwsdk/router";
import { Document } from "@/app/Document";
import { setCommonHeaders } from "@/app/headers";
import { setupDb } from "@/db";
import { env } from "cloudflare:workers";
import Redirect from "./app/pages/Redirect";
import Here from "./app/pages/Here";
import { Form } from "./app/pages/Form";

export type AppContext = {};

export default defineApp([
  setCommonHeaders(),
  async ({ ctx, request, headers }) => {
    await setupDb(env);
  },
  render(Document, [
    route("/", () => new Response("Hello, World!")),
    route("/redirect", Redirect),
    route("/redirect/:id", Redirect),
    route("/here", Here),
    route("/form", Form),
  ]),
]);
