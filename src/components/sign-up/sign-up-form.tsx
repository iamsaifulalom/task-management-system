"use client"

import { Button } from '../ui/button'
import InputField from '../ui/input-field'
import { Form } from '../ui/form'
import GoogleIcon from '@/icons/google-icon'
import { signUpFields } from '@/forms/sign-up-fields'
import { useSignUp } from '@/hooks/use-sign-up'

export default function SignUpForm() {
    const { form, handleSubmit , isLoading} = useSignUp();

    return (
        <div className='w-full lg:px-20 flex flex-col space-y-4 mb-10'>
            <Button
                variant="outline"
                className="ml-auto text-[#3754DB] hover:text-[#3754DB] inline-block border-[#3754DB]"
            >
                Sign in
            </Button>

            <Form {...form} >
                <form onSubmit={form.handleSubmit(handleSubmit)} className='text-foreground flex flex-col flex-1 justify-center space-y-4 max-w-sm font-normal'>
                    <h1 className='text-[32px] text-foreground font-bold'>
                        Create an Account
                    </h1>
                    <p className='text-sm text-muted-foreground -mt-4'>It’s Simpe and Easy!!</p>
                    <Button type='button' variant="outline" size="lg" className='mt-4 border border-primary text-foreground'>
                        <GoogleIcon /> Sign in with google
                    </Button>
                    {signUpFields.map((item) => (
                        <InputField key={item.name} form={form} {...item} />
                    ))}
                    <Button disabled={isLoading} size="lg" type='submit'>
                       {isLoading && "loading.."} Sign up
                    </Button>
                </form>
            </Form>
        </div>
    )
}
