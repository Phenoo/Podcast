'use client'


import React, { useState, useRef, useEffect } from 'react'
import styles from "./AudioPlayer.module.css";
import { FaPlay } from "react-icons/fa"
import { FaPause } from "react-icons/fa"
import Button from '../components/Button';
import { AiFillBackward, AiFillForward, AiFillPauseCircle, AiFillPlayCircle } from 'react-icons/ai';

const AudioPlayer = ({fileUrl} : any) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  
  // references
  const audioPlayer = useRef<HTMLAudioElement>(null); // reference our audio component
  const progressBar = useRef<HTMLInputElement>(null); // reference our progress bar
  const animationRef = useRef<number>(0); // reference the animation

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current!.duration);
    setDuration(seconds);
    progressBar.current!.max = seconds.toString();
  }, [audioPlayer?.current?.onloadedmetadata, audioPlayer?.current?.readyState]);


  const calculateTime = (secs : number) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  }

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current!.play();
      animationRef.current = requestAnimationFrame(whilePlaying)
    } else {
      audioPlayer.current!.pause();
      cancelAnimationFrame(animationRef.current);
    }
  }

  // const whilePlaying = () => {
  //   let currentValue = Number(progressBar.current!.value);

  //   currentValue = Number(audioPlayer.current!.currentTime);
  //   changePlayerCurrentTime();
  //   animationRef.current = requestAnimationFrame(whilePlaying);
  // }

  const whilePlaying = () => {
    progressBar.current!.value = `${audioPlayer.current!.currentTime}`;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  }


  const changeRange = () => {
    audioPlayer.current!.currentTime = Number(progressBar.current!.value);
    changePlayerCurrentTime();
  }

  const changePlayerCurrentTime = () => {
    const currentValue = Number(progressBar.current!.value);
    progressBar.current!.style.setProperty('--seek-before-width', `${currentValue / duration * 100}%`)
    setCurrentTime(Number(progressBar.current!.value));

  }

  const backThirty = () => {
    // progressBar.current!.value  = Number(progressBar.current!.value - 30).toString();
    const newValue = Number(progressBar.current!.value) - 30;
    progressBar.current!.value = newValue.toString();
    changeRange();
  }

  const forwardThirty = () => {
    // progressBar.current.value = Number(progressBar.current!.value + 30);
    const newValue = Number(progressBar.current!.value) + 30;
    progressBar.current!.value = newValue.toString();
    changeRange();
  }

  return (
    <div className=''>
      <div className={styles.audioPlayer}>
        <audio ref={audioPlayer} src={fileUrl} preload="metadata"></audio>
        <div className='flex flex-row gap-4'>
          <button className={styles.forwardBackward} onClick={backThirty}><AiFillBackward  size={24} /> </button>
          <button onClick={togglePlayPause} className={styles.playPause}>
            {isPlaying ? <FaPause /> : <FaPlay className={styles.play} />}
          </button>
          <button className={styles.forwardBackward} onClick={forwardThirty}> <AiFillForward size={24} /></button>
        </div>
        <div className='flex flex-row gap-2'>
              {/* current time */}
              <div className={styles.currentTime}>{calculateTime(currentTime)}</div>

              {/* progress bar */}
              <div className='w-full'>
                <input type="range" className={`${styles.progressBar} w-[200px] sm:w-[400px] md:w-[500px]`} 
                    value={currentTime} defaultValue="0" ref={progressBar} onChange={changeRange} />
              </div>

              {/* duration */}
              <div className={styles.duration}>{(duration && !isNaN(duration)) && calculateTime(duration)}</div>
        </div>


        </div>
    </div>

  )
}

export default AudioPlayer

      {/* <Button label={`${isPlaying ? 'pause episode' : 'play episode'}`} bgcolor='bg-primary' color='white' icon={isPlaying ? AiFillPauseCircle : AiFillPlayCircle} onClick={togglePlayPause} /> */}
