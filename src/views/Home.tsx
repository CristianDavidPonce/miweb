import {
  Typography, Avatar, Container, Grid, Card, CardContent, CardActions, Button, CardMedia
} from '@material-ui/core'
import Box from '@material-ui/core/Box'
import React from 'react'

interface Props {}

function Home (props: Props) {
  // const {} = props

  return (
      <>
        <Box sx={{
          backgroundImage: `url(${'https://www.xtrafondos.com/wallpapers/espacio-interestelar-universo-2900.jpg'})`,
          width: '100%',
          height: '300px'
        }}>
        </Box>
        <Container
          maxWidth= 'lg'
        >
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column'

          }}>
          <Avatar
            alt="Cristian Ponce"
            src="https://scontent.fuio1-1.fna.fbcdn.net/v/t1.6435-9/83015287_3104079296303925_1021511439677915136_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeFVfuUJ18nGxEci8-37diQda99UKxldLKdr31QrGV0sp8K5oJCDGbTbWoRpFLSnf5vT8heWcGPWYGlXfirPyqyi&_nc_ohc=9tXhB_7X7PMAX9ryIIy&_nc_ht=scontent.fuio1-1.fna&oh=d0acfc34c0c96c75441faf8d9899a22b&oe=60DD4A95"
            sx={
                {
                  width: 180,
                  height: 180,
                  marginTop: '-90px'
                }
              }
          />
          <Typography
              variant="h2"
              component="h2"
              sx= {
                {
                  margin: 5
                }
              }
          >
            Cristian Ponce
            </Typography>
          </Box>
          <Grid container spacing={4}>
          <Grid item xs={8} sm={4}>
          <Card sx={{ minWidth: 275 }}>
              <CardMedia
                sx={{ height: 150 }}
                image="https://i.ibb.co/Fh1jNJ5/IMG-1749-1.jpg"
                title="FluorVision"
              />
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Proyectos
              </Typography>

              <Typography variant="h5" component="div">
                FluorVision
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Instrumentacion Biomedica
              </Typography>
              <Typography variant="body2">
                Proyecto de investigacion,
                en el desarroyo de instrumentacion para
                el diagnostico de cancer de piel de tipo no melanoma
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Leer mas</Button>
            </CardActions>
          </Card>
          </Grid>
          <Grid item xs={8} sm={4}>
          <Card sx={{ minWidth: 275 }}>
            <CardMedia
                sx={{ height: 150 }}
                image="https://scontent.fuio1-1.fna.fbcdn.net/v/t1.6435-9/82134726_103550621184781_1383226382686879744_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeFjKKTnVxY9SMUH0_0LiU-HWRG0zbu78VNZEbTNu7vxU5JDr5oQM7vdkFQggjiFjyrDBVx5neyG6nxa-FeFV4Yg&_nc_ohc=-cPKBV9iQ5oAX-_JtZO&_nc_ht=scontent.fuio1-1.fna&oh=6b7fd3827fef69b0149bb969d9bf0ae3&oe=60DCE4BE"
                title="FluorVision"
              />
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Habilidades
              </Typography>
              <Typography variant="h5" component="div">
                Coleccionalo 3D
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Impresion 3D
              </Typography>
              <Typography sx={{ minHeight: 60 }} variant="body2">
                Impresion y pintura de figuras coleccionables
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Leer mas</Button>
            </CardActions>
          </Card>
          </Grid>
          <Grid item xs={8} sm={4}>
          <Card sx={{ minWidth: 275 }}>
          <CardMedia
                sx={{ height: 150 }}
                image="https://images.ctfassets.net/51xdmtqw3t2p/2w0H06U9MYaJNsonXhyD3I/0cd72a4b4e01460bcd7145e984b05c38/Portada_react.jpg?w=1100&h=800&q=50"
                title="FluorVision"
              />
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Habilidades
              </Typography>
              <Typography variant="h5" component="div">
                React y React Native
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Front End
              </Typography>
              <Typography sx={{ minHeight: 60 }} variant="body2">
                Desarrollo de aplicaciones web y mobiles
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Leer mas</Button>
            </CardActions>
          </Card>
          </Grid>
          <Grid item xs={8} sm={4}>
          <Card sx={{ minWidth: 275 }}>
          <CardMedia
                sx={{ height: 150 }}
                image='https://i3w3g8c7.rocketcdn.me/wp-content/uploads/2018/11/Software-SaaS-1024x656.jpg'
                title="FluorVision"
              />
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Habilidades
              </Typography>
              <Typography variant="h5" component="div">
                Caspio y WebFlow
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
              SaaS
              </Typography>
              <Typography sx={{ minHeight: 60 }} variant="body2">
                Desarrollo de aplicaciones web usando software  de tipo SaaS
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Leer mas</Button>
            </CardActions>
          </Card>
          </Grid>
          </Grid>

        </Container>

      </>
  )
}

export default Home
