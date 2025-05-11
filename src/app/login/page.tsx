"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Eye, EyeOff, Mail } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Lock } from 'lucide-react'
import { Checkbox } from "@/components/ui/checkbox";


export default function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [, setError] = useState("");

  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("")
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, rememberMe }),
      });
      if (!response.ok) {
        throw new Error("Invalid credentials");
      }
      router.push("/dashboard");
    } catch (error: unknown){
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An error occurred");
      }
      } finally {
        setIsLoading(false);
      }
    };

  

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
                    className="pl-10 pr-10 text-black dark:text-black border-[1px] !border-black focus:!border-black focus:!ring-0"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password" className="text-black">Password</Label>
                    <Link
                      href="/forgot-password"
                      className="text-sm text-black-600 hover:text-neutral-950 dark:text-neutral-950 font-semibold">
                        Forgot password?
                      </Link>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"/>
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      className="pl-10 pr-10 text-black dark:text-black border-[1px] !border-black focus:!border-black focus:!ring-0"
                      value={password}
                      onChange={(e) => setPassword (e.target.value)}
                      autoComplete="new-password"
                      name="password"
                      placeholder="Enter your password"
                      required
                      />
                      <button
                        type="button"
                        onClick={()=> setShowPassword(!showPassword)}
                        className="absolute right-3 top-2.5 text-gray-600 dark:hover:text-gray-300"
                      >
                        {showPassword ? <Eye className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}
                      </button>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    checked={rememberMe}
                    onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                    className=" data-[state=checked]:bg-gray-300 
                                data-[state=checked]:border-gray-300 
                                dark:data-[state=checked]:bg-black 
                                dark:data-[state=checked]:border-black 
                                dark:data-[state=checked]:text-white
                                dark:data-[state=unchecked]:border-gray-300"
                                  
                  />
                  
                  <Label htmlFor="remember" className="text-sm font-semibold cursor-pointer text-black">
                    Remember me
                  </Label>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-800 to-blue-950 hover:from-blue-700 hover:to-blue-950 transition-all duration-300 text-white"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center justify center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.93813-2.647z"
                          ></path>
                      </svg>
                      Loading...
                    </div>
                  ) : (
                    "Login"
                  )}
                </Button>
              </form>
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white dark:bg-gray-950 text-gray-500 dark:text-gray-400"> 
                  </span>
                </div>
              </div>
            </CardContent>


            <CardFooter className="flex flex-col space-y-4 -mt-6">
              <div className="text-center text-sm">
                <span className="text-black-500 dark:text-black">
                  Don&apos;t have an account?</span>{" "}
                <Link
                  href="/register"
                  className="text-blue-800 hover:text-blue-900 dark:text-blue-800 dark:hover:text-blue-900 font-medium"
                  >
                    Sign up
                  </Link>
                  </div>
                  <p className="text-xs text-center text-black-800 dark:text-black">
                    By signing up, you agree to our {" "}
                    <Link
                      href="#"
                      className="underline hover:text-blue-900 dark:hover:text-blue-900"
                      >
                        Terms of Service
                      </Link>{" "} and {" "}
                    <Link
                      href="#"
                      className="underline hover:text-blue-900 dark:hover:text-blue-900"
                      >
                        Privacy Policy
                      </Link>
                  </p>
                  </CardFooter>
                </Card>
              </div>
            </main>
          </div> 
  )
}