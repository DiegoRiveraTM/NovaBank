import { Button } from "./components/ui/button";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-5xl font-bold">NovaBank</h1>
      <p className="text-lg">Your digital banking solution</p>
      <Button>Registrarse</Button>
      <Button>Login</Button>
    </main>
  );
}
