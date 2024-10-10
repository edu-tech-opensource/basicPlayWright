# Playwright Getting Started 🚀

Welcome to your journey with **Playwright**! This guide will help you set up your environment and run your first tests.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Getting Started](#getting-started)
- [Executing Tests in UI Mode](#executing-tests-in-ui-mode)
- [View Test Reports](#view-test-reports)
- [Enable Live Updates with the Watch Feature](#enable-live-updates-with-the-watch-feature)
- [Debugging with Trace On](#debugging-with-trace-on)
- [Debugging Options](#debugging-options)
- [Debugging with Test Explorer](#debugging-with-test-explorer)
- [Conclusion for Noobs](#conclusion-for-noobs)

## Prerequisites

- [Node.js](https://nodejs.org/en) (Install LTS Version)
- [Git](https://git-scm.com/downloads) (For Mac, you can use Homebrew)
- [Visual Studio Code](https://code.visualstudio.com/) (Install the Latest Version)
- Playwright extensions for VS Code

## Setup

1. **Create a New Project Folder**
   - Start by creating a simple folder for your project.

2. **Install Playwright**
   - Open a terminal inside your project folder and run:
   ```bash
   npm init playwright@latest


# Getting Started with Playwright 🚀

Welcome to your journey with Playwright! This guide will help you execute tests using Playwright efficiently.

## Headless Execution 👻

To run your tests in **headless mode** (no UI), use the following command:

```bash
npx playwright test --project=chromium
```

## Headed Execution 🌐
To run your tests with a visible browser UI, use:

```bash
npx playwright test --project=chromium --headed
```

## Execute a Specific Test File 📄
If you want to run a specific test file, use:

```bash
npx playwright test example.spec.ts --project=chromium --headed
```

## Execute Specific Tests Inside the File 🔍
To run specific tests that match a title in the file, you can use the following command:

``` bash
npx playwright test -g "has title" --project=chromium --headed
```

## Skipping a Test 🚫
If you have a test that you don't want to run, use test.skip:

```
test.skip('has title', async ({ page }) => {
  await page.goto('https://example.com');
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/demo/);
});
```

## Running Only One Test 🔧
When debugging or focusing on a specific test, use test.only:

```
test.only('has title', async ({ page }) => {
  await page.goto('https://example.com');
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/demo/);
});
```

## Enable Tracing 📊
To enable tracing for your tests, use:

```
npx playwright test --project=chromium --trace on
```

## Debugging 🐞
For debugging purposes, run your tests with:

```
npx playwright test --project=chromium --debug
```

## Happy Testing! 🎉 Feel free to explore further and improve your automation skills with Playwright!
