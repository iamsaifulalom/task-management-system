"use client"

import { Button } from '../ui/button'
import InputField from '../ui/input-field'
import { Form } from '../ui/form'
import { useForm } from 'react-hook-form'
import GoogleIcon from '@/icons/google-icon'
import { LoginFormValues, loginSchema } from '@/shema/login-shema'
import { zodResolver } from '@hookform/resolvers/zod'
import { signUpFields } from '@/forms/sign-up-fields'

export default function SignUpForm() {

    const form = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema)
    });

    return (
        <div className='w-full lg:px-20 flex flex-col space-y-4'>
            <Button
                variant="outline"
                className="ml-auto text-[#3754DB] hover:text-[#3754DB] inline-block border-[#3754DB]"
            >
                Sign up
            </Button>

            <Form {...form}>
                <form className='text-foreground flex flex-col max-w-sm gap-3 font-normal'>
                    <div>
                        <h1 className='text-[32px] text-foreground font-bold'>
                        Create an Account
                    </h1>
                    <p className='text-sm text-muted-foreground'>It’s Simpe and Easy!!</p>
                    </div>
                    <Button variant="outline" size="lg" className='my-8 border border-primary text-foreground'>
                        <GoogleIcon /> Sign in with google
                    </Button>
                    {signUpFields.map((item) => (
                        <InputField key={item.name} form={form} {...item} />
                    ))}
                    <Button size="lg" type='submit' className=''>
                        Log in
                    </Button>
                </form>
            </Form>
        </div>
    )
}
