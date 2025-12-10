import SignInForm from '@/components/sign-in/sign-in-form'
import SignInRightSide from '@/components/sign-in/sign-in-right-side'

export default function SignIn() {
  return (
    <div className='flex w-full gap-3 h-screen p-2'>
      <SignInForm/>
      <SignInRightSide/>
    </div>
  )
}
