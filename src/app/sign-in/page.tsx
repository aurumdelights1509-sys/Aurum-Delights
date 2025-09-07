import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto">
        <SignIn 
          appearance={{
            elements: {
              footerAction: 'hidden',
            }
          }}
        />
      </div>
    </div>
  );
}