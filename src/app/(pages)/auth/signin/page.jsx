import SigninForm from '@/components/(pages)/SigninForm/SigninForm';
import { EnvelopeIcon, LockClosedIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const Signin = () => {
     return (
          <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
               <div className="card w-full max-w-md bg-base-100 shadow-xl">
                    <div className="card-body">
                         <h2 className="card-title text-2xl font-semibold text-base-content justify-center mb-6">
                              Sign In
                         </h2>

                         <SigninForm />

                         {/* Sign Up Link */}
                         <p className="text-center text-sm text-base-content/60 mt-4">
                              Don't have an account?{' '}
                              <Link href="/auth/signup" className="text-warning hover:underline">
                                   Sign up
                              </Link>
                         </p>
                    </div>
               </div>
          </div>
     );
}

export default Signin;
