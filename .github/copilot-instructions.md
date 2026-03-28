# Copilot Workspace Instructions - Soc Ops

## Mandatory Dev Checklist (run before/after changes)
- Install: `npm install`
- Lint: `npm run lint`
- Test: `npm test`
- Build: `npm run build`
- Dev server: `npm run dev` (Vite default: http://localhost:5173)

If you change UI or logic, keep all of the above passing.

## Project Overview
- React 19 + TypeScript + Vite.
- Styling: Tailwind CSS v4 via `@tailwindcss/vite` (no `tailwind.config.js`).
- Tests: Vitest (jsdom) with setup at `src/test/setup.ts`.

## Repo Map (where to look)
- App entry: `src/main.tsx` -> `src/App.tsx`
- Screens: `src/components/StartScreen.tsx`, `src/components/GameScreen.tsx`
- Game UI: `src/components/BingoBoard.tsx`, `src/components/BingoSquare.tsx`, `src/components/BingoModal.tsx`
- Game state/logic hook: `src/hooks/useBingoGame.ts`
- Questions/content: `src/data/questions.ts`
- Pure logic utilities: `src/utils/bingoLogic.ts` (+ tests in `src/utils/bingoLogic.test.ts`)
- Global styles / Tailwind import: `src/index.css`

## UI Theme
- Current theme: Cyberpunk Neon (full neon), Lime + Purple.
- Theme tokens live in `src/index.css` under `@theme` and are referenced via utilities like `bg-accent`, `text-bingo`, `border-marked-border`.

## Tailwind v4 Rules
- Prefer CSS-first tokens via `@theme` in CSS (see `src/index.css`).
- Use modern v4 utilities (example: `bg-black/50` instead of legacy `bg-opacity-*`).
- Do not add a `tailwind.config.*` unless the repo already uses one.

## Build and Deploy Notes
- `npm run build` runs `tsc -b` then `vite build`.
- `vite.config.ts` sets `base` to `/${VITE_REPO_NAME}/game/` when `VITE_REPO_NAME` is set (GitHub Pages path).
  Keep asset paths compatible with that base.

## Change Guidelines
- Keep changes minimal and consistent with existing patterns.
- Put reusable, testable logic in `src/utils/` and update/add Vitest tests when behavior changes.
- Prefer small, typed React components with explicit props.
