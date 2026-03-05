# Frontend / Backend Separation for Supabase Edge

## Architecture

- Frontend: static files
  - `/Users/sahil-mac/ai/german-learning/index.html`
  - `/Users/sahil-mac/ai/german-learning/styles.css`
  - `/Users/sahil-mac/ai/german-learning/script.js`
  - `/Users/sahil-mac/ai/german-learning/config.js`
- Backend (Edge Function):
  - `/Users/sahil-mac/ai/german-learning/supabase/functions/german-api/index.ts`
  - Paste-ready single file copy:
    - `/Users/sahil-mac/ai/german-learning/supabase_edge_function.ts`

The frontend reads `window.APP_CONFIG.API_BASE_URL` from `config.js`.

- If empty: uses local Node endpoints (`/api/...`)
- If set: uses Supabase Edge endpoints (`/gender`, `/sentence/translate`, `/sentence/validate`)

---

## 1. Deploy backend to Supabase Edge

From `/Users/sahil-mac/ai/german-learning`:

```bash
supabase login
supabase link --project-ref <your-project-ref>
supabase functions deploy german-api --no-verify-jwt
```

If you prefer Supabase dashboard paste mode, copy the full contents of:

`/Users/sahil-mac/ai/german-learning/supabase_edge_function.ts`

After deploy, your backend base URL will be:

```text
https://<your-project-ref>.supabase.co/functions/v1/german-api
```

---

## 2. Point frontend to Supabase backend

Edit `/Users/sahil-mac/ai/german-learning/config.js`:

```js
window.APP_CONFIG = {
  API_BASE_URL: "https://<your-project-ref>.supabase.co/functions/v1/german-api"
};
```

Then host frontend on any static host (Supabase Storage, Vercel, Netlify, etc.).

---

## 3. Edge routes exposed

- `GET /gender?word=Haus`
- `GET /sentence/translate?text=Ich%20habe%20ein%20Auto`
- `GET /sentence/validate?text=ich%20habe%20ein%20auto&mode=grammar`

These are resolved under your function base URL.

Example:

```text
https://<project-ref>.supabase.co/functions/v1/german-api/gender?word=Haus
```

---

## 4. Local development

### Option A (legacy all-in-one)

```bash
node /Users/sahil-mac/ai/german-learning/server.js
```

Keep `API_BASE_URL` empty in `config.js`.

### Option B (frontend -> Supabase backend)

- Set `API_BASE_URL` in `config.js`
- Serve frontend statically (example):

```bash
cd /Users/sahil-mac/ai/german-learning
python3 -m http.server 4173
```

Open `http://localhost:4173`.
