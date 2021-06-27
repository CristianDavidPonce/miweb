import { Typography } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import React from 'react'

interface Props {}

function Home (props: Props) {
  // const {} = props

  return (
      <>
        <Box sx={{
          flexGrow: 1,
          backgroundImage: `url(${'https://www.xtrafondos.com/wallpapers/espacio-interestelar-universo-2900.jpg'})`,
          width: '100%',
          height: '350px',
          paddingTop: 8,
          paddingLeft: 8
        }}>
            <Typography
              variant="h2"
              component="h2"
              sx={
                {
                  color: '#fff'
                }
              }>
            Cristian Ponce
            </Typography>
        </Box>

      </>
  )
}

export default Home
