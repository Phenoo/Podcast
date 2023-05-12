'use client'
import React from 'react'

interface ProgressBarProps {
    progressRef: any;
    duration: any;
    progress: number;
    audioRef: HTMLAudioElement
}

const ProgressBar: React.FC<ProgressBarProps> = ({progressRef, duration, progress, audioRef}) => {
    const handleProgress = () => {
    }
  return (
    <div>
        <span>{progress}</span>
        <input type="range" ref={progressRef}
            onChange={handleProgress}
            defaultValue={0}
        />
        <span>{duration}</span>
    </div>
  )
}

export default ProgressBar