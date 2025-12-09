import { Button } from '@/components/ui/button'

export default function SignUpLeftSide() {
    return (
        <div className="bg-[url('/images/login-bg.png')] hidden  md:flex justify-center items-center bg-cover bg-center rounded-sm w-full h-full">
            <div>
                <h1 className='text-[56px] text-background pb-5'>
                    Take your <br />
                    productivity to the  <br />
                    next level. <br />
                </h1>
                <div className='border mt-10 p-4 font-normal border-background rounded-2xl relative inline-block'>
                    <h1 className='absolute -top-4 rounded-sm bg-[#3754DB] px-2 left-6 h-8 flex text-xl items-center'>Get the Mobile App</h1>
                    <Button size="lg" className="text-[#3754DB] hover:bg-[#FBBE37]/70 font-bold bg-[#FBBE37]">
                        Download on Apple
                    </Button>
                    <Button size="lg" className="text-[#3754DB] ml-5  font-bold bg-background hover:bg-background/70">
                        Download on Android
                    </Button>
                </div>
                <p className='text-sm font-normal mt-10'>Copyright 2021 | All Right Reserved</p>
            </div>
        </div>
    )
}