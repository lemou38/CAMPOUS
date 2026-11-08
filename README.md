<p align="center">
  <a href="https://github.com/lemou38/CAMPOUS">
    <img src="client/public/assets/campus-mascot-readme.png" height="320">
  </a>
  <h1 align="center">CAMPOUS</h1>
  <p align="center"><strong>Your AI Agent — All-in-one AI conversations platform</strong></p>
</p>

<p align="center">
  <strong>English</strong> ·
  <a href="README.zh.md">中文</a>
</p>

<p align="center">
  <a href="https://github.com/lemou38/CAMPOUS">
    <img
      src="https://img.shields.io/badge/GITHUB-181717.svg?style=for-the-badge&logo=github&logoColor=white&labelColor=000000&logoWidth=20">
  </a>
  <a href="https://github.com/lemou38/CAMPOUS/releases">
    <img
      src="https://img.shields.io/badge/RELEASES-blue.svg?style=for-the-badge&logo=tag&logoColor=white&labelColor=000000&logoWidth=20">
  </a>
  <a href="https://docs.librechat.ai">
    <img
      src="https://img.shields.io/badge/DOCS-blue.svg?style=for-the-badge&logo=read-the-docs&logoColor=white&labelColor=000000&logoWidth=20">
  </a>
  <a href="LICENSE">
    <img
      src="https://img.shields.io/badge/LICENSE-MIT-green.svg?style=for-the-badge&logo=open-source-initiative&logoColor=white&labelColor=000000&logoWidth=20">
  </a>
</p>

---

## What is CAMPOUS?

CAMPOUS is an open-source, self-hosted AI Agent platform built on [LibreChat](https://github.com/LibreChat-AI/LibreChat) (v0.8.8).  
It unifies multiple AI model providers into a single, privacy-focused interface with a **custom CAMPOUS branding** and an integrated **AI-GRID** endpoint.

> **CAMPOUS = Your AI Agent.** Bring your own API key, chat with any model, build agents, run code, search the web — all in one place.

---

## Quick Start

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/) (v2+)
- An AI provider API key (OpenAI, Anthropic, Google, or [AI-GRID](https://ai-grid.com))

### 1. Clone the repository

```bash
git clone https://github.com/lemou38/CAMPOUS.git
cd CAMPOUS
```

### 2. Configure environment variables

```bash
cp .env.example .env
```

Generate your secret keys and fill in the `.env` file:

```bash
# Generate secure random secrets
openssl rand -hex 32  # -> ADMIN_PANEL_SESSION_SECRET
openssl rand -hex 32  # -> JWT_SECRET
openssl rand -hex 32  # -> JWT_REFRESH_SECRET
openssl rand -hex 32  # -> CREDS_KEY
openssl rand -hex 16  # -> CREDS_IV
```

### 3. Configure AI endpoints (optional)

```bash
cp librechat.example.yaml librechat.yaml
```

Edit `librechat.yaml` to add your AI provider endpoints (OpenAI, Anthropic, Google, AI-GRID, custom endpoints, etc.).

### 4. Start the stack

```bash
docker compose up -d
```

CAMPOUS will be available at **http://localhost:3080**.

---

## Features

CAMPOUS inherits all LibreChat features and adds custom branding, an AI-GRID endpoint integration, and a tailored user experience.

### Core Features

- **Multi-Model AI Chat** — OpenAI, Anthropic (Claude), Google (Gemini), Azure OpenAI, AWS Bedrock, Vertex AI, and any OpenAI-compatible API via Custom Endpoints
- **AI-GRID Integration** — Pre-configured endpoint for AI-GRID API access
- **AI Agents** — Build no-code custom assistants with tools, file search, code execution, and MCP support
- **Code Interpreter** — Sandboxed execution in Python, Node.js, Go, C/C++, Java, PHP, Rust, and Fortran
- **Web Search** — Search the internet and enrich your AI context with real-time information
- **Code Artifacts** — Generate React, HTML, and Mermaid content directly in chat
- **Image Generation** — Text-to-image with GPT-Image-1, Stable Diffusion, Flux, or MCP servers
- **Multimodal & File Interactions** — Upload images and files, chat with documents
- **Multilingual UI** — 30+ languages including English, French, Chinese, Arabic, Spanish, and more
- **Reasoning UI** — Dynamic Chain-of-Thought display for models like DeepSeek-R1
- **Customizable Interface** — Light, dark, system, and high-contrast themes with CAMPOUS branding
- **Resumable Streams** — Never lose a response; auto-reconnect on connection drops
- **Speech & Audio** — Speech-to-Text and Text-to-Speech support
- **Import & Export** — Import from ChatGPT, Chatbot UI; export as markdown, text, JSON, or screenshots
- **Multi-User & Secure Access** — OAuth2, LDAP, Email login; built-in moderation and token spend tools
- **Admin Panel** — Browser-based UI to manage users, groups, roles, and configuration
- **Observability** — OpenTelemetry and Langfuse integration for traces and insights

### Agent Features

- **Agent Marketplace** — Discover and deploy community-built agents
- **Skills** — Reusable `SKILL.md` instruction bundles for agent workflows
- **Subagents** — Delegate focused work to isolated child agent runs
- **Agent Management API** — Automate Agent, file, and Skill management with OIDC clients
- **MCP Support** — Model Context Protocol for tools and integrations
- **Attached Workspaces** (experimental) — Agents can inspect, search, edit files, and run Bash

### Presets & Context Management

- Create, save, and share custom presets
- Switch between AI endpoints and presets mid-chat
- Edit, resubmit, and continue messages with conversation branching
- Fork messages and conversations for advanced context control
- Manual context compaction on demand

---

## Configuration

CAMPOUS is configured through three main files:

| File | Purpose | Required |
|------|---------|----------|
| `.env` | Environment variables (secrets, database, endpoints) | Yes |
| `librechat.yaml` | AI endpoint definitions and model configuration | Recommended |
| `docker-compose.override.yml` | Docker overrides for local development | Optional |

Templates are provided:
- `.env.example` — Complete documented template with all variables
- `librechat.example.yaml` — Example AI endpoint configuration
- `docker-compose.override.yml.example` — Example Docker override

For detailed configuration options, see the [LibreChat documentation](https://docs.librechat.ai/).

---

## Docker Deployment

### Standard deployment

```bash
docker compose up -d
```

### With override (local development)

```bash
cp docker-compose.override.yml.example docker-compose.override.yml
# Edit as needed, then:
docker compose up -d
```

### Check status

```bash
docker compose ps
docker compose logs -f api
```

### Stop the stack

```bash
docker compose down
```

---

## CAMPOUS Customization

CAMPOUS adds the following customizations over LibreChat:

- **Custom branding** — CAMPOUS logo, colors, and interface styling
- **Custom welcome page** — CAMPOUS-themed landing page
- **Custom footer** — CAMPOUS attribution
- **AI-GRID endpoint** — Pre-configured in `librechat.example.yaml` as a custom endpoint
- **Security hardening** — Hardened `docker-compose.yml` with secure defaults
- **Comprehensive `.gitignore`** — All secrets, configs, and personal data excluded from version control

---

## Security

CAMPOUS is designed with security in mind:

- **No secrets in Git** — `.env`, `librechat.yaml`, and `docker-compose.override.yml` are gitignored
- **User-provided API keys** — Each user enters their own API key via the interface (`user_provided` mode)
- **Secure defaults** — `POSTGRES_PASSWORD`, `JWT_SECRET`, and `CREDS_KEY` must be set by the deployer
- **No personal data exposed** — MongoDB data, logs, and user conversations are gitignored

### Before deploying to production:

1. Generate all secret keys with `openssl rand -hex 32`
2. Set a strong `POSTGRES_PASSWORD` in `.env`
3. Enable HTTPS via a reverse proxy (nginx, Caddy, Traefik)
4. Review the [LibreChat deployment guide](https://docs.librechat.ai/installation/docker_compose)

---

## Upstream Project

CAMPOUS is based on [LibreChat](https://github.com/LibreChat-AI/LibreChat) v0.8.8 by [Danny Avila](https://github.com/danny-avila).

All credit for the core platform goes to the LibreChat team and contributors. CAMPOUS adds custom branding, AI-GRID integration, and deployment-specific configuration.

### What's New in v0.8.8 (upstream)

- **Agent Management API (beta)** — Create, discover, update, and delete Agents with OIDC authentication
- **Attached workspaces (experimental)** — Agents inspect, read, search, edit files, and run Bash
- **Background tool controls** — Cancel ordinary background tools while keeping Subagents independent
- **Code approval controls** — Ask, Allow, or Deny for file writes and command execution
- **Manual context compaction** — Summarize before the context window fills
- **Context Usage inspector** — Dialogue, tool traffic, Agent instructions, cache, cost, and runway
- **Unified attachments** — Upload once, route to model or extracted text
- **New models** — GPT-6 Astra and GPT-6.1 Sol with Responses API routing
- **Enhanced Agent and chat UI** — Unified tool activity, reasoning, search, Pinned section, high-contrast themes
- **Observability** — Trace Viewer, OpenTelemetry, Langfuse integration, Insights scoping
- **Reliability and security** — Agent continuation, checkpoint recovery, Redis liveness, tenant isolation

Read the [full v0.8.8 changelog](https://www.librechat.ai/changelog/v0.8.8).

---

## Resources

- **CAMPOUS Repository:** [github.com/lemou38/CAMPOUS](https://github.com/lemou38/CAMPOUS)
- **LibreChat Documentation:** [docs.librechat.ai](https://docs.librechat.ai)
- **LibreChat Changelog:** [librechat.ai/changelog](https://www.librechat.ai/changelog)
- **LibreChat Releases:** [github.com/LibreChat-AI/LibreChat/releases](https://github.com/LibreChat-AI/LibreChat/releases)
- **RAG API:** [github.com/LibreChat-AI/rag-api](https://github.com/LibreChat-AI/rag-api)

---

## Changelog

Keep up with CAMPOUS updates by visiting the releases page:
- [CAMPOUS Releases](https://github.com/lemou38/CAMPOUS/releases)
- [LibreChat Changelog](https://www.librechat.ai/changelog)

> **Please consult the [LibreChat changelog](https://www.librechat.ai/changelog) for breaking changes before updating from upstream.**

---

## Contributions

Contributions, suggestions, bug reports and fixes are welcome!

For new features, components, or extensions, please open an issue and discuss before sending a PR.

If you'd like to help translate CAMPOUS into your language, please check out the [LibreChat Translation Guide](https://www.librechat.ai/docs/translation).

---

## Contributors

CAMPOUS exists thanks to the LibreChat project and all its contributors:

<a href="https://github.com/LibreChat-AI/LibreChat/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=LibreChat-AI/LibreChat" />
</a>

---

## Special Thanks

- **[LibreChat](https://github.com/LibreChat-AI/LibreChat)** — The open-source AI chat platform CAMPOUS is built on
- **[Locize](https://locize.com)** — Translation management tools supporting multiple languages
- **All LibreChat contributors** — For building an incredible open-source AI platform

### CAMPOUS Acknowledgements

- **STUDENT CAMPUCE** — Merci pour les avantages offerts aux étudiants, qui rendent ce projet accessible à tous
- **[AI-GRID](https://ai-grid.com)** — Merci à notre partenaire AI-GRID pour les clés API gratuites fournies chaque mois, permettant à tous les étudiants d'accéder aux modèles IA

<p align="center">
  <a href="https://locize.com" target="_blank" rel="noopener noreferrer">
    <img src="https://github.com/user-attachments/assets/d6b70894-6064-475e-bb65-92a9e23e0077" alt="Locize Logo" height="50">
  </a>
</p>

---

## License

CAMPOUS is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

This project is based on LibreChat, which is also MIT licensed.

---

<p align="center">
  <strong>CAMPOUS — Your AI Agent</strong><br>
  Built with LibreChat · Maintained by <a href="https://github.com/lemou38">@lemou38</a>
</p>
