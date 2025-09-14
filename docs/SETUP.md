# Gold Nightmare App - Setup Guide

This document provides instructions on how to set up and run the Gold Nightmare application locally for development and testing purposes.

## Prerequisites

Before you begin, ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [pnpm](https://pnpm.io/installation) package manager

## Installation

1.  **Clone the Repository:**
    ```bash
    git clone <repository-url>
    cd gold-nightmare-app
    ```

2.  **Install Dependencies:**
    Use `pnpm` to install the project's dependencies.
    ```bash
    pnpm install
    ```

3.  **Environment Variables:**
    Create a `.env.local` file in the root of the project by copying the example file.
    ```bash
    cp .env.example .env.local
    ```
    Fill in the required API keys in `.env.local`. For this project, since we are using mock services, no real keys are needed, but this file demonstrates where they would go.

## Running the Application

1.  **Run the Development Server:**
    To start the application in development mode, run the following command:
    ```bash
    pnpm dev
    ```
    This will start the Next.js development server, typically on `http://localhost:3000`. You can now open this URL in your web browser to see the application.

2.  **Running in Production Mode:**
    To build and run the application in a production-like environment, follow these steps:

    ```bash
    # Build the application for production
    pnpm build

    # Start the production server
    pnpm start
    ```

## Running Tests

The project is set up with Jest for testing. To run the test suite, use the following command:

```bash
pnpm test
```
This will execute all the unit and component tests in the project.
