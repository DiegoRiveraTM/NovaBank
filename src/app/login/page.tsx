import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-sm space-y-6">
        <h2 className="text-2xl font-bold text-center">Login to NovaBank</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium">Password</label>
            <Input id="password" type="password" placeholder="Enter your password" />
          </div>
          <Button className="w-full mt-2">Login</Button>
        </form>
      </div>
    </div>
  );
}
