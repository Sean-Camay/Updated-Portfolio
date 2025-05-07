import { Card, CardMedia } from '@mui/material'

export const MainViewCard = () => {
  return (
    <Card sx={{ maxWidth: 530 }}>
      {/* <CardMedia
        sx={{ height: 360, width: 360 }}
        image='../../../cartoon me coding.PNG'
        title='me coding'
      /> */}
      <CardMedia
        sx={{ height: 420, width: 360 }}
        image='../../../coding on top of world.PNG'
        title='me coding'
      />
    </Card>
  )
}
