import CodingPicture from '../../assets/coding_on_top_of_world.png'
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
        image={CodingPicture}
        title='me coding'
      />
    </Card>
  )
}
