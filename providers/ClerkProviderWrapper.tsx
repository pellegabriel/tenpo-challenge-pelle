'use client'

import { ClerkProvider } from "@clerk/clerk-react";
import { clerkTheme } from "@/lib/clerk-theme";

function ClerkProviderWrapper ({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider 
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}
      appearance={clerkTheme}
    >
      {children}
    </ClerkProvider>
  )
}

export default ClerkProviderWrapper 