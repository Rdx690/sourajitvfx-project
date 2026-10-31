# SOURAJITVFX — CREATOR TOOLKIT

A branded collection of 22 standalone browser-based creative tools.

## Run locally
Open `index.html` in a browser, or serve this folder with any static web server.

## Deploy to Vercel
Import this GitHub repository into Vercel. Framework preset: **Other**. Build command: leave blank. Output directory: `.`. No server runtime is required for the static pages.

## Branding
- Main identity: **SOURAJITVFX**
- Visual direction: midnight dark UI, violet-to-cyan gradients, glass-inspired cards, responsive layout.
- `index.html` is the searchable creator-tool dashboard.
- Every individual tool page includes a compact link back to the branded dashboard.

## Important security notes
- Never commit API keys or private tokens. `background-remover.html` uses the placeholder `YOUR_REMOVE_BG_API_KEY`; configure your own key via a secure backend rather than exposing a paid API key in client-side HTML.
- SIM Database and Caller Lookup pages are intentionally disabled to avoid exposing personal phone/subscriber information.
- Web Cloner is intentionally disabled until remote fetching is protected by a strict server-side allowlist (SSRF protection).
- Code Decoder and HTML Editor process code. Only inspect code you trust; never execute unknown scripts.
- Third-party APIs may stop working, impose limits, or require credentials. Follow each provider's terms and applicable laws.

## Structure
- `index.html` — branded searchable tool directory
- `*.html` — individual tools

All tools are static HTML. Some external API integrations need separate setup and security review.
