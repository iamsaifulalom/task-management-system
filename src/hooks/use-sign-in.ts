"use client";

import { signInAction } from "@/actions/action.auth";
import {
    SignInFormValues,
    signInSchema,
    signInDefaultValues
} from "@/schema/sign-in-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";

export function useSignIn() {
    const form = useForm<SignInFormValues>({
        resolver: zodResolver(signInSchema),
        defaultValues: signInDefaultValues
    });

    const [isLoading, setIsLoading] = useState(false);
    const [serverError, setServerError] = useState<string | null>(null);

    async function handleSubmit(data: SignInFormValues) {
        setIsLoading(true);
        try {
            const res: any = await signInAction(data)

            console.log(res);
            if (!res.success) {
                // server returned validation errors
                setServerError("Please fix the highlighted errors");
            }
            if (res.success) {
                // success
                console.log("User created successfully");
                form.reset(); // optional: clear the form
            }
        } catch (err: any) {
            console.error(err);
            setServerError("Something went wrong. Please try again.");
        } finally {
            setIsLoading(false);
        }
    }

    return { form, handleSubmit, isLoading, serverError };
}
