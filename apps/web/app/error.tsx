'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@repo/ui'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  // 에러 발생시 콘솔 출력
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className='h-screen flex flex-col gap-4 items-center justify-center'>
      <Image src={`/icons/error.webp`} alt={'error'} width={120} height={50} />
      <h6 className='text-xl font-semibold text-center'>
        오류가 발생했습니다<br/>
        잠시 후 다시 시도해주세요
      </h6>
      <div className={'grid h-10 w-4/12 mt-8 text-sm'}>
        <Button onClick={() => reset()}>홈으로 돌아가기</Button>
      </div>
    </div>
  )
}
