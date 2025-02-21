//@ts-nocheck
import { Link } from 'react-router-dom'

// Mantine Imports
import { Anchor, AspectRatio, Blockquote, Box, Grid, Group, Image, NavLink, Text, ThemeIcon, Title } from "@mantine/core";

// Image Imports
import logo from "../../media/basketschool_sirnach_alternatelogo.png";

// Icons Imports here
import { Mail, WorldWww } from 'tabler-icons-react';

// Style import
import './index.css'

const Footer = () => {

  return (
    <div className='footer'>
      <Grid justify={'center'} align={'center'} mx={'xl'} py={'xl'}>
        <Grid.Col md={4} sm={6} align={'left'} ml={'xl'}>
          <AspectRatio ratio={2000 / 2000} maw={'30%'} my={'sm'}>
            <Anchor href={'http://www.basketschool.ch'}>
              <Image
                src={logo}
                height={'100%'}
                mx={'xs'}
                my={'xs'}
              />
            </Anchor>
          </AspectRatio>
          <Title order={2} my={'xl'} align={'left'}>BASKETSCHOOL SIRNACH</Title>
          <Text align={'left'}>
            <Anchor href={'mailto:kontakt@basketschool.ch'} underline={false} mx={'2px'} c={'black'} weight={700}>
              <ThemeIcon mr={'xs'} variant={'outline'} c={'black'}>
                <Mail />
              </ThemeIcon>
              kontakt@basketschool.ch
            </Anchor>
          </Text>
          <Text align={'left'}>
            <Anchor href={'http://www.basketschool.ch'} underline={false} mx={'2px'} c={'black'} weight={700}>
              <ThemeIcon mr={'xs'} variant={'outline'} c={'black'}>
                <WorldWww />
              </ThemeIcon>
              www.basketschool.ch
            </Anchor>
          </Text>
        </Grid.Col>
        <Grid.Col md={3} sm={3} mx={'lg'} align={'left'}>
          <Title order={2} ml={'sm'}>SITEMAP</Title>
          <Box w={'100%'}>
            <Link to={'/'}>
              <NavLink
                label={'Home'}
                c={'black'}
                component={'a'}
                href={'/'}
                sx={() => ({
                  '&:hover': {
                    backgroundColor: '#E6F9FF',
                  }
                })
                }>
              </NavLink>
            </Link>
            <NavLink
              label={'Infos'}
              childrenOffset={'lg'}
              c={'black'}
              component={'a'}
              href={'/infos'}
              sx={() => ({
                '&:hover': {
                  backgroundColor: '#E6F9FF',
                }
              })
              }>
              <Link to={'/infos/geschichte'}>
                <NavLink
                  label={'Geschichte'}
                  c={'black'}
                  component={'a'}
                  href={'/infos/geschichte'}
                  sx={() => ({
                    '&:hover': {
                      backgroundColor: '#E6F9FF',
                    }
                  })
                  }>
                </NavLink>
              </Link>
              <Link to={'/infos/vorstand'}>
                <NavLink
                  label={'Vorstand'}
                  c={'black'}
                  component={'a'}
                  href={'/infos/vorstand'}
                  sx={() => ({
                    '&:hover': {
                      backgroundColor: '#E6F9FF',
                    }
                  })
                  }>
                </NavLink>
              </Link>
              <Link to={'/infos/trainer'}>
                <NavLink
                  label={'Trainer/innen'}
                  c={'black'}
                  component={'a'}
                  href={'infos/trainer'}
                  sx={() => ({
                    '&:hover': {
                      backgroundColor: '#E6F9FF',
                    }
                  })
                  }>
                </NavLink>
              </Link>
              <Link to={'/infos/hallen'}>
                <NavLink
                  label={'Hallen'}
                  c={'black'}
                  component={'a'}
                  href={'infos/hallen'}
                  sx={() => ({
                    '&:hover': {
                      backgroundColor: '#E6F9FF',
                    }
                  })
                  }>
                </NavLink>
              </Link>
              <Link to={'/infos/neumitglied'}>
                <NavLink
                  label={'Mitglied werden'}
                  c={'black'}
                  component={'a'}
                  href={'/infos/neumitglied'}
                  sx={() => ({
                    '&:hover': {
                      backgroundColor: '#E6F9FF',
                    }
                  })
                  }>
                </NavLink>
              </Link>
            </NavLink>
            <Link to={'/partners'}>
              <NavLink
                label={'Sponsoren'}
                c={'black'}
                component={'a'}
                href={'partners'}
                sx={() => ({
                  '&:hover': {
                    backgroundColor: '#E6F9FF',
                  }
                })
                }>
              </NavLink>
            </Link>
            <Link to={'/kontakt'}>
              <NavLink
                label={'Kontakt'}
                c={'black'}
                component={'a'}
                href={'/kontakt'}
                sx={() => ({
                  '&:hover': {
                    backgroundColor: '#E6F9FF',
                  }
                })
                }>
              </NavLink>
            </Link>
          </Box>
        </Grid.Col>
        <Grid.Col md={4} sm={6}>
          <Box align={'center'}>
            <Blockquote cite={'- Thomas Frischknecht, Vereinspräsident Basketschool Sirnach'}>
              Lerne die Grundlagen oder verbessere dein Spiel
            </Blockquote>
          </Box>
        </Grid.Col>
      </Grid>
      <Title order={4} align={'center'}>&copy; 2025 Basketschool Sirnach</Title>
      <Text align={'center'} size={'sm'}>Engineering and Design by</Text>
      <Text align={'center'} pb={'lg'}><Anchor c={'black'} href={'https://github.com/davorluc'} underline={false}>Davor Lucic</Anchor> and <Anchor href={'https://github.com/FadilSmajilbasic'} underline={false} c={'black'}>Fadil Smajilbasic</Anchor></Text>
    </div>
  )
}

export default Footer;
