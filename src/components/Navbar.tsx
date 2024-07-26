"use client";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import { ArrowRight } from "lucide-react";
// import { useAuth } from "@/lib/useAuth";
import { useState, useEffect } from "react";

const logOut = () => {};

const Navbar = () => {
    const [user, setUser] = useState<string | null>();
    // const [isAdmin, setIsAdmin] = useState<boolean>(false);

    return (
        <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-900 bg-zinc-800 backdrop-blur-lg transition-all text-white">
            <MaxWidthWrapper>
                <div className="flex h-14 items-center justify-between border-b border-zinc-900">
                    <Link
                        href="/"
                        className="flex z-40 font-semibold text-white"
                    >
                        Focus<span className="text-green-600">Up</span>
                    </Link>

                    <div className="h-full flex items-center space-x-4">
                        <>
                            {user ? (
                                <button
                                    onClick={logOut}
                                    className={buttonVariants({
                                        size: "sm",
                                        variant: "ghost",
                                    })}
                                >
                                    {" "}
                                    Sign out
                                </button>
                            ) : (
                                <Link
                                    href="/auth/signin"
                                    className={buttonVariants({
                                        size: "sm",
                                        variant: "ghost",
                                    })}
                                >
                                    {" "}
                                    Sign In
                                </Link>
                            )}
                            <div className="h-8 w-px bg-zinc-200 hidden sm:block" />
                            <Link
                                href="/leaderboard"
                                className={buttonVariants({
                                    size: "sm",
                                    className:
                                        "hidden sm:flex items-center gap-1 bg-green-700",
                                })}
                            >
                                {" "}
                                Leaderboard
                                <ArrowRight className="ml-1.5 h-5 w-5" />
                            </Link>
                        </>
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    );
};

export default Navbar;
