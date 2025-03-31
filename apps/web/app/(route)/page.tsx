'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Lottie from 'react-lottie-player'

import { Button, Skeleton } from '@repo/ui'
import { useDebounce } from 'app/hooks/useDebounce'
import { usePhotoStore } from 'app/store/photoStore'
import loadingAnimation from 'public/lottie/loading.json'

export default function Page() {
  const router = useRouter()
  const { photo, hasViewed, setHasViewed } = usePhotoStore()
  const { debounced: debouncedNavigate, isLoading } = useDebounce(
    (path: string) => {
      router.push(path)
    },
    1400
  )

  // 조회 기록 있을 경우 결과 페이지로 이동
  useEffect(() => {
    if (photo) {
      router.push('/result')
    }
  }, [photo, router])

  // 사진 조회 기록 있을 경우 로딩 스켈레톤 표시
  if (photo) {
    return (
      <>
        <Skeleton className='w-48 mb-4 h-8' />
        <Skeleton className='w-56 h-8' />
      </>
    )
  }

  // 버튼 클릭시 결과 페이지로 이동
  const handleNavigate = () => {
    if (!hasViewed) {
      setHasViewed(true)
    }
    debouncedNavigate('/result')
  }

  return (
    <main className='flex flex-col items-center justify-center h-screen relative'>
      <h1 className='text-title text-center'>
        안녕하세요
        <br />
        오세은입니다.
      </h1>
      <div className='absolute bottom-10 w-[335px]'>
        <Button
          variant='primary'
          size='lg'
          fullWidth
          className='h-12 flex items-center justify-center overflow-hidden' 
          onClick={handleNavigate}
          disabled={isLoading}
        >
          {isLoading ? (
            <Lottie
              loop
              animationData={loadingAnimation}
              play
              style={{ width: 48, height: 48 }}
            />
          ) : (
            '다음'
          )}
        </Button>
      </div>
    </main>
  )
}
