# Use copilot like V0

## Prerequisites
Ensure github copilot is installed and enabled in your editor. Make sure it supports [.github/copilot-instructions.md](https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file) file as our prompt is based on this.

## Install

```bash
pnpm i
```

## Usage
1. Open your copilot chat.
2. Input your own prompt. Add `#context` in your prompt as this is the approach to force your editor to access all the workspace files. If you don't add `#context`, copilot may not work as expected.
3. Wait for copilot to generate results and chat iteratively to get the desired code.

## Synchronize with latest shadcn docs and components
```bash
pnpm pull
pnpm shadcn add -ao
```