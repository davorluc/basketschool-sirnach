// Mantine imports
import {
  Space,
  Text,
  Grid,
  Container,
  Stack,
  Card,
  AspectRatio,
  Title,
  Box,
  Divider,
  Spoiler,
  Image
} from '@mantine/core'

// Image imports
import hostpoint from '../../media/sponsors/logo_hostpoint_orig.png';
import velopeter from '../../media/sponsors/logo_velopeter_ohne_weiss.png';
import swissInsurance from '../../media/sponsors/Logo_swissinsuranceag_04.png';
import cubeless from '../../media/sponsors/cubeless_logo_rgb_500px_transp Juli 2023.png';
import bcbears from '../../media/teams/u14.jpeg';
import frauenfeld from '../../media/frauenfeld.jpg';
import swissbasket from '../../media/Swiss_Basketball_logo.png';
import sbb from '../../media/sbb.png';

import './index.css';

function Partners() {
  const mainSponsor = [
    { image: hostpoint, description: 'Der führende Schweizer Web-hosting Anbieter und ausserdem unser Partner für alles rund ums Hosting. Eine Portion Hosting gefällig? - Mit Hostpoint macht man nichts falsch!', name: 'Hostpoint', link: 'https://www.hostpoint.ch' },
    { image: velopeter, description: 'Velopeter - langjähriger Fahrrad-Spezialist in Sirnach. Wir empfehlen unseren Spielern falls möglich zu Fuss oder mit dem Velo zu kommen. Beim Velo kann euch der Velopeter sicher aushelfen!', name: 'Velopeter', link: 'https://velopeter.ch/' },
    { image: swissInsurance, description: 'Swiss Insurance – Ihre unabhängige Versicherungsberatung – gibt Ihnen Antworten auf Ihre Versicherungsfragen.Wir finden die ideale Form Ihrer Vorsorge. Wir prüfen, koordinieren und verwalten auf Wunsch Ihr gesamtes Versicherungsportfolio auf Mandatsbasis. Ob Sachversicherungen oder Lebensversicherungen, wir behalten den Überblick!', name: 'Swiss Insurance Ostschweiz', link: 'https://www.swi-brokers.ch' },
    { image: cubeless, description: 'Auf cubeless.ch erwartet dich ein ausgesuchtes Sortiment an verschiedensten Speedcubes, Shape Mods und passendem Zubehör. Da ist auf jeden Fall der passende Speedcube für dich dabei, egal ob du Anfänger oder Profi bist.', name: 'Cubeless', link: 'https://www.cubeless.ch/' }
  ];

  const otherRefsData = [
    { image: bcbears, description: 'Unser guter Freund aus dem nahegelegenden Wil. Als einer der grösseren Vereine in der Region bieten sie vom regulärem Schulalter bis zu den Senioren alles an.', name: 'BC Bears Wil', link: 'https://bcbears.ch/' },
    { image: frauenfeld, description: 'Seit Anbeginn der Basketschool Sirnach war der Basketball Club in Frauenfeld eines der Vereine unseres Vertrauen. CVJM Frauenfeld ist schon jahrelanger Basketball-Riese der Ostschweiz.', name: 'CVJM Frauenfeld', link: 'https://basket-frauenfeld.ch/home' },
    { image: swissbasket, description: 'Der offizielle Schweizer Basketballverbund - Hier findet ihr alles um den Schweizer Basketball: von Events zu Informationen. Schaut doch mal rein!', name: 'Swiss Basketball', link: 'https://swiss.basketball/' },
    { image: sbb, description: 'Für unsere Spieler die etwas weiter weg wohnen und mit dem ÖV anreisen müssen, empfehlen wir euch bei der SBB zu erkundigen. Egal ob per Webseite oder per App, so findest du bestimmt zu uns!', name: 'SBB', link: 'https://www.sbb.ch/de' },
  ];

  const mainSponsorContent = mainSponsor.map((entry) => (
    <Grid.Col md={4} sm={6}>
      <Card shadow={'sm'} radius={'md'}>
        <Card.Section my={'xl'}>
          <AspectRatio ratio={35 / 12}>
            <Image
              src={entry.image}
              fit={'fill'}
              p={'xl'}
              component={'a'}
              href={entry.link}
            />
          </AspectRatio>
          <Title order={3} mx={'xl'}>
            {entry.name}
          </Title>
          <Spoiler showLabel={'mehr'} hideLabel={'weniger'} maxHeight={50} mx={'lg'}>
            <Text size={'sm'} color={'dimmed'} my={'md'}>
              {entry.description}
            </Text>
          </Spoiler>
        </Card.Section>
      </Card>
    </Grid.Col>
  ));

  const otherRefs = otherRefsData.map((entry) => (
    <Grid.Col md={4} sm={6}>
      <Card shadow={'sm'} radius={'md'}>
        <Card.Section my={'xl'}>
          <AspectRatio ratio={35 / 15}>
            <Image
              src={entry.image}
              fit={'fill'}
              component={'a'}
              href={entry.link}
            />
          </AspectRatio>
          <Title order={3} mx={'xl'} mt={'md'}>
            {entry.name}
          </Title>
          <Spoiler showLabel={'mehr'} hideLabel={'weniger'} maxHeight={50} mx={'lg'}>
            <Text size={'sm'} color={'dimmed'} my={'sm'}>
              {entry.description}
            </Text>
          </Spoiler>
        </Card.Section>
      </Card>
    </Grid.Col>
  ));


  return (
    <div className="main">
      <div>
        <Space h={'xl'} />
        <Space h={'xl'} />
        <Box
          mx={'7%'}
          c={'white'}
          my={'xl'}
          sx={() => ({
            backgroundColor: '#1B1A55',
            borderRadius: '7px'
          })
          }>
          <Title mx={'xl'} order={1}>Sponsoren</Title>
        </Box>
        <div className='main-sponsors'>
          <Title order={1} c='#1B1A55' mx='8%'>Hauptsponsoren</Title>
          <Grid mx={'xl'} mt={'xl'} className={'sponsors-grid'}>
            {mainSponsorContent}
          </Grid>
        </div>
        <Divider m='xl' />
        <div className='main-sponsors'>
          <Title order={1} c='#1B1A55' mx='8%'>Nützliche Links</Title>
          <Grid mx={'xl'} my={'xl'} className={'sponsors-grid'}>
            {otherRefs}
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Partners;
