"use client"

import { Card, CardContent } from "@/components/ui/card"

interface VideoPlayerCardProps {
  videoId: string  // YouTube video ID
  startTime?: number  // Start time in seconds
  title?: string
}

export default function VideoPlayerCard({
  videoId,
  startTime = 0,
  title
}: VideoPlayerCardProps) {
  // Construct the YouTube embed URL with parameters
  const embedUrl = `https://www.youtube.com/embed/${videoId}?start=${startTime}&autoplay=1&rel=0`

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="relative w-full pt-[56.25%]"> {/* 16:9 aspect ratio */}
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={embedUrl}
            title={title || "YouTube video player"}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </CardContent>
    </Card>
  )
}