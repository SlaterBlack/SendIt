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
proxied to StoreIt at `http://localhost:4002` by default. Update
`frontend/proxy.conf.json` if StoreIt uses another local port. StoreIt currently
contains only its README, so the API must be available before sign-in or
backend-backed features can work.

## Run locally

```powershell
cd frontend
npm install
npm start
```

Open <http://localhost:2402>. The frontend expects StoreIt to provide
`POST /api/auth/login` and `GET /api/auth/me`, returning the same token and user
shape used by ManageIt. The send workflow is deliberately a UI scaffold until
the message type and StoreIt API contract are defined.