# LinkedIn Search From Anywhere

## Overview

This is a simple extension that shows a form and lets you input values to start a LinkedIn search.

![LinkedIn Search From Anywhere Screenshot](extensionScreenshot.png "Screenshot")

## Use

Download the built extension files from /build/.

In Chrome, go to `chrome://extensions` and click "Load unpacked" and select the `/build/chrome-mv3-prod` directory.

## Or Build

Install [npm](https://nodejs.org/en/download/)

Sync this repo locally (Git Bash):

```bash
git clone https://github.com/PeterPCW/LinkedIn-Search-From-Anywhere
```

Run `npm install` to build the node_modules directory. You can use `npm install --force` or `npm audit fix` (after a successful install) to help any issues.

```cmd
npm install
```

Build locally (Note: this will run EsLint along the way as well):

```cmd
pnpm build
# or
npm run build
```

Then, see Use.
