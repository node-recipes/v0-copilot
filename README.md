# Use copilot like V0

## Prerequisites
Ensure github copilot is installed and enabled in your editor. Make sure it supports [.github/copilot-instructions.md](https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file) file as our prompt is based on this.

## Install

```bash
pnpm i
```

## Usage
1. Open your copilot chat.
2. Attach `src/Component.tsx` and `src/Component.stories.tsx` to your chat. Otherwise copilot cannot modify the files.
3. Input your own prompt. Add `#context` in your prompt as this is the approach to force your editor to access all the workspace files. If you don't add `#context`, copilot may not work as expected. Seems `#context` is needed every time you input a message.
4. Wait for copilot to generate results and chat iteratively to get the desired code.
5. Save the files, or storybook will not update the changes.
6. Check storybook.

### Tips: 

## Synchronize with latest shadcn docs and components
```bash
pnpm pull
pnpm shadcn add -ao
```