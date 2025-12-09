import SignUpForm from '@/components/sign-up/sign-up-form'
import SignUpLeftSide from '@/components/sign-up/sign-up-left-side'

export default function LogIn() {
    return (
        <div className='p-2 grid grid-cols-1 md:grid-cols-2 w-full text-background h-screen'>
            <SignUpLeftSide />
            <SignUpForm />
        </div>
    )
}
