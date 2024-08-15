import { ClerkProvider,  SignedIn, SignedOut, SignIn, UserButton } from '@clerk/nextjs';

export default function SignUp(){
    return (
        <ClerkProvider>
            <SignedIn>
                <UserButton />
            </SignedIn>
            <SignedOut>
              <div className="flex items-center justify-center w-full h-screen">
                <SignIn routing='hash' />
              </div>
            </SignedOut>
        </ClerkProvider>
    )
}