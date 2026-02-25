import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";

export function Footer() {
    return (
        <footer className="border-t bg-muted/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} {SITE_NAME}
                    </p>
                    <Link
                        href="/#contact"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </footer>
    );
}
