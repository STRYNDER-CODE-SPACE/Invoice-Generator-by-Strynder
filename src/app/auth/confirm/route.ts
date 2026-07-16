import { type EmailOtpType } from "@supabase/supabase-js";
import { type NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token_hash = searchParams.get("token_hash");
  const type = searchParams.get("type") as EmailOtpType | null;

  if (token_hash && type) {
    const supabase = await createClient();
    const { error } = await supabase.auth.verifyOtp({ token_hash, type });

    if (!error) {
      // Route based on token type: recovery → set new password, everything else → dashboard
      const destination =
        type === "recovery" ? "/reset-password" : "/dashboard";
      return NextResponse.redirect(new URL(destination, request.url));
    }
  }

  // Invalid or missing params — redirect to login with a generic error
  return NextResponse.redirect(
    new URL("/login?error=verification_failed", request.url)
  );
}
