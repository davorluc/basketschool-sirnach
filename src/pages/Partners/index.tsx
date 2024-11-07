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
  Image
} from '@mantine/core'

// Image imports
import hostpoint from '../../media/sponsors/logo_hostpoint_orig.png';
import velopeter from '../../media/sponsors/logo_velopeter_ohne_weiss.png';
import apotheke from '../../media/sponsors/logo_apotheke.png';
import swissInsurance from '../../media/sponsors/Logo_swissinsuranceag_04.png';
import raiffeisen from '../../media/sponsors/Raiffeisen_Schweiz_Logo.svg.png';
import fitness4all from '../../media/sponsors/logo_fitness4all_02.png';

import './index.css';

function Partners() {
  const mainSponsor = [
    { image: hostpoint, description: 'Der führende Schweizer Web-hosting Anbieter und ausserdem unser Partner für alles rund ums Hosting. Eine Portion Hosting gefällig? - Mit Hostpoint macht man nichts falsch!', name: 'Hostpoint', link: 'https://www.hostpoint.ch' },
    { image: velopeter, description: 'Velopeter - langjähriger Fahrrad-Spezialist in Sirnach. Wir empfehlen unseren Spielern falls möglich zu Fuss oder mit dem Velo zu kommen. Beim Velo kann euch der Velopeter sicher aushelfen!', name: 'Velopeter', link: 'https://velopeter.ch/' },
    { image: apotheke, description: 'Langjährige Apotheke des Vertrauens in Sirnach, auch perfekt geeignet für Mittel gegen Sportverletzungen. Knöchel umgeknickst? Kein Problem, die Apotheke Krähenmann regelt das schon!', name: 'Apotheke Krähenmann', link: 'http://www.gate24.ch/de/Beauty+Wellness-13/Sirnach/Apotheke-Sirnach-Dr--R--Krahenmann/detail-2951248-2940210.aspx' },
    { image: swissInsurance, description: 'Seit 20 Jahren Versicherungsanbieter im Thurgau. Egal ob Versicherung, Pensionskasse oder Pensions Planung, Hypotheken, Beratungen und Krankenkasse, bei Swiss Insurance ist sicher was für alle dabei!', name: 'Swiss Insurance AG', link: 'https://www.swiss-insurance-ag.ch/' },
    { image: raiffeisen, description: 'Seit über 100 Jahren national wie auch lokal gut vertreten. 1900 schon eine Genossenschaft, 2024 noch eine Genosschenschaft. Die Raiffeisen Bank ist unsere Bank des Vertrauens. ', name: 'Raiffeisen', link: 'https://www.raiffeisen.ch/regio-sirnach/de.html' },
    { image: fitness4all, description: 'Auch der Kraftraum gehört zum Arsenal eines Basketballers. Mehr Sprungkraft, schnellerer Sprint und stabilere Gelenke gehören auch zum Besserwerden. Schaut doch mal bei unserem Fitnesspartner vorbei!', name: 'Fitness4all', link: 'http://www.fitness4all.ch/' }
  ];

  const mainSponsorContent = mainSponsor.map((entry) => (
    <Grid.Col md={4} sm={6}>
      <Card shadow={'sm'} radius={'md'} component={'a'} href={entry.link}>
        <Card.Section my={'xl'}>
          <AspectRatio ratio={35 / 12}>
            <Image
              src={entry.image}
              fit={'contain'}
              p={'xl'}
            />
          </AspectRatio>
          <Title order={3} mx={'xl'}>
            {entry.name}
          </Title>
          <Text size={'sm'} color={'dimmed'} mx={'lg'} maw={'60ch'} my={'sm'}>
            {entry.description}
          </Text>
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
          <Grid mx={'xl'} mt={'xl'} className={'main-sponsors-grid'}>
            {mainSponsorContent}
          </Grid>
        </div>
        <Divider m='xl' />
        <div className='main-sponsors'>
          <Title order={1} c='#1B1A55' mx='8%'>Andere Partner und Links</Title>
        </div>
        <Divider m='xl' />
      </div>
    </div>
  );
}

export default Partners;
