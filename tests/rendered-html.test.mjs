import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const developmentPreviewMeta =
  /<meta(?=[^>]*\bname=["']codex-preview["'])(?=[^>]*\bcontent=["']development["'])[^>]*>/i;

test("renders development preview metadata", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  assert.match(await response.text(), developmentPreviewMeta);
});

test("renders the History and urban development longread with its four approved image plates", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("history", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("http://localhost/keep/history-and-urban-development", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  const html = await response.text();
  assert.equal(response.status, 200);
  assert.match(html, /The Ring That Was Nearly a Canal/);
  assert.match(html, /When the kerb changed use/);
  assert.match(html, /Sources and limits/);
  assert.match(html, /Nyugati Station/);
  assert.match(html, /Főnix House/);
  assert.match(html, /Dunapark Houses/);
  assert.match(html, /\/media\/history\/nyugati-interior\.webp/);
  assert.match(html, /\/media\/history\/nyugati-exterior\.webp/);
  assert.match(html, /\/media\/history\/fonix-house\.webp/);
  assert.match(html, /\/media\/history\/dunapark-houses\.webp/);
});

test("renders the Three streets I know landing page with the approved change visuals", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("three-streets", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("http://localhost/change/three-streets", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  const html = await response.text();
  assert.equal(response.status, 200);
  assert.match(html, /Three streets I know/);
  assert.match(html, /A personal selection\./);
  assert.match(html, /Corner by corner\./);
  assert.match(html, /The same contradiction\./);
  assert.match(html, /Parking-free is not access-free\./);
  assert.match(html, /Examples, not a plan for Budapest\./);
  assert.match(html, /\/media\/change\/three-streets-map-future-bridge-v0-2\.webp/);
  assert.match(html, /\/media\/change\/existing-20m-street-section\.webp/);
  assert.match(html, /\/media\/change\/falk-miksa-vision\.webp/);
  assert.match(html, /\/media\/change\/pozsonyi-vision\.webp/);
  assert.match(html, /\/media\/change\/katona-vision\.webp/);
});

test("renders the canonical Falk Miksa v0.4 chapter and its complete source structure", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("falk-miksa", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("http://localhost/change/falk-miksa", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
    },
    { waitUntil() {}, passThroughOnException() {} },
  );

  const html = await response.text();
  assert.equal(response.status, 200);
  assert.match(html, /Falk Miksa utca/);
  assert.match(html, /\/media\/change\/falk-miksa\/page\.html/);

  const sourcePage = await readFile(
    new URL("../public/media/change/falk-miksa/page.html", import.meta.url),
    "utf8",
  );
  assert.match(sourcePage, /FALK_MIKSA_CINEMATIC_SUBPAGE_MOCKUP_v0_4/);
  assert.match(sourcePage, /I was born here/);
  assert.match(sourcePage, /Three changes, not the same change three times/);
  assert.match(sourcePage, /Local living/);
  assert.match(sourcePage, /Antiques high street/);
  assert.match(sourcePage, /Northern connection/);
  assert.match(sourcePage, /Where does the Rembrandt go/);
  assert.match(sourcePage, /The street should still feel inhabited/);
  assert.match(sourcePage, /From flood defence to gallery street/);
  assert.doesNotMatch(sourcePage, /<header class="site-head">/);
  assert.equal(
    [...sourcePage.matchAll(/class="comparison-card comparison-slider-experiment"/g)].length,
    1,
  );
  assert.match(sourcePage, /\.comparison-slider-experiment \.compare:focus-within \{ outline: none; \}/);
  assert.match(sourcePage, /\.comparison-slider-experiment \.compare img \{[^}]*filter: none;[^}]*opacity: 1;/s);
  for (let index = 0; index < 18; index += 1) {
    assert.match(
      sourcePage,
      new RegExp(`/media/change/falk-miksa/asset${index}\\.webp`),
    );
  }
});
