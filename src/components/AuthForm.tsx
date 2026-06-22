"use client";

import { useActionState } from "react";
import type { ActionResult } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface AuthFormProps {
  action: (prev: ActionResult, formData: FormData) => Promise<ActionResult>;
  submitLabel: string;
  fields: "login" | "register" | "forgot" | "reset";
}

const initialState: ActionResult = {};

export function AuthForm({ action, submitLabel, fields }: AuthFormProps) {
  const [state, formAction, pending] = useActionState(action, initialState);

  return (
    <form action={formAction} className="space-y-4">
      {state.error && (
        <div className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
          {state.error}
        </div>
      )}
      {state.success && (
        <div className="rounded-lg bg-purple-50 px-4 py-3 text-sm text-purple-700">
          {state.success}
        </div>
      )}

      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
        />
      </div>

      {fields !== "forgot" && (
        <>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              required
              minLength={8}
              autoComplete={
                fields === "login" ? "current-password" : "new-password"
              }
            />
          </div>

          {(fields === "register" || fields === "reset") && (
            <div className="grid gap-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                minLength={8}
                autoComplete="new-password"
              />
            </div>
          )}
        </>
      )}

      {fields === "register" && (
        <div className="flex items-start gap-3">
          <input
            id="agreeToTerms"
            name="agreeToTerms"
            type="checkbox"
            required
            className="mt-0.5 size-4 shrink-0 cursor-pointer rounded border-input accent-primary"
          />
          <label
            htmlFor="agreeToTerms"
            className="text-xs leading-relaxed text-muted-foreground cursor-pointer select-none"
          >
            I agree to the{" "}
            <a
              href="/api/privacy-pdf"
              onClick={(e) => {
                e.preventDefault();
                const link = document.createElement("a");
                link.href = "/api/privacy-pdf";
                link.download = "Strynder-Privacy-Policy.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="font-medium text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
            >
              Privacy Policy
            </a>
            . Your data is never sold or shared. We do not store payment
            information of any kind.
          </label>
        </div>
      )}

      <Button type="submit" disabled={pending} className="w-full">
        {pending ? "Please wait..." : submitLabel}
      </Button>
    </form>
  );
}
