// src/components/DashboardNav.tsx
"use client";

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function DashboardNav() {
    const [username, setUsername] = useState<string | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        const storedUsername = localStorage.getItem("username");
        setUsername(storedUsername);
    }, []);

    const isDashboardPage = pathname === "/dashboard";

    return (
        <div className="flex justify-between items-center w-full p-4 border-b">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href="/dashboard" legacyBehavior passHref>
                            <NavigationMenuLink className="px-4 py-2 text-lg font-semibold hover:bg-muted rounded">
                                NovaBank
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    {!isDashboardPage && (
                        <>
                            {pathname !== "/dashboard/deposits" && (
                                <NavigationMenuItem>
                                    <Link href="/dashboard/deposits" legacyBehavior passHref>
                                        <NavigationMenuLink className="px-4 py-2 text-sm font-medium hover:bg-muted rounded">
                                            Deposits
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            )}
                            {pathname !== "/dashboard/transfers" && (
                                <NavigationMenuItem>
                                    <Link href="/dashboard/transfers" legacyBehavior passHref>
                                        <NavigationMenuLink className="px-4 py-2 text-sm font-medium hover:bg-muted rounded">
                                            Transfers
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            )}
                        </>
                    )}
                </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center gap-4">
                {username && (
                    <span className="text-sm font-medium text-muted-foreground">
                        Hello, {username}
                    </span>
                )}
                <ThemeToggle />
            </div>
        </div>
    );
}
