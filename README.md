# Tenpo Challenge - Financial Management App

This is a modern financial management application developed as a challenge, focusing on transaction tracking, payment processing, and showcasing good development practices.

## Features

- Real-time transaction tracking (simulated)
- Financial history view
- User authentication (via Clerk)
- Interactive 3D model visualization (using Three.js)
- Responsive design
- Improved accessibility
- Basic error handling

## Technologies Used

- Next.js (React Framework)
- TypeScript
- Tailwind CSS
- Clerk (for authentication)
- Three.js (for 3D visualization)
- Lucide React (for icons)

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v18 or later recommended)
- npm, yarn, or pnpm
- Git

## Getting Started

Follow these steps to get the project up and running on your local machine.

### 1. Clone the Repository

```bash
git clone [repository_url]
cd tenpo-challenge-pelle
```

Replace `[repository_url]` with the actual URL of the repository.

### 2. Install Dependencies

Choose your preferred package manager and run the corresponding command in the project root directory:

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Set up Environment Variables

Create a `.env.local` file in the project root directory based on the `.env.example` file (if provided). You will need to add your Clerk environment variables.

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key
```

Replace `your_publishable_key` and `your_secret_key` with your actual Clerk keys.

### 4. Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
tenpo-challenge-pelle/
├── app/             # Next.js App Router directory
│   ├── (auth)/      # Authentication routes
│   ├── about/       # About page
│   ├── api/         # API routes
│   ├── components/  # Reusable React components
│   ├── providers/   # Context and provider components
│   ├── utils/       # Utility functions
│   └── layout.tsx   # Root layout
│   └── page.tsx     # Home page
├── public/          # Static assets (images, models, etc.)
├── styles/          # Global styles (CSS)
├── types/           # TypeScript type definitions
├── .env.example     # Environment variables example
├── .gitignore       # Git ignore file
├── next.config.js   # Next.js configuration
├── package.json     # Project dependencies
├── postcss.config.js # PostCSS configuration
├── README.md        # Project README
├── tailwind.config.ts # Tailwind CSS configuration
└── tsconfig.json    # TypeScript configuration
```

*Note: This structure is a general outline and may vary slightly.*

## Running Tests

(Section to be completed once tests are implemented)

To run the unit and integration tests, use the following command:

```bash
npm test
# or
yarn test
# or
pnpm test
```

## Contributing

(Optional section on how to contribute)

## License

(Optional section on project license)
