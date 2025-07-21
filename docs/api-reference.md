---
sidebar_position: 3
title: API Reference
slug: /api-reference
---
# API Reference

This page documents all the hooks, components, and props available in **`@neckbeard/react-auth-manager`**.

---

## `<AuthProvider>`

Wrap your app with `<AuthProvider>` to enable authentication context.

```jsx
<AuthProvider
  api={api}
  refreshTokenFn={async () => { /* ... */ }}
  fetchUserFn={async () => { /* ... */ }}
>
  <YourRoutes />
</AuthProvider>
```

**Props:**

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `api` | `AxiosInstance` | ✅ | Your configured Axios instance. |
| `refreshTokenFn` | `() => Promise<string>` | ✅ | Async function that returns a fresh access token. |
| `fetchUserFn` | `() => Promise<any>` | ✅ | Async function that returns the authenticated user's profile. |

---

## `useAuth`

Low-level hook for accessing the raw auth context.

```jsx
const {
  token,
  setToken,
  refreshToken,
  user,
  loadingUser,
  errorUser,
} = useAuth();
```

**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `token` | `string \| null` | Current access token. |
| `setToken` | `(token: string \| null) => void` | Manually set the access token. |
| `refreshToken` | `() => Promise<string>` | Triggers the `refreshTokenFn`. |
| `user` | `any` | User profile object. |
| `loadingUser` | `boolean` | `true` while fetching user profile. |
| `errorUser` | `Error \| null` | Error object if fetching user profile fails. |

---

## `useIsAuthenticated`

Check if the user is signed in.

```jsx
const isAuthenticated = useIsAuthenticated();
```

**Returns:**  
`true` if a token exists, otherwise `false`.

---

## `useSignIn`

Sign in by setting a new token.

```jsx
const signIn = useSignIn();

signIn('new-access-token');
```

**Usage:**  
Call with a valid access token. This sets the token and triggers a user fetch.

---

## `useSignOut`

Sign out by clearing the token and user profile.

```jsx
const signOut = useSignOut();

signOut();
```

**Usage:**  
Clears local auth state immediately.

---

## `useRefresh`

Manually trigger your refresh token function.

```jsx
const refresh = useRefresh();

await refresh();
```

**Returns:**  
A promise that resolves with the new token.

---

## `useUser`

Access the current user profile.

```jsx
const { user, loading, error } = useUser();
```

**Returns:**

| Field | Type | Description |
|-------|------|--------------|
| `user` | `any` | User profile. |
| `loading` | `boolean` | `true` while loading. |
| `error` | `Error \| null` | Error if fetching fails. |

---

## `<SignedIn>`

Renders its children **only if the user is signed in**.

```jsx
<SignedIn>
  <p>Welcome back!</p>
</SignedIn>
```

---

## `<SignedOut>`

Renders its children **only if the user is signed out**.

```jsx
<SignedOut>
  <p>Please sign in to continue.</p>
</SignedOut>
```

---

## `<AuthSwitch>`

Render different elements based on the auth state.

```jsx
<AuthSwitch
  signedIn={<p>Signed in!</p>}
  signedOut={<p>Signed out!</p>}
/>
```

**Props:**

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `signedIn` | `ReactNode` | ✅ | Content to render when authenticated. |
| `signedOut` | `ReactNode` | ✅ | Content to render when not authenticated. |

---

## Requirements

- React **18+**
- Axios **1.x**

---

## License

MIT

---
