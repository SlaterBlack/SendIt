# SendIt
# SendIt

SendIt is the blue-and-cream app in the ClockIt / ManageIt / SendIt suite. This
initial scaffold provides an Angular frontend with the shared app shell,
StoreIt-facing authentication wiring, and starter Overview, Send, and Activity
screens.

## Structure

```text
frontend/   Angular standalone app (port 2402)
```

SendIt intentionally has no app-specific backend. Its `/api` requests are
proxied to the `STOREIT_API_URL` in `frontend/.env`. Copy
`frontend/.env.example` to `frontend/.env`; its default value is
`http://127.0.0.1:4002`. StoreIt must be running before sign-in or
backend-backed features can work.

## Run locally

```powershell
cd frontend
Copy-Item .env.example .env
npm install
npm start
```

Open <http://localhost:2402>. The frontend expects StoreIt to provide
`POST /api/auth/login` and `GET /api/auth/me`, returning the same token and user
shape used by ManageIt. The send workflow is deliberately a UI scaffold until
the message type and StoreIt API contract are defined.