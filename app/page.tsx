"use client";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/themeToggle";
import { auth } from "@/lib/auth";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function Home() {
  const router = useRouter();
  // Use authClient to get the session
  const { data: session } = authClient.useSession();

  async function signOut() {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/"); // redirect to login page
          toast.success("Successfully signed out!");
        },
      },
    });
  }
  return (
    <div className="p-24">
      <h1 className="text-2xl font-bold text-red-600">LearnWithRoyyan</h1>
      <ThemeToggle />
      {session ? (
        <div>
          <p>{session.user.name} </p>
          <Button onClick={signOut}>LogOut</Button>
        </div>
      ) : (
        <Button>LogIn</Button>
      )}
    </div>
  );
}
