"use client";
import { signIn } from "next-auth/react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";

export default function SignIn() {
    return (
        <div className="h-screen bg-zinc-900 text-white">
            <MaxWidthWrapper className="py-4">
                <div className="flex flex-col items-center">
                    <div className="font-bold text-4xl mt-6">
                        Register/Login
                    </div>
                    <button
                        className={buttonVariants({
                            size: "sm",
                            className:
                                "hidden sm:flex text-lg items-center mt-4 px-6 py-6 bg-green-700",
                        })}
                        onClick={() => signIn("google")}
                    >
                        Sign in with Google
                    </button>
                </div>
            </MaxWidthWrapper>
        </div>
    );
}
