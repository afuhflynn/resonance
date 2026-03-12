# Resonance

AI-Powered Text-to-Speech Platform

## Overview

Resonance is a modern, full-featured text-to-speech web application built with Next.js 16. It enables users to generate high-quality AI audio from text input with customizable voice parameters, multiple voice categories, and quick-start templates for various use cases.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **UI**: React 19, shadcn/ui, Tailwind CSS
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: Clerk
- **AI**: AI SDK (OpenAI, Google)
- **Storage**: Cloudflare R2 for audio files
- **Security**: Arcjet
- **Background Jobs**: Inngest

## Features

- **Dashboard** - Quick actions for different TTS use cases (stories, ads, movies, games, podcasts, meditation)
- **Text-to-Speech Generation** - Convert text to speech with customizable parameters
- **Voice Selection** - Multiple voice categories (audiobook, narrative, conversational, character, meditation, podcast, advertising, voiceover, corporate)
- **Customizable Parameters** - Temperature, topP, topK, repetition penalty
- **Generation History** - View and manage past generations
- **Organization Support** - Multi-tenant architecture with Clerk authentication

## Prerequisites

- Node.js 18+
- Docker and Docker Compose
- PostgreSQL (or use the included docker-compose.yml)
- pnpm (recommended) or npm/yarn

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/afuhflynn/resonance.git
cd resonance
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/resonance"
# Add other environment variables as needed
```

### 4. Set up the database

```bash
# Start PostgreSQL container
pnpm db:up

# Push schema to database
pnpm db:push

# (Optional) Seed the database
pnpm db:seed
```

### 5. Run the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | PostgreSQL connection string | Yes |

Additional environment variables may be required for:
- Clerk authentication
- AI provider API keys (OpenAI, Google)
- Cloudflare R2 storage
- Arcjet security

## Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run code linting (Biome) |
| `pnpm format` | Format code |
| `pnpm db:up` | Start PostgreSQL container |
| `pnpm db:down` | Stop PostgreSQL container |
| `pnpm db:push` | Push Prisma schema to database |
| `pnpm db:migrate` | Run database migrations |
| `pnpm db:seed` | Seed database |
| `pnpm db:studio` | Open Prisma Studio |
| `pnpm db:generate` | Generate Prisma client |
| `pnpm test` | Run tests |
| `pnpm test:ui` | Run tests with UI |

## Project Structure

```
resonance/
├── app/                    # Next.js App Router pages
│   ├── (auth)/            # Authentication pages
│   ├── (dashboard)/       # Protected dashboard pages
│   └── text-to-speech/   # TTS generation page
├── components/
│   ├── ai-elements/       # AI-related UI components
│   ├── dashboard/         # Dashboard components
│   ├── text-to-speech/   # TTS components
│   └── ui/               # shadcn/ui components
├── lib/                   # Utility functions and configurations
├── prisma/                # Database schema and seeds
└── public/                # Static assets
```

## Screenshots

<!-- Add screenshots here -->

## Deployment

### Vercel (Recommended)

1. Push your code to a GitHub repository
2. Go to [Vercel](https://vercel.com/new)
3. Import your repository
4. Configure environment variables in Vercel dashboard
5. Deploy

### Docker

Build and run with Docker:

```bash
docker build -t resonance .
docker run -p 3000:3000 resonance
```

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting PRs.

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please make sure to update tests as appropriate.

## License

MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with Next.js and shadcn/ui
