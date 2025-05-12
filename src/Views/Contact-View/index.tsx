import { Button, ButtonGroup, Typography } from '@mui/material'
import { Footer } from '../../components/Footer/FooterComponent'
import { Header } from '../../components/Header/HeaderComponent'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import SendIcon from '@mui/icons-material/Send'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import AlbumIcon from '@mui/icons-material/Album'
import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'
import type { Engine } from 'tsparticles-engine'
import { useCallback, useEffect, useRef } from 'react'

export const ContactView = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:sdunland@gmail.com'
  }

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
    <>
      <Header />

      <div className='flex flex-col items-center justify-center bg-[#FFFCF9] w-screen h-screen'>
        <div className='flex flex-row'>
          <div className='relative inline-block mb-8'>
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
                Connect
              </Typography>
            </div>
          </div>
        </div>

        <div className='flex flex-row'>
          <ButtonGroup
            variant='text'
            size='large'
            color='primary'
            aria-label='Basic button group'
            sx={{ color: '#1F2421', borderColor: '#1F2421' }}
          >
            <Button
              endIcon={<SendIcon />}
              onClick={handleEmailClick}
              sx={{
                backgroundColor: '#FFFCF9',
                color: '#1F2421',
                borderRadius: '50px',
                borderColor: 'black',
                padding: '10px 20px',
                '&:hover': {
                  backgroundColor: '#1F2421',
                  borderColor: 'white',
                  color: 'white',
                },
              }}
            >
              Email
            </Button>
            <Button
              endIcon={<LinkedInIcon />}
              href='https://www.linkedin.com/in/sean-camay-unland-b46b2743/'
              target='_blank'
              sx={{
                backgroundColor: '#FFFCF9',
                color: '#1F2421',
                borderRadius: '50px',
                borderColor: 'black',
                padding: '10px 20px',
                '&:hover': {
                  backgroundColor: '#1F2421',
                  borderColor: 'white',
                  color: 'white',
                },
              }}
            >
              LinkedIn
            </Button>
            <Button
              endIcon={<GitHubIcon />}
              href='https://github.com/Sean-Camay/'
              target='_blank'
              sx={{
                backgroundColor: '#FFFCF9',
                color: '#1F2421',
                borderRadius: '50px',
                borderColor: 'black',
                padding: '10px 20px',
                '&:hover': {
                  backgroundColor: '#1F2421',
                  borderColor: 'white',
                  color: 'white',
                },
              }}
            >
              Git Hub
            </Button>
            <Button
              endIcon={<MusicNoteIcon />}
              href='https://music.apple.com/us/artist/analog-robot/1276359301'
              target='_blank'
              sx={{
                backgroundColor: '#FFFCF9',
                color: '#1F2421',
                borderRadius: '50px',
                borderColor: 'black',
                padding: '10px 20px',
                '&:hover': {
                  backgroundColor: '#1F2421',
                  borderColor: 'white',
                  color: 'white',
                },
              }}
            >
              Apple Music
            </Button>
            <Button
              endIcon={<AlbumIcon />}
              href='https://open.spotify.com/artist/5X2KFhPykT0QGAll0TgeiF'
              target='_blank'
              sx={{
                backgroundColor: '#FFFCF9',
                color: '#1F2421',
                borderRadius: '50px',
                borderColor: 'black',
                padding: '10px 20px',
                '&:hover': {
                  backgroundColor: '#1F2421',
                  borderColor: 'white',
                  color: 'white',
                },
              }}
            >
              Spotify
            </Button>
          </ButtonGroup>
        </div>
      </div>

      <Footer />
    </>
  )
}
