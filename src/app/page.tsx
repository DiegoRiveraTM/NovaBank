import { Button } from "../components/ui/button";


export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <div className="mt-10 text-center">
        <h1 className="text-5xl font-bold mb-2">NovaBank</h1>
        <p className="mb-6 text-lg">Your digital banking solution</p>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center">
        <Button className="py-1 mb-4 w-40">Register</Button>
        <Button className="py-1 w-40">Login</Button>
      </div>
    </main>
  );
}
