import { useState } from 'react'
import SeanCodingImage from '../../assets/sean-coding.jpg'
import SeanMusicImage from '../../assets/sean-music.jpg'
import { Box, Card } from '@mui/material'

export const MainViewCard = () => {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <Card
      sx={{
        maxWidth: 530,
        position: 'relative',
        width: 360,
        height: 420,
        overflow: 'hidden',
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Base image (CodingPicture) */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${SeanCodingImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'opacity 0.8s ease-in-out',
        }}
      />

      {/* Hover image (MakingMusicImage) */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${SeanMusicImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: isHovering ? 1 : 0,
          transition: 'opacity 0.8s ease-in-out',
        }}
      />
    </Card>
  )
}
