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
    { image: hostpoint, description: 'Sponsorbeschreibung', name: 'Hostpoint', link: 'https://www.hostpoint.ch' },
    { image: velopeter, description: 'Sponsorenbeschreibung', name: 'Velopeter', link: 'https://velopeter.ch/' },
    { image: apotheke, description: 'Sponsorenbeschreibung', name: 'Apotheke Krähenmann', link: 'http://www.gate24.ch/de/Beauty+Wellness-13/Sirnach/Apotheke-Sirnach-Dr--R--Krahenmann/detail-2951248-2940210.aspx' },
    { image: swissInsurance, description: 'Sponsorenbeschreibung', name: 'Swiss Insurance AG', link: 'https://www.swiss-insurance-ag.ch/' },
    { image: raiffeisen, description: 'Sponsorenbeschreibung', name: 'Raiffeisen', link: 'https://www.raiffeisen.ch/regio-sirnach/de.html' },
    { image: fitness4all, description: 'Sponsorenbeschreibung', name: 'Fitness4all', link: 'http://www.fitness4all.ch/' }
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
