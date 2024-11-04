import { Toaster } from "@/components/atoms/toaster";

export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative flex min-h-svh flex-col bg-primary p-6">
      {children}
      <Toaster />
    </main>
  );
}
