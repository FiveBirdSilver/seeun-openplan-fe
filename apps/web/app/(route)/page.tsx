'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Button, Skeleton } from '@repo/ui'
import { useDebounce } from 'app/hooks/useDebounce'
import { usePhotoStore } from 'app/store/photoStore'

export default function Page() {
  const router = useRouter()
  const debouncedPush = useDebounce(router.push, 300)
  const { photo, hasViewed, setHasViewed } = usePhotoStore()

  useEffect(() => {
    if (!hasViewed) {
      setHasViewed(true) // 최초 방문 시에만 설정
    }
    if (photo) {
      router.push('/result') // photo가 있으면 즉시 이동
    }
  }, [photo, hasViewed, router, setHasViewed])

  const SkeletonPlaceholder = () => (
    <>
      <Skeleton className='w-48 mb-4 h-8' />
      <Skeleton className='w-56 h-8' />
    </>
  )

  // photo가 있으면 리다이렉트 중이므로 UI 숨김
  if (photo) {
    return <SkeletonPlaceholder />
  }

  return (
    <main className='flex flex-col items-center justify-center h-screen relative'>
      {hasViewed ? (
        <h1 className='text-title text-center'>
          안녕하세요
          <br />
          오세은입니다.
        </h1>
      ) : (
        <SkeletonPlaceholder />
      )}
      <div className='absolute bottom-10 w-[335px]'>
        <Button
          variant='primary'
          size='lg'
          fullWidth
          className='h-12'
          onClick={() => debouncedPush('/result')}
        >
          다음
        </Button>
      </div>
    </main>
  )
}
