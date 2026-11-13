# Northstar CRM — Admin + User Panel Frontend

Responsive CRM frontend built with React 18, TypeScript, Vite, Redux Toolkit, Tailwind CSS, React Router, Recharts and Vitest.

## Start locally
Requires Node.js 20+.
```bash
npm install
npm run dev
```
Open http://localhost:5173.

## Build and test
```bash
npm run build
npm run test
```

## User Panel modules
- Authentication UI: login, forgot password, OTP verification, reset password.
- Personal dashboard with assigned lead/customer/deal/task metrics and Recharts performance chart.
- Leads: searchable list, status filtering, create/edit/delete and validation.
- Sales pipeline: Kanban-style stage columns with interactive deal movement.
- Customer profiles and contact details.
- Tasks: create, assign, prioritize, set deadlines, complete and delete.
- Activities: log calls, emails, meetings and notes.
- Reports & analytics: conversion, closed deal value, task completion and trends.
- Notifications: assignment, task, meeting and update notifications.
- Profile & settings: update name, email and job title.
- Role selector for Sales Representative, Manager and Admin demo accounts.

## Demo sign-in
Use any syntactically valid email and password of 6+ characters. Select a demo role on the login screen.
The demo identity is stored in localStorage and survives refresh.

## Architecture
`src/app` Redux store and typed hooks; `src/components` shared layout and UI; `src/features` feature-based modules; `src/types` shared CRM types.

## Important implementation notes
This is a frontend demonstration. Authentication and password recovery are simulated locally; OTP is format-validated but not delivered by a backend. CRM records are seeded sample data in Redux memory and reset on refresh. Profile/session data is stored in browser localStorage. For production, integrate secure API authentication, server-issued OTP/reset tokens, role/permission checks on the server, persistent database storage, audit trails, and real notification delivery.
