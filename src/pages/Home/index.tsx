// React imports here
import { useEffect, useRef } from 'react';

// Mantine Imports here
import {
  Grid,
  Center,
  Divider,
  Button,
  Card,
  Image,
  Space,
  createStyles,
  Paper,
  Text,
  Badge,
  Group,
  rem,
  Title,
  AspectRatio
} from "@mantine/core";
import { Carousel } from '@mantine/carousel';
import Autoplay from "embla-carousel-autoplay";

// AOS Import
import AOS from 'aos';

// Image Imports here
import bear1 from '../../media/bears/bc_bears_realistic_effect.png';
import bear2 from '../../media/bears/black_bear_realistic_second.png';
import whole from '../../media/teams/all.jpeg'
import first from '../../media/beachphoto.jpg'
import second from '../../media/DV.jpg'
import third from '../../media/teams/senioren.jpg'
import logo from '../../media/wil_basktetball_small.png'
import hostpoint from '../../media/sponsors/logo_hostpoint_orig.png';
import velopeter from '../../media/sponsors/logo_velopeter_ohne_weiss.png';
import apotheke from '../../media/sponsors/logo_apotheke.png';
import swissInsurance from '../../media/sponsors/Logo_swissinsuranceag_04.png';
import raiffeisen from '../../media/sponsors/Raiffeisen_Schweiz_Logo.svg.png';
import fitness4all from '../../media/sponsors/logo_fitness4all_02.png';


// Stylesheet imports here
import './styles.css';
import 'aos/dist/aos.css'
import { render } from 'react-dom';



function Home() {

  const upNextData = [
    { image: first, title: 'Sommerferien!', datetime: '05.07.2024 - 12.08.2024', content: 'Die Saison neigt sich dem Ende, darum wünschen wir allen Spielern und Eltern unserer Spieler einen erholsamen Sommer!' },
    { image: first, title: 'Sommerferien!', datetime: '05.07.2024 - 12.08.2024', content: 'Die Saison neigt sich dem Ende, darum wünschen wir allen Spielern und Eltern unserer Spieler einen erholsamen Sommer!' },
    { image: first, title: 'Sommerferien!', datetime: '05.07.2024 - 12.08.2024', content: 'Die Saison neigt sich dem Ende, darum wünschen wir allen Spielern und Eltern unserer Spieler einen erholsamen Sommer!' },
  ];

  const renderUpNextData = upNextData.map((event) => (
    <Grid.Col md={4} sm={6}>
      <Card shadow={'sm'} radius={'md'}>
        <Card.Section>
          <AspectRatio ratio={2048 / 1357}>
            <Image
              src={event.image}
              height={'100%'}
              alt={'first'}
              fit={'fill'}
            />
          </AspectRatio>
          <Group position={'apart'} m={'md'}>
            <Text weight={500}>{event.title}</Text>
            <Badge color={'blue'} variant={'light'}>
              {event.datetime}
            </Badge>
          </Group>
          <Text size={'sm'} color={'dimmed'} mx={'lg'} maw={'60ch'} my={'sm'}>
            {event.content}
          </Text>
        </Card.Section>
      </Card>
    </Grid.Col>
  ));

  const sponsorData = [
    { image: hostpoint, link: 'https://www.hostpoint.ch/', alternativeText: 'Hostpoint Logo' },
    { image: velopeter, link: 'https://velopeter.ch/', alternativeText: 'Velopeter Logo' },
    { image: apotheke, link: 'http://www.gate24.ch/de/Beauty+Wellness-13/Sirnach/Apotheke-Sirnach-Dr--R--Krahenmann/detail-2951248-2940210.aspx', alternativeText: 'Dr. Krähemann Apotheke Logo' },
    { image: swissInsurance, link: 'https://www.swiss-insurance-ag.ch/', alternativeText: 'Swiss Insurance Logo' },
    { image: raiffeisen, link: 'https://www.raiffeisen.ch/regio-sirnach/de.html', alternativeText: 'Raiffaisen Logo' },
    { image: fitness4all, link: 'http://www.fitness4all.ch/', alternativeText: 'Fitness4All Logo' }
  ];

  const renderSponsors = sponsorData.map((sponsor) => (
    <Grid.Col sm={6} md={4}><a href={sponsor.link}><img src={sponsor.image} alt={sponsor.alternativeText} /></a></Grid.Col>
  ))

  useEffect(() => {
    AOS.init({ duration: 1000 })
  });

  const autoplay = useRef(Autoplay({ delay: 6000 }));

  const useStyles = createStyles((theme) => ({
    card: {
      height: rem(440),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },

    title: {
      fontWeight: 900,
      textShadow: '2px 2px #ffffff',
      color: '#1B1A55',
      lineHeight: 1.2,
      fontSize: rem(50),
      marginTop: theme.spacing.xs,
    },
  }));

  interface CardProps {
    image: string;
    title: string;
  }

  function Hero({ image, title }: CardProps) {
    const { classes } = useStyles();

    return (
      <AspectRatio ratio={2 / 1}>
        <Paper
          p="xl"
          radius={0}
          sx={{
            backgroundImage: `url(${image})`,
            backgroundSize: '100% 100%'
          }}
          className={classes.card}
        >
          <div>
            <Title order={1} className={classes.title} my='xl'>
              {title}
            </Title>
          </div>
          <Button variant="white" color="dark" my='xl'>
            Read article
          </Button>
        </Paper>
      </AspectRatio>
    );
  }

  const data = [
    {
      image: whole,
      title: 'Willkommen beim BC Bears Wil!',
    },
    {
      image: bear1,
      title: 'Worauf wartest du noch? Melde dich hier an!',
    },
    {
      image: bear2,
      title: 'Geschichte',
    },
    {
      image: whole,
      title: 'shop',
    },
  ];

  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Hero {...item} />
    </Carousel.Slide>
  ));

  return (
    <Center>
      <div>
        <div className={'main'}>
          <Space h='xl' />
          <div className='carousel'>
            <Carousel slideSize={'100%'}
              height={'xl'}
              withIndicators
              withControls={false}
              plugins={[autoplay.current]}
              onMouseEnter={autoplay.current.stop}
              onMouseLeave={autoplay.current.reset}
              loop
              styles={{
                indicator: {
                  width: rem(12),
                  height: rem(4),
                  transition: 'width 250ms ease',

                  '&[data-active]': {
                    width: rem(40),
                  },
                },
              }}
            >
              {slides}
            </Carousel>
          </div>
          <div className='next'>
            <div className={'next-title'}>
              <Title order={1} align={'center'} mb={'xl'} c='white' pt='xl'>Wichtige Termine</Title>
            </div>
            <div className='next-description'>
              <Text c='white' mx='7%' mb='xl' size='xl'>Hier finden unsere Spieler und deren Eltern die nächsten wichtigen Termine. Von Spezialtrainings bis hin zu geplanten Trainingsausfällen durch andersweitige Hallenbesetzungen findet Ihr hier alles. Diese Sammlung wird regelmässig gepflegt, sodass ihr sicherlich keine wichtigen Infos verpasst. Bei Unklarheiten könnt ihr euch jederzeit bei einem der Trainer auf Whatsapp melden.</Text>
            </div>
            <div className={'next-content'}>
              <Grid justify={'center'} align={'center'} mx={'lg'} pb='xl'>
                {renderUpNextData}
              </Grid>
            </div>
          </div>
          <Divider my='xl' mx='7%' />
          <div className={'sponsors-title'}>
            <Title order={1} align={'center'} my={'xl'}>Unsere Sponsoren</Title>
          </div>
          <div className='sponsor-images grid'>
            <Grid justify='center' align='center' pb={'xl'}>
              {renderSponsors}
            </Grid>
          </div>
        </div>
      </div>
    </Center>
  );
}
export default Home;
