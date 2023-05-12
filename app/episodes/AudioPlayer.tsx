'use client'

import React from 'react'


interface AudioPlayerProps {
    audioRef: HTMLAudioElement
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({audioRef}) => {
  return (
    <div>AudioPlayer</div>
  )
}

export default AudioPlayer