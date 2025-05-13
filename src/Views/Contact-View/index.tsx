import { Button, ButtonGroup } from '@mui/material'
import { Footer } from '../../components/Footer/FooterComponent'
import { Header } from '../../components/Header/HeaderComponent'
import { NamePlate } from '../../components/NamePlate/NamePlate'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import SendIcon from '@mui/icons-material/Send'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import AlbumIcon from '@mui/icons-material/Album'

export const ContactView = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:sdunland@gmail.com'
  }

  return (
    <>
      <Header />

      <div className='flex flex-col items-center justify-center bg-[#FFFCF9] w-screen h-screen'>
        <div className='flex flex-row'>
          <NamePlate name='Connect' margin='mb-8' />
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
