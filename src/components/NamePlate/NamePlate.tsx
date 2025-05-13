import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'
import type { Engine } from 'tsparticles-engine'
import { useCallback, useEffect, useRef } from 'react'
import { Typography } from '@mui/material'

interface NamePlateProps {
  name: string
  margin: string
}

export const NamePlate = ({ name, margin }: NamePlateProps) => {
  const textRef = useRef<HTMLDivElement>(null)

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  useEffect(() => {
    const resizeParticleContainer = () => {
      if (textRef.current) {
        const particleContainer = document.getElementById('particles-container')
        if (particleContainer) {
          const rect = textRef.current.getBoundingClientRect()
          particleContainer.style.width = `${rect.width}px`
          particleContainer.style.height = `${rect.height}px`
        }
      }
    }

    resizeParticleContainer()
    window.addEventListener('resize', resizeParticleContainer)

    return () => {
      window.removeEventListener('resize', resizeParticleContainer)
    }
  }, [])
  return (
    // <div className='relative inline-block mb-8'>
    <div className={`relative inline-block ${margin}`}>
      <div
        id='particles-container'
        className='absolute inset-0'
        style={{ width: '100%', height: '100%', zIndex: 0 }}
      >
        <Particles
          id='tsparticles'
          init={particlesInit}
          options={{
            fullScreen: { enable: false },
            particles: {
              number: {
                value: 80,
                density: { enable: true, value_area: 800 },
              },
              color: { value: '#1F2421' },
              opacity: { value: 0.5, random: true },
              size: { value: 3, random: true },
              move: {
                enable: true,
                speed: 1,
                random: true,
                out_mode: 'out',
              },
              line_linked: {
                enable: true,
                distance: 100,
                color: '#1F2421',
                opacity: 0.4,
                width: 1,
              },
            },
            interactivity: {
              detect_on: 'canvas',
              events: {
                onhover: { enable: true, mode: 'grab' },
                onclick: { enable: true, mode: 'push' },
              },
              modes: {
                grab: { distance: 140, line_linked: { opacity: 1 } },
                push: { particles_nb: 4 },
              },
            },
          }}
        />
      </div>

      <div ref={textRef} style={{ position: 'relative', zIndex: 1 }}>
        <Typography
          variant='h2'
          sx={{ color: 'text.primary', fontWeight: 700 }}
        >
          {name}
        </Typography>
      </div>
    </div>
  )
}
