"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="flex items-center gap-2">
                        <span className="font-mono text-xl font-bold tracking-tight">
                            Peculiar Agency
                        </span>
                    </Link>

                    <div className="flex items-center gap-4">
                        <ThemeToggle />
                        <Button asChild size="sm">
                            <Link href="/#contact">Get in Touch</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}
