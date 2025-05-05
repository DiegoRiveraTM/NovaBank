// src/components/DashboardNav.tsx
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
  } from "@/components/ui/navigation-menu";
  import Link from "next/link";
  import { ThemeToggle } from "@/components/ui/theme-toggle";
  
  export default function DashboardNav() {
    return (
      <div className="flex justify-between items-center w-full p-4 border-b">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/dashboard" legacyBehavior passHref>
                <NavigationMenuLink className="px-4 py-2 text-sm font-medium hover:bg-muted rounded">
                  Dashboard
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/dashboard/deposits" legacyBehavior passHref>
                <NavigationMenuLink className="px-4 py-2 text-sm font-medium hover:bg-muted rounded">
                  Deposits
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/dashboard/transfers" legacyBehavior passHref>
                <NavigationMenuLink className="px-4 py-2 text-sm font-medium hover:bg-muted rounded">
                  Transfers
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
  
        <ThemeToggle />
      </div>
    );
  }
  