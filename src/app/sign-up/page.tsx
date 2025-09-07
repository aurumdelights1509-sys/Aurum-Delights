import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto">
        <SignUp 
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