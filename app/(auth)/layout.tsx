import { buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/themeToggle";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Children } from "react";
import { ReactNode } from "react";
import Image from "next/image";
import Logo from "@/public/logo.png";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="gap-3 relative flex min-h-svh flex-col items-center justify-center">
      <Link
        href="/"
        className={buttonVariants({
          variant: "outline",
          className: "absolute top-4 left-4",
        })}
      >
        <ArrowLeft className="size-4" />
        Back
      </Link>

      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-medium self-center"
        >
          <Image src={Logo} alt="logo" width={90} height={90} />
          LearnWithRoyyan
        </Link>

        {children}

        <div className="text-balance text-center text-xs text-muted-foreground ">
          By clicking continue, you agree to our{" "}
          <span className="hover:text-primary hover:underline">
            Terms of Service
          </span>{" "}
          and{" "}
          <span className="hover:text-primary hover:underline">
            Privacy Policy
          </span>
        </div>
      </div>

      <ThemeToggle />
    </div>
  );
}
