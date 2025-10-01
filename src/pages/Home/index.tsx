// @ts-nocheck

// React imports here
import { useEffect } from 'react';
import { Link } from 'react-router-dom'

// Mantine Imports here
import {
  Grid,
  Center,
  Divider,
  Button,
  Card,
  Image,
  Space,
  Flex,
  Anchor,
  Text,
  Badge,
  Group,
  Spoiler,
  Title,
  AspectRatio
} from "@mantine/core";

// AOS Import
import AOS from 'aos';

// Image Imports here
import summer from '../../media/beachphoto.jpg';
import christmas from '../../media/christmas.jpg';
import comeback from '../../media/comeback.jpg';
import logo from '../../media/basketschool_sirnach_alternatelogo_withwhite.png';
import hostpoint from '../../media/sponsors/logo_hostpoint_orig.png';
import velopeter from '../../media/sponsors/logo_velopeter_ohne_weiss.png';
import swissInsurance from '../../media/sponsors/Logo_swissinsuranceag_04.png';
import cubeless from '../../media/sponsors/cubeless_logo_rgb_500px_transp Juli 2023.png';
import wilhelmsprot from '../../media/sponsors/wilhelmsportlogo.png';
import raiffeisen from '../../media/sponsors/Raiffeisen_Schweiz_Logo.svg.png';
import flyer from '../../assets/flyer.pdf';
import autumn from 'http://static.photos/sport/1200x630/79';


// Stylesheet imports here
import './styles.css';
import 'aos/dist/aos.css'



function Home() {

  const upNextData = [
    { image: summer, title: 'Sommerferien!', datetime: '05.07.2025 - 12.08.2025', content: 'Die Saison neigt sich dem Ende, darum wünschen wir allen Spielern und Eltern unserer Spieler einen erholsamen Sommer!' },
    { image: 'http://static.photos/sport/640x360/79', title: 'Herbstferien Trainigstage', datetime: '06/07.10.25 & 09/10.10.25', content: 'Die Basketschool bietet Trainingstage in den Herbstferien an. Für mehr Informationen, siehe Flyer unten.', file: flyer },
  ];

  const renderUpNextData = upNextData.map((event) => (
    <Card shadow={'sm'} radius={'md'}>
      <Card.Section>
        <AspectRatio ratio={2048 / 1357}>
          <Image
            src={event.image}
            height={'100%'}
            width={'100%'}
            alt={'first'}
            fit={'cover'}
            class={'card-img'}
          />
        </AspectRatio>
        <Group position={'apart'} m={'md'}>
          <Text weight={500}>{event.title}</Text>
          <Badge color={'blue'} variant={'light'}>
            {event.datetime}
          </Badge>
        </Group>
        <Text size={'sm'} ml={'md'} color={'dimmed'} maw={'60ch'} my={'sm'}>
          {event.content}
        </Text>
        {event.file && <Anchor ml={'md'} pb={'md'} href={event.file}>Flyer öffnen</Anchor>}
      </Card.Section>
    </Card>
  ));

  const sponsorData = [
    { image: hostpoint, link: 'https://www.hostpoint.ch/', alternativeText: 'Hostpoint Logo' },
    { image: velopeter, link: 'https://velopeter.ch/', alternativeText: 'Velopeter Logo' },
    { image: swissInsurance, link: 'https://www.swiss-insurance-ag.ch/', alternativeText: 'Swiss Insurance Logo' },
    { image: wilhelmsprot, link: 'http://www.wilhelm-sport.ch/', alternativeText: 'Wilhelm Sport Logo' },
    { image: cubeless, link: 'https://www.cubeless.ch/?adwords_ch_ged-pmax_all&adgr=adwords_&gad_source=1&gclid=CjwKCAiAudG5BhAREiwAWMlSjAgbs5MO4ynpaSh-RCKBNLcmDRxP4nPq10uXusf_ULQvMMJeaHyg_RoCXVgQAvD_BwE', alternativeText: 'Cubeless Logo' },
    { image: raiffeisen, link: 'https://www.raiffeisen.ch/regio-sirnach/de.html', alternativeText: 'Raiffeisen Regio Sirnach Logo' },
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
                <Link to='/infos/neumitglied'>
                  <Button variant={'white'} color={'indigo'} radius={'md'} mx={'xl'} mb={'xl'} component={'Link'} to={'/infos/hallen'}>
                    Hier zum Training!
                  </Button>
                </Link>
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
              <Flex
                direction={{ base: 'column', sm: 'row' }}
                gap={{ base: 'sm', sm: 'lg' }}
                justify={{ sm: 'center' }}
                pb='xl'
              >
                {renderUpNextData}
              </Flex>
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
