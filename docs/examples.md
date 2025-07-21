---
sidebar_position: 4
slug: /examples
title: Examples
---

# Examples

This page shows practical usage patterns for **`@neckbeard/react-auth-manager`** — from simple login/logout to protecting routes and customizing behavior.

---

## ✨ Basic Sign In & Sign Out

Handle login and logout with `useSignIn` and `useSignOut`.

```jsx
import { useSignIn, useSignOut } from '@neckbeard/react-auth-manager';
import api from './api';

export function LoginButton() {
  const signIn = useSignIn();

  async function handleLogin() {
    const response = await api.post('/login', {
      username: 'your-username',
      password: 'your-password',
    });

    signIn(response.data.accessToken);
    /*
     SignIn() has nothing to do with the server,
     it only sets the token from the response
    */
  }

  return <button onClick={handleLogin}>Sign In</button>;
}

export function LogoutButton() {
  const signOut = useSignOut();

  async function handleLogout() {
    await api.post('/logout');
    signOut(); 
    /* 
     SignOut() only clears the access token from memory,
     it has nothing do with clearing the session on the server
    */
  }

  return <button onClick={handleLogout}>Sign Out</button>;
}
```

---

## 🔄 Silent Token Refresh on Window Focus

Trigger a silent refresh when the window/tab regains focus.

```jsx
import { useRefresh } from '@neckbeard/react-auth-manager';
import { useEffect } from 'react';

export function SilentRefreshOnFocus() {
  const refresh = useRefresh();

  useEffect(() => {
    function handleFocus() {
      refresh().catch(console.error);
    }

    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, [refresh]);

  return null;
}
```

Place `<SilentRefreshOnFocus />` anywhere inside `<AuthProvider>`.

---

## 🔒 Protect a Route

***NOTE: These components might be added natively in the future, so you don't have to implement them yourself then***

Block access to a page if the user is not authenticated.

```jsx
import { useIsAuthenticated } from '@neckbeard/react-auth-manager';
import { Navigate } from 'react-router-dom';

export function ProtectedRoute({ children }) {
  const isAuthenticated = useIsAuthenticated();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
```

Use in your router:

```jsx
<Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>
```

---

## 🔀 Auth Switch with Fallback UI

Show different UI when signed in or signed out.

```jsx
import { AuthSwitch } from '@neckbeard/react-auth-manager';

export function AuthMessage() {
  return (
    <AuthSwitch
      signedIn={<p>Welcome back!</p>}
      signedOut={<p>You are not logged in.</p>}
    />
  );
}
```

---

## ⚙️ Custom Axios Interceptors (Optional)

You may want extra request or response logic in addition to what `react-auth-manager` handles.

```jsx
import axios from 'axios';

const api = axios.create({ baseURL: '/api' });

// Add a custom request interceptor
api.interceptors.request.use(
  (config) => {
    console.log('Custom interceptor logic here');
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
```

Then pass `api` to `<AuthProvider>` as usual.

---

## ✅ Good Practices

- Always handle **refresh token failures** — sign out the user or redirect them to login if a refresh fails.
- Protect routes on the frontend *and* the backend — never trust the client alone.

---

