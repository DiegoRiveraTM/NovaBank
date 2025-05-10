import { Button } from "../components/ui/button";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";



export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-white dark:bg-neutral-950 border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-800 to-emearald-500"></div>
              <span className="text-x1 font-bold">NovaBank</span>
            <div>
              <div className="flex gap-4"></div>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="flex-1 bg-gradient-to-b from-white to-gray-500 dark:from-neutral-950 dark:to-neutral-900">
        <div className="container mx-auto px-4 py-20 flex flex-col items-center text-center">
          <h1 className="text-5x1 font-bold mb-6">Banking for the best clients</h1>
          <p className="text-xl text-black-600 max-w-2xl mb-10">
            Manage your finances with ease, anytime, anywhere, with us.
          </p>
            <div className="flex gap-4">
              <Link href="/register">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-800 to-blue-950 hover:from-blue-700 hover:to-blue-950 text-white border border-black"
                  >Get Started
                </Button>
              </Link>
              <Link href="/login">
                <Button size="lg" variant="outline" className="bg-gray-300 dark:bg-[oklch(17%_0_0)] border border-black" >
                  Login to Account
                </Button>
              </Link>
            </div>
        </div>
      </main>

      <footer className="bg-gray-500 dark:bg-neutral-900 text-black dark:text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-800 to-emerald-500"></div>
                <span className="text-xl font-bold">NovaBank</span>
              </div>
              <p className="max-w-md">
              Your trusted partner in banking, providing you security and user-friendly.
              </p>
            </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-medium mb-4">Company</h3>
              <ul>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Resources</h3>
              <ul>
                <li>Blog</li>
                <li>Help Center</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Legal</h3>
              <ul>
                <li>Terms</li>
                <li>Cookies</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-900 dark:border-neutral-700 pt-6 pb-4 text-center text-black dark:text-white font-semibold">
          <p className="text-[15px]">@ {new Date().getFullYear()} NovaBank. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
  );
}
