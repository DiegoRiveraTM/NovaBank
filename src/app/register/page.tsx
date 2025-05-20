"use client"

import { useRouter} from "next/navigation";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Lock } from 'lucide-react'
import Link from "next/link";


export default function RegisterPage(){
  const router = useRouter();

  const [username,setUsername] = useState("");
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [showPassword,setShowPassword] = useState(false);
  const [acceptTerms,setAcceptTerms] = useState(false);
  const [error,setError] = useState("");
  const [isLoading,setIsLoading] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if(!acceptTerms){
      setError("You must accept the terms and conditions")
      return;
    }
    setError("");
    setIsLoading(true);

    setTimeout(()=>{
      setIsLoading(false)
      router.push("/dashboard")
    },1500)
  }
  
  const passwordStrength = () => {

    if(!password) return { strength: 0, text: "", color: "" }
    let strength = 0;
    if(password.length >= 8) strength += 1;
    if(/[A-Z]/.test(password)) strength += 1;
    if(/[0-9]/.test(password)) strength += 1;
    if(/[^A-Za-z0-9]/.test(password)) strength += 1;
  
    const strengthMap = [
    { text: "Very Weak", color: "red" },
    { text: "Weak", color: "orange" },
    { text: "Medium", color: "yellow" },
    { text: "Strong", color: "green" },
    { text: "Very Strong", color: "blue" }
  ];

  return {
    strength,
    text: strengthMap[strength].text,
    color: strengthMap[strength].color
  };
};

  const { strength, text, color } = passwordStrength();
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-500 dark:from-neutral-950 dark:to-neutral-900">
      <header className="w-full p-4 flex justify-between items-center z-10">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-800 to-emerald-500"></div>
          <span className="text-xl font-bold text-black dark:text-white">NovaBank</span>
        </Link>
        <ThemeToggle />
      </header>
    </div>
  );
}