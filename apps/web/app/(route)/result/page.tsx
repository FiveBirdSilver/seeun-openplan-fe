'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { useEffect } from 'react'

import { usePhotoStore } from 'app/store/photoStore'
import { Button } from '@repo/ui'
import { Card } from '@repo/ui/src/Card'
import { Label } from '@repo/ui/src/Label'
import { usePhotoQuery } from 'app/hooks/usePhotoQuery'

export default function ResultPage() {
  const router = useRouter()

  const { data: photoInfo , isLoading , isSuccess, isError } = usePhotoQuery()

  useEffect(() => {
    if(isSuccess) {
      usePhotoStore.setState({ photo: photoInfo.id })
    }
  }, [isSuccess, photoInfo])

  if(isError) {
    return <div>에러가 발생했습니다.</div>
  }

  return (
    <main className='flex justify-center items-center min-h-screen p-8 gap-10 bg-gray-100'>
      
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
      <div className='w-full flex flex-col gap-4 min-w-[660px]'>
        <Card>
          <Label label='id' value={photoInfo?.id ?? ''} isLoading={isLoading} />
          <Label label='author' value={photoInfo?.author ?? ''} isLoading={isLoading} />
        </Card>
        <Card>
          <Label label='width' value={photoInfo?.width ?? 0} isLoading={isLoading} />
          <Label label='height' value={photoInfo?.height ?? 0} isLoading={isLoading} />
        </Card>
        <Card direction='rows'>
          <Label
            label='url'
            value={photoInfo?.url ?? ''}
            isLink
            isLoading={isLoading}
          />
          <Label
            label='download_url'
            value={photoInfo?.download_url ?? ''}
            isLink
            isLoading={isLoading}
          />
        </Card>
        <Button
          variant='primary'
          fullWidth
          className='h-12 max-w-[154px] self-center'
          onClick={() => router.back()}
        >
          이전
        </Button>
      </div>
    </main>
  )
}
