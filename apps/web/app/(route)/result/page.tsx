'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { useEffect } from 'react'

import { usePhotoStore } from 'app/store/photoStore'
import { usePhotoQuery } from 'app/hooks/usePhotoQuery'
import { Button, Card, Label } from '@repo/ui'

export default function ResultPage() {
  const router = useRouter()
  const { hasViewed, setPhoto } = usePhotoStore()

  // 데이터 조회 
  const {
    data: photoInfo,
    isLoading,
    isSuccess,
    isError,
  } = usePhotoQuery(hasViewed)

  // 데이터 로딩 상태 확인
  const isDataLoading = isLoading || !photoInfo

  // 사진 조죄 이력 없을 경우 1초 뒤에 이전 페이지로 이동
  useEffect(() => {
    if (!hasViewed) {
      const timer = setTimeout(() => {
        router.push('/')
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [hasViewed])

  // 사진 조회 시, 진 정보 저장
  useEffect(() => {
    if (isSuccess && photoInfo) {
      setPhoto(photoInfo.id)
    }
  }, [isSuccess, photoInfo])

  if (isError) {
    return <div>에러가 발생했습니다.</div>
  }

  return (
    <main className='flex flex-col lg:flex-row justify-center items-center min-h-screen p-8 gap-10 bg-gray-100 '>
      {/* 이미지 섹션 */}
      <div className='w-full max-w-[660px]'>
        <Image
          src='/images/photo.webp'
          alt='Photo'
          width={660}
          height={440}
          className='w-full h-auto object-contain rounded-3xl'
          placeholder='blur'
          blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=='
          priority
        />
      </div>

      {/* 정보 섹션 */}
      <div className='w-full flex flex-col gap-4 lg:min-w-[660px]'>
        <Card>
          <Label
            label='id'
            value={photoInfo?.id ?? ''}
            isLoading={isDataLoading}
          />
          <Label
            label='author'
            value={photoInfo?.author ?? ''}
            isLoading={isDataLoading}
          />
        </Card>
        <Card>
          <Label
            label='width'
            value={photoInfo?.width ?? 0}
            isLoading={isDataLoading}
          />
          <Label
            label='height'
            value={photoInfo?.height ?? 0}
            isLoading={isDataLoading}
          />
        </Card>
        <Card rows={2}>
          <Label
            label='url'
            value={photoInfo?.url ?? ''}
            isLink
            isLoading={isDataLoading}
          />
          <Label
            label='download_url'
            value={photoInfo?.download_url ?? ''}
            isLink
            isLoading={isDataLoading}
          />
        </Card>
        <Button
          variant='primary'
          fullWidth
          className='h-12 md:max-w-[154px] self-center'
          onClick={() => router.push('/')}
        >
          이전
        </Button>
      </div>
    </main>
  )
}
