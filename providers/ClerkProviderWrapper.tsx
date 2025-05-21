'use client'

import { ClerkProvider } from "@clerk/clerk-react";

function ClerkProviderWrapper ({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}>
        {children}
    </ClerkProvider>
  )
}

export default ClerkProviderWrapper 