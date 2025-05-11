"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useRouter } from "next/router";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"


const handleSubmit = (e: React.FormEvent) => {
  const router = useRouter();
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

  //const handleSubmit = (e: React.FormEvent) => {
    //e.preventDefault();
    //setIsLoading(true);

  e.preventDefault();
  //Simulate a login request
  setTimeout(() => {
    router.push("/dashboard");
  }, 1500);
};

export default function LoginPage() {

  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-500 dark:from-neutral-950 dark:to-neutral-900">
      <header className="w-full p-4 flex justify-between items-center z-10">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-800 to-emearald-500"></div>
            <span className="text-xl font-bold text-black dark:text-white">NovaBank</span>
        </Link>
        <ThemeToggle />
      </header> 

      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <Card className="border-none shadow-xl bg-white backdrop-blur-sm">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center text-black ">Welcome again!</CardTitle>
                <CardDescription className="text-center text-black dark:text-black font-semibold" >
                  Enter your credentials to access your account
                </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Label htmlFor="email" className="text-black">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="pl-10 text-black"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password" className="text-black">Password</Label>
                    <Link
                      href="#"
                      className="text-sm text-black-600 hover:text-neutral-950 dark:text-neutral-950 ">
                        Forgot password?
                      </Link>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>

    </div> 
  )
}