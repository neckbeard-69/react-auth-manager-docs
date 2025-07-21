---
sidebar_position: 1
slug: /introcution
title: Introduction
---

# Introduction

**React Auth Manager** is a straightforward, no-nonsense authentication context library for React apps.

It wasn’t built in a lab or designed by a big company — it came out of a real problem during a real project.

---

## 📜 Why It Exists

This library was originally created while building a SaaS application with a **React frontend** and a **Go + Postgres backend** — a classic client-server setup with React running entirely on the client side (no Next.js).

When we started implementing authentication, we explored third-party solutions like **Clerk**. Clerk had a lot of good ideas — its UI components and conditional rendering were smooth and convenient. But it turned out to be tightly coupled to **Next.js** and its custom user schema approach and webhooks added more complexity than we wanted. For a simple REST API setup with React, it felt like overkill.

So, instead of wrestling with tools that didn’t fit, we built our own **auth flow** from scratch — and it turned out to be refreshingly simple. We managed tokens, silent refresh, user profiles, and conditional rendering with just React and Axios — exactly what we needed, nothing more.

We looked at other solutions too, like **React Auth Kit**, but they didn’t fit our needs either. So, the library you see here is the result: a small, flexible, no-dependency React auth manager that **just works** for token-based auth with any REST API.

---

## 🎁 Why Share It?

This wasn’t built for mass adoption — it was built for *us*. But maybe it’ll save someone else from reinventing the same wheel. If you want a **drop-in `<AuthProvider>`**, a few **clear hooks**, and simple **conditional rendering**, here it is.

It’s open source, MIT licensed, and you’re free to use it, fork it, or improve it however you like. Contributions are always welcome.

---

**Thanks for checking it out — and happy coding!**
