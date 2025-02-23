//@ts-nocheck

// React Imports
import { Link } from 'react-router-dom'


// Mantine Imports
import {
  Grid,
  Image,
  AspectRatio,
  Space,
  Card,
  Title,
} from '@mantine/core';

// Stylesheets Import
import './index.css';

// Image Imports
import geschichte from '../../media/basketschool_sirnach_alternatelogo.png';
// import vorstand from
// import trainer from
// import hallen from
// import mitglied from

function Verein() {
  const vereinData = [
    { image: geschichte, title: 'Wann & Wo', link: '/infos/hallen' },
    { image: geschichte, title: 'Mitglied werden', link: '/infos/neumitglied' },
    { image: geschichte, title: 'Trainer', link: '/infos/trainer' },
    { image: geschichte, title: 'Vorstand', link: '/infos/vorstand' },
    { image: geschichte, title: 'Geschichte', link: '/infos/geschichte' }
  ];

  const renderVereinData = vereinData.map((entry) => (
    <Grid.Col md={4} sm={6}>
      <Link to={entry.link}>
        <Card shadow={'sm'} radius={'md'} style={{ backgroundColor: "#F0F0F0" }}>
          <Card.Section p={'xl'}>
            <AspectRatio ratio={1 / 1} p={'xl'}>
              <Image
                src={entry.image}
                height={'100%'}
                alt={'first'}
                fit={'fill'}
              />
            </AspectRatio>
            <Title m={'xl'} p={'xl'} align={'center'} order={2} c={'#1B1A55'}>{entry.title}</Title>
          </Card.Section>
        </Card>
      </Link>
    </Grid.Col>
  ))

  return (
    <div>
      <div className={'main'}>
        <Space h={'xl'} />
        <Space h={'xl'} />
        <div className={'header'}>
          <Title order={1} my={'xl'} mx={'7%'} c='#1B1A55' align={'left'}>Infos</Title>
        </div>
        <div className={'verein-grid'}>
          <Grid my={'xl'} align={'center'} justify={'center'} mx={'xl'} gutter={30}>
            {renderVereinData}
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Verein;
