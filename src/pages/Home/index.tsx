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
  Container,
  Text,
  Badge,
  Group,
  rem,
  Title,
  AspectRatio
} from "@mantine/core";

// AOS Import
import AOS from 'aos';

// Image Imports here
import first from '../../media/beachphoto.jpg'
import second from '../../media/DV.jpg'
import third from '../../media/teams/senioren.jpg'
import logo from '../../media/basketschool_sirnach_alternatelogo_withwhite.png'
import hostpoint from '../../media/sponsors/logo_hostpoint_orig.png';
import velopeter from '../../media/sponsors/logo_velopeter_ohne_weiss.png';
import swissInsurance from '../../media/sponsors/Logo_swissinsuranceag_04.png';
import cubeless from '../../media/sponsors/cubeless_logo_rgb_500px_transp Juli 2023.png'


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
    { image: swissInsurance, link: 'https://www.swiss-insurance-ag.ch/', alternativeText: 'Swiss Insurance Logo' },
    { image: cubeless, link: 'https://www.cubeless.ch/?adwords_ch_ged-pmax_all&adgr=adwords_&gad_source=1&gclid=CjwKCAiAudG5BhAREiwAWMlSjAgbs5MO4ynpaSh-RCKBNLcmDRxP4nPq10uXusf_ULQvMMJeaHyg_RoCXVgQAvD_BwE', alternativeText: 'Cubeless Logo' }
  ];

  const sponsorSlider = sponsorData.map((sponsor, index) => (
    <div
      className="item"
      style={{
        '--position': index
      }}
      key={index}
    >
      <a href={sponsor.link}>
        <img src={sponsor.image} alt={sponsor.alternativeText} />
      </a>
    </div>
  ))

  useEffect(() => {
    AOS.init({ duration: 1000 })
  });

  return (
    <Center>
      <div>
        <div className={'main'}>
          <Space h='xl' />
          <Center className={'hero'}>
            <Card className={'hero-card'} shadow={'lg'} radius={'lg'} withBorder style={{ backgroundColor: '#1b1a55' }} mx={'10%'}>
              <Card.Section p={'xl'}>
                <Title order={1} c={'white'}>
                  Willkommen bei der Basketschool Sirnach!
                </Title>
              </Card.Section>
              <Text c={'white'} p={'xl'} size={'xl'}>
                Bei uns dreht sich alles um Spass am Basketball! In der Basketschool Sirnach lernen Kinder und Jugendliche spielerisch die Grundlagen des Basketballs, verbessern ihre Fähigkeiten und erleben Teamgeist hautnah. Komm vorbei und entdecke, wie viel Freude das Training machen kann!
              </Text>
              <Card.Section>
                <Button variant={'white'} color={'indigo'} radius={'md'} mx={'xl'} mb={'xl'} component={'a'} href={'/infos/neumitglied'}>
                  Hier zur Anmeldung!
                </Button>
              </Card.Section>
            </Card>
            <img id='hero-logo' className={"ball"} src={logo} />
          </Center>
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
          <Divider mb='xl' mx='7%' />
          <div className={'sponsors-title'}>
            <Title order={1} align={'center'} my={'xl'}>Unsere Sponsoren</Title>
          </div>
          <div className={'sponsor-slider'}>
            <div className={'sponsor-list'}>
              {sponsorSlider}
            </div>
          </div>
        </div>
      </div>
    </Center>
  );
}
export default Home;
