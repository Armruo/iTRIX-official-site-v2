'use client'

import Image, { ImageProps } from 'next/image'
import { useState } from 'react'

interface OptimizedImageProps extends Omit<ImageProps, 'onError' | 'onLoad'> {
  fallback?: string
}

export default function OptimizedImage({
  src,
  alt,
  fallback = '/images/placeholder.jpg',
  className = '',
  ...props
}: OptimizedImageProps) {
  const [error, setError] = useState(false)

  return (
    <Image
      src={error ? fallback : src}
      alt={alt}
      className={`transition-opacity duration-300 ${className}`}
      onError={() => setError(true)}
      {...props}
      loading="lazy"
      quality={90}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  )
}
