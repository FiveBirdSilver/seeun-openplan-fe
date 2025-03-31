'use client'

import { useRouter } from 'next/navigation'

import { Button } from '@repo/ui'
import { useDebounce } from 'app/hooks/useDebounce'

export default function Page() {
  const router = useRouter()
  const debounced = useDebounce(router.push, 300)

  return (
    <main className='flex flex-col items-center justify-center h-screen relative'>
      <h1 className='text-title text-center'>
        안녕하세요
        <br />
        지원자 오세은입니다.
      </h1>
      <div className='absolute bottom-10 w-[335px]'>
        <Button
          variant='primary'
          size='lg'
          fullWidth
          className='h-12'
          onClick={() => debounced('/result')}
        >
          다음
        </Button>
      </div>
    </main>
  )
}
