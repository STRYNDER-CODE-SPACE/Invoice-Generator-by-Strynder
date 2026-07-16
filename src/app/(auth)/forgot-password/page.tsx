import Image from "next/image";
import Link from "next/link";
import { forgotPasswordAction } from "@/actions/auth";
import { AuthForm } from "@/components/AuthForm";

export default function ForgotPasswordPage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Link href="/" className="inline-flex items-center gap-2">
            <Image
              src="/Strynder logo_favicon_100231.png"
              alt="Strynder"
              width={40}
              height={40}
              priority
            />
            <span className="text-2xl font-bold text-purple-800">Strynder</span>
          </Link>
          <h1 className="mt-4 text-xl font-semibold text-gray-900">
            Reset password
          </h1>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <AuthForm
            action={forgotPasswordAction}
            submitLabel="Send Reset Link"
            fields="forgot"
          />
        </div>
        <p className="mt-4 text-center text-sm text-gray-600">
          <Link href="/login" className="text-purple-700 hover:underline">
            Back to sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
