'use client'

import { Button } from '@repo/ui'
import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()
  return (
    <main className='flex flex-col items-center justify-center h-screen relative'>
      <h1 className='text-title text-center font-pretendard'>
        안녕하세요
        <br />
        지원자 오세은입니다.
      </h1>
      <div className='absolute bottom-10 w-[335px]'>
        
        <Button variant='primary' size='lg' fullWidth className='h-12' onClick={() => router.push('/result')}>
          다음
        </Button>
      </div>
    </main>
  )
}
