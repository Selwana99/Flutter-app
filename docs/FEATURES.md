# Gold Nightmare App - Feature Mapping

This document maps the UI features (buttons, actions) to the corresponding backend services they interact with.

## Main Dashboard (`/dashboard`)

| Button / Feature       | Component           | Service Function Call                 | API Endpoint Called        | Description                                                                 |
| ---------------------- | ------------------- | ------------------------------------- | -------------------------- | --------------------------------------------------------------------------- |
| **تحليل سريع**        | `ActionButton`      | `performAnalysis('quick', ...)`       | `POST /api/analysis`       | Performs a quick AI analysis, costing 1 point.                              |
| **سوينج**              | `ActionButton`      | `performAnalysis('swing', ...)`       | `POST /api/analysis`       | Performs a swing trade analysis, costing 3 points.                          |
| **كابوس الذهب**        | `ActionButton`      | `performAnalysis('nightmare', ...)`   | `POST /api/analysis`       | Performs a deep "Nightmare" analysis, costing 5 points.                     |
| **سكالبينج**           | `ActionButton`      | `performAnalysis('scalping', ...)`    | `POST /api/analysis`       | Performs a scalping analysis, costing 2 points.                             |
| **تحليل الشارت**      | `Card` (Large Button) | (Not Implemented)                     | (N/A)                      | Navigates to a future chat/image analysis page.                             |
| **مكتبة التحليلات** | `Card` (Large Button) | (Not Implemented)                     | (N/A)                      | Navigates to a future page showing past analysis results.                   |

## Scalping Page (`/dashboard/scalping`)

| Button / Feature | Component | Service Function Call              | API Endpoint Called | Description                                        |
| ---------------- | --------- | ---------------------------------- | ------------------- | -------------------------------------------------- |
| **1m**           | `button`  | `generateScalpingSignal('1m')`     | (Mocked in Service) | Generates a new scalping signal for the 1-minute timeframe. |
| **5m**           | `button`  | `generateScalpingSignal('5m')`     | (Mocked in Service) | Generates a new scalping signal for the 5-minute timeframe. |
| **15m**          | `button`  | `generateScalpingSignal('15m')`    | (Mocked in Service) | Generates a new scalping signal for the 15-minute timeframe.|

## License Page (`/dashboard/license`)

| Button / Feature | Component | Service Function Call              | API Endpoint Called          | Description                                        |
| ---------------- | --------- | ---------------------------------- | ---------------------------- | -------------------------------------------------- |
| **تفعيل**        | `button`  | `activateLicense(licenseKey)`      | `POST /api/license/activate` | Activates a license key to add points to the user's account. |

## Login Page (`/login`)

| Button / Feature | Component | Service Function Call        | API Endpoint Called      | Description                               |
| ---------------- | --------- | ---------------------------- | ------------------------ | ----------------------------------------- |
| **دخول**         | `button`  | `login(credentials)`         | `POST /api/auth/login`   | Authenticates the user and starts a session. |

## Settings Page (`/dashboard/settings`)

| Button / Feature    | Component | State Management Action | Description                               |
| ------------------- | --------- | ----------------------- | ----------------------------------------- |
| **تسجيل الخروج** | `button`  | `useUserStore.logout()` | Clears the user session and redirects to home. |
| **Theme Toggle**    | `button`  | (Not Implemented)       | Placeholder for future theme switching.   |
| **Alerts Toggle**   | `div`     | (Not Implemented)       | Placeholder for future alert settings.    |
