"use client"

import { Button } from '../ui/button'
import InputField from '../ui/input-field'
import { Form } from '../ui/form'
import { Spinner } from '../ui/spinner'
import GoogleIcon from '@/icons/google-icon'
import Link from 'next/link'
import { authForms } from '@/forms/forms.auth'
import { useSignIn } from '@/hooks/use-sign-in'

export default function SignInForm() {
    const { form, handleSubmit, isLoading } = useSignIn();

    return (
        <div className='w-full lg:px-20 flex flex-col space-y-4 mb-10'>

            {/* sign in page link to go sign in page if user sign up already */}
            <Link href="/sign-up" className='inline-block'>
                <Button
                    variant="outline"
                    className="text-[#3754DB] hover:text-[#3754DB] border-[#3754DB]"
                >
                    Create a new account
                </Button>
            </Link>

            <Form {...form} >
                <form onSubmit={form.handleSubmit(handleSubmit)} className='text-foreground flex flex-col flex-1 justify-center space-y-4 font-normal'>
                    {/* sign up header with descriptions */}

                    <h1 className='text-[32px] text-foreground font-bold'>
                        Wellcome back!
                    </h1>

                    {/* sign in with google button */}

                    <Button type='button' variant="outline" size="lg" className='mt-4 border border-primary text-foreground'>
                        <GoogleIcon /> Sign in with google
                    </Button>

                    {/* form fields for sign up */}
                    {authForms.signIn.map((item) => (
                        <InputField key={item.name} form={form} {...item} />
                    ))}

                    <Button disabled={isLoading} size="lg" type='submit'>
                        {isLoading && <Spinner />} Sign up
                    </Button>
                </form>
            </Form>
        </div>
    )
}
