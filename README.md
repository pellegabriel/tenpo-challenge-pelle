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

## Technical Challenge Fulfillment Notes

This section outlines how the application addresses specific requirements of the technical challenge.

### Handling of Large Lists (~2000 elements)

The application fetches a list of 2000 products from a public API (`https://dummyjson.com/products?limit=2000`) and transforms them into transactions. These transactions are stored in the component's state and rendered within a scrollable container.

For a list size of 2000 items, a standard scrollable list is generally acceptable in modern browsers without severe performance degradation on typical devices. The data fetching is done once on component mount.

However, for significantly larger datasets (tens of thousands or more), or to guarantee optimal performance on lower-end devices, alternative strategies would be necessary. These include:

-   **List Virtualization:** Rendering only the items currently visible in the viewport (e.g., using libraries like `react-window` or `react-virtualized`). This dramatically reduces the number of DOM nodes.
-   **Pagination:** Fetching and displaying data in smaller chunks or pages, using API parameters like `limit` and `skip`.
-   **Infinite Scrolling:** Automatically loading more data as the user scrolls towards the end of the list, often implemented on top of pagination.

For this challenge, the current approach provides a functional and reasonably performant solution for the specified scale.

### Data Fetching and API Interaction

Data fetching is primarily handled using the browser's native `fetch` API. While libraries like Axios could be used, `fetch` provides sufficient functionality for the requirements of this project, particularly when interacting with a public API that does not require complex request configurations or interceptors.

Regarding the requirement to potentially send a token: For the public API (`dummyjson.com`) used for fetching products, authentication is not required, so no token is sent. In a scenario interacting with a protected backend API, the application, utilizing Clerk for authentication, would obtain the user's session token (e.g., using Clerk's `getToken` hook) and include it in the request headers (e.g., `Authorization: 'Bearer YOUR_TOKEN'`) to authenticate the user.

### Theoretical Backend Call Improvements

If this application were to interact with a custom backend, several theoretical improvements could be proposed for API calls to enhance performance and efficiency:

-   **Optimize Data Payloads:** Ensure backend endpoints return only the data strictly necessary for the client, avoiding over-fetching.
-   **Batching:** Allow the client to request multiple pieces of data or perform multiple small operations in a single API call to reduce HTTP overhead.
-   **Caching:** Implement caching strategies at various levels (client-side, server-side, CDN) to serve frequently requested data faster.
-   **GraphQL:** Consider using GraphQL as an API layer to give clients more control over the data they fetch, minimizing under- and over-fetching.
-   **Real-time Updates:** For features requiring real-time data (like transaction notifications), consider using WebSockets or Server-Sent Events instead of frequent polling.
-   **Backend Optimization:** Ensure backend logic and database queries are optimized for performance.

## Contributing

(Optional section on how to contribute)

## License

(Optional section on project license)
