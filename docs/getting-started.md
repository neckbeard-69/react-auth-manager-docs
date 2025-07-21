---
sidebar_position: 2
title: Getting Started
slug: /getting-started
---

# Getting Started

Welcome to **React Auth Manager** — a simple and adaptable way to handle authentication in your React apps with **zero hassle**.

---

## 📦 Installation

Install the library:

```bash
npm install @neckbeard/react-auth-manager
```

**Note:** This library uses Axios as a peer dependency — make sure to install it too:

```bash
npm install axios
```

---

## ⚙️ Setup

First, wrap your entire app in the `<AuthProvider>` and pass in your Axios instance, a **refresh token** function, and a **user profile fetcher**.

```jsx
import { AuthProvider } from '@neckbeard/react-auth-manager';
import axios from 'axios';

const api = axios.create({ baseURL: '/api' });

export default function App() {
  return (
    <AuthProvider
      api={api}
      refreshTokenFn={async () => {
        const response = await api.post('/refresh_token');
        return response.data.accessToken;
      }}
      fetchUserFn={async () => {
        const response = await api.get('/me');
        return response.data;
      }}
    >
      <YourRoutes />
    </AuthProvider>
  );
}
```

---

## 🔑 Sign In

Use the `useSignIn` hook to store the access token after logging in.

```jsx
import { useSignIn } from '@neckbeard/react-auth-manager';
import api from './api';

export function LoginButton() {
  const signIn = useSignIn();

  async function handleLogin() {
    const response = await api.post('/login', {
      username: '...',
      password: '...',
    });

    signIn(response.data.accessToken);
  }

  return <button onClick={handleLogin}>Sign In</button>;
}
```

---

## 🚪 Sign Out

Clear the user session with `useSignOut`:

```jsx
import { useSignOut } from '@neckbeard/react-auth-manager';
import api from './api';

export function LogoutButton() {
  const signOut = useSignOut();

  async function handleLogout() {
    await api.post('/logout');
    signOut();
  }

  return <button onClick={handleLogout}>Sign Out</button>;
}
```

---

## 👤 Get User Profile

Access the authenticated user profile with `useUser`:

```jsx
import { useUser } from '@neckbeard/react-auth-manager';

export function UserProfile() {
  const { user, loading, error } = useUser();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!user) return <p>No user data</p>;

  return (
    <pre>{JSON.stringify(user, null, 2)}</pre>
  );
}
```

---

## 🔒 Conditional Rendering

Render components based on whether the user is signed in or out:

```jsx
import { SignedIn, SignedOut, AuthSwitch } from '@neckbeard/react-auth-manager';

export function AuthStatus() {
  return (
    <>
      <SignedIn>
        <p>You are signed in!</p>
      </SignedIn>

      <SignedOut>
        <p>Please sign in.</p>
      </SignedOut>

      <AuthSwitch
        signedIn={<p>Authenticated!</p>}
        signedOut={<p>Not authenticated.</p>}
      />
    </>
  );
}
```

---

## ✅ Next Steps

- For advanced usage, check the **API Reference** and **Examples**.
- Customize your Axios instance with your own interceptors if needed.
- Let the library handle silent refreshes and user caching out of the box.
