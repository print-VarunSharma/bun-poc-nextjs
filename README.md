This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
This next.js app runs on BUN!
![image](https://github.com/print-VarunSharma/bun-poc-nextjs/assets/62218708/8533e342-1e28-4de7-ba67-78cd142c5861)


## Description

The purpose of this app is to create a proof-of-concept and run a next.js app on Bun.sh.

Full details of this technical spike and information about Bun, and other JavaScript environment alternative can be found here:

[Tech Spike - Using an alternative JS runtime environment to improve app performance](https://play-auris.notion.site/Tech-Spike-Using-an-alternative-JS-runtime-environment-to-improve-app-performance-64186448f04b4708b0498857ed3acbc5?pvs=4)

![image](https://github.com/print-VarunSharma/bun-poc-nextjs/assets/62218708/e9ee3d02-6d82-490d-a83e-d61e4c4f16d7)


## Problem

Define the problem or issue you need to investigate. What specific technical challenge do you need to address? What is the goal of the technical spike?

Currently, we have some apps and parts of our system that have degraded, slower performance. Most notable, where we want best in class performance is the landing page, and the narration widget. For this particular spike we are focusing optimization efforts on the JavaScript runtime environment itself.

## Scope of Spike

Identify the scope of the technical spike. What specific areas of the codebase or infrastructure will be investigated? What are the boundaries of the spike?

We want to understand that if we change our javascript run time framework, weather it would have meaningful impact to app performance. In other words, if we got next.JS to run on something better than the default node.JS.

## Getting Started

First, run the development server:

```bash
bun run dev
```
![image](https://github.com/print-VarunSharma/bun-poc-nextjs/assets/62218708/2224aeb9-ce8b-4f15-8bc9-71c9e59122ec)


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
