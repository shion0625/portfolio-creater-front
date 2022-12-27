import { DeleteOutline as DeleteOutlineIcon } from '@mui/icons-material'
import { Button, CardActionArea, CardActions, IconButton } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import BasicModal from '~/components/uiParts/modal'

type Props = {
  workIndex: number
  removeWork: (index: number, id: string) => void
  watch: any
  getValues: any
}

const MultiActionAreaCard: React.FC<Props> = ({ workIndex, removeWork, watch, getValues }) => {
  const watchFields = watch([`works.${workIndex}.title`, `works.${workIndex}.summary`])
  const getWorkId = getValues([`works.${workIndex}.id`])
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component='img'
          height='140'
          image='/static/images/cards/contemplative-reptile.jpg'
          alt='green iguana'
        />
        <CardContent>
          <Typography
            gutterBottom
            variant='h5'
            component='div'
            sx={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 2, // 行数指定
              overflow: 'hidden',
            }}
          >
            {watchFields[0]}
          </Typography>
          <Typography
            variant='body2'
            color='text.secondary'
            sx={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 3, // 行数指定
              overflow: 'hidden',
            }}
          >
            {watchFields[1]}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>
          画像の追加
        </Button>
        <BasicModal buttonText='編集' />
        {/* remove 関数は特定の位置の input を削除、位置を指定しない場合は全てを削除 */}
        <IconButton aria-label='delete' onClick={() => removeWork(workIndex, getWorkId)}>
          <DeleteOutlineIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default MultiActionAreaCard
