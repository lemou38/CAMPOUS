# CAMPOUS — Your AI Campus

<p align="center">
  <img src="docs/assets/campus-mascot-readme.png" alt="CAMPOUS Robot Mascot" width="280">
</p>

<p align="center">
  <strong>Learn Smarter. Explore Further.</strong>
</p>

<p align="center">
  Your AI-powered campus for learning, creativity, and student success.
</p>

<p align="center">
  <strong>AI-GRID Integration • Inspired by STUDENT CAMPUCE</strong>
</p>

---

## About CAMPOUS

**CAMPOUS** is an AI-powered learning companion designed for students across all academic disciplines.

From engineering and medicine to business, law, languages, and humanities, CAMPOUS helps students explore artificial intelligence through a unified, accessible interface.

Our mission is to make AI useful, accessible, and empowering for every student.

## Powered by AI-GRID

CAMPOUS integrates **AI-GRID**, enabling access to configured AI models through a unified chat interface.

Students can explore different models, ask questions, brainstorm ideas, and support their academic work.

Model availability and supported capabilities depend on the AI-GRID service and the configuration of the deployment.

## Inspired by STUDENT CAMPUCE

CAMPOUS draws inspiration from the student-focused vision of **STUDENT CAMPUCE**, emphasizing access to technology, educational resources, and opportunities.

CAMPOUS is an independently developed project unless an official partnership is separately announced.

## Features

- Multi-model AI conversations.
- AI-GRID API integration.
- Personal API credentials where supported.
- Student-focused learning and productivity workflows.
- Customizable interface.
- Self-hosted deployment using Docker.

Some AI models may not support file uploads, image understanding, or other advanced capabilities.

---

## Getting Started

### Step 1 — Prerequisites

Before installing CAMPOUS, make sure you have:

- Git
- Docker Desktop or Docker Engine
- Docker Compose
- An internet connection
- API credentials for the configured AI provider

**Windows users:** Enable WSL 2 and make sure Docker Desktop is running.

### Step 2 — Clone CAMPOUS

Open Windows CMD and run:

```cmd
git clone https://github.com/lemou38/CAMPOUS.git
cd CAMPOUS
```

### Step 3 — Configure Environment Variables

Create your local environment file:

**Windows CMD**

```cmd
copy .env.example .env
```

**Linux / macOS**

```bash
cp .env.example .env
```

Open `.env` and configure the required settings.

For example:

```dotenv
POSTGRES_PASSWORD=REPLACE_WITH_YOUR_OWN_STRONG_PASSWORD
```

Generate a unique, strong password before starting the application.

Never publish your `.env` file or commit API keys to GitHub.

### Step 4 — Configure AI-GRID

CAMPOUS supports integration with AI-GRID through its provider configuration.

If the deployment includes a configured AI-GRID endpoint, verify that:

- The AI-GRID API base URL is correct.
- The configured model identifiers are available.
- The authentication method matches the provider requirements.
- Personal API credentials are handled securely.

For deployments using LibreChat custom endpoints, these settings may be defined in `librechat.yaml`.

**Important:** Do not assume that every model supports file attachments, images, or tool calling.

### Step 5 — Start CAMPOUS

Make sure Docker Desktop is running.

Then execute:

```cmd
docker compose config --quiet
```

If the configuration is valid, start the services:

```cmd
docker compose up -d
```

The initial startup may take several minutes while Docker downloads the required images.

### Step 6 — Open CAMPOUS

Open your browser and visit:

**http://localhost:3080**

For deployments with the optional administration panel configured:

**http://localhost:3000**

These addresses assume the default local ports.

### Step 7 — Create an Account

If registration is enabled in your deployment:

1. Open the CAMPOUS interface.
2. Select the registration option.
3. Create your account.
4. Sign in to access the AI chat interface.

Account creation and registration policies depend on the deployment configuration.

### Step 8 — Configure Your AI Access

If AI-GRID is configured for user-provided credentials:

1. Open the available AI provider settings.
2. Select the configured AI-GRID endpoint.
3. Enter your personal API key through the supported credential interface.
4. Select an available model.
5. Start your conversation.

The exact interface and credential options depend on the installed version and endpoint configuration.

### Step 9 — Start Learning

Use CAMPOUS to:

- Explain difficult concepts.
- Summarize text.
- Brainstorm academic projects.
- Explore programming and technology.
- Practice writing.
- Compare AI-generated explanations.
- Discover new ways to study.

Always verify important academic, scientific, and professional information.

---

## Useful Docker Commands

**Check running services**

```cmd
docker compose ps
```

**View application logs**

```cmd
docker compose logs api --tail=50
```

**Stop the application**

```cmd
docker compose down
```

**Restart the application**

```cmd
docker compose restart
```

Avoid deleting Docker volumes unless you have backed up your data and understand the consequences.

---

## Security

CAMPOUS is designed to be configurable and self-hosted. Before deploying it publicly:

- Protect environment variables and API credentials.
- Use strong, unique database passwords.
- Enable HTTPS.
- Restrict administrative access.
- Review database authentication and network isolation.
- Keep dependencies and Docker images updated.
- Review the security of user-provided API key handling.

The local development configuration is not necessarily suitable for production.

---

## Technology Stack

- React
- TypeScript
- Node.js
- Docker Compose
- MongoDB
- AI-GRID integration
- LibreChat open-source foundation

---

## Open-Source Acknowledgment

CAMPOUS builds upon the open-source **LibreChat** project.

We acknowledge the original developers and contributors for providing the underlying application foundation.

Original project: https://github.com/danny-avila/LibreChat

All applicable upstream license requirements, copyright notices, and attribution obligations must be respected.

---

## Our Vision

**One AI campus. Every student. Endless possibilities.**

CAMPOUS aims to make artificial intelligence more accessible to students, helping them learn, create, explore, and develop new skills.

<p align="center">
  <strong>CAMPOUS — Learn Smarter. Explore Further.</strong>
</p>