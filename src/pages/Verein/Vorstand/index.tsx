// Mantine imports
import {
  Space,
  Box,
  Image,
  AspectRatio,
  Stack,
  Group,
  Badge,
  Card,
  Grid,
  Title
} from '@mantine/core'

// Image imports
import placeholder from '../../../media/basketschool_sirnach_alternatelogo_withwhite.png';

function Vorstand() {
  const board = [
    { img: placeholder, name: 'Thomas Frischknecht', role: 'Präsident' },
    { img: placeholder, name: 'Pascal Ghirardi', role: 'Vizepräsident' },
    { img: placeholder, name: 'Kevin Rubin', role: 'Kassier' },
    { img: placeholder, name: 'Niklaus Engi', role: 'Aktuar' },
  ]

  const renderBoard = board.map((member) => (
    <Grid.Col sm={6} md={4} xl={3}>
      <Card shadow='md' radius='md' mb='xl'>
        <Card.Section>
          <AspectRatio ratio={10 / 12}>
            <Image
              src={member.img}
              p={'xs'}
              fit={'contain'}
            />
          </AspectRatio>
          <Group position='apart' mx='md' my='xs' noWrap={true}>
            <Title c='#1B1A55' order={2}>{member.name}</Title>
          </Group>
          <Stack spacing='xs' mt='lg'>
            <Badge color='blue' variant='light' m={'xs'}>{member.role}</Badge>
          </Stack>
        </Card.Section>
      </Card>
    </Grid.Col>
  ));
  return (
    <div>
      <div className={'main'}>
        <Space h={'xl'} />
        <Space h={'xl'} />
        <Box mx={'7%'} mt={'4%'} sx={() => ({
          backgroundColor: '#1B1A55',
          borderRadius: '7px'
        })}>
          <Title order={1} mt={'xl'} mx={'xl'} c={'white'}>
            Vorstand
          </Title>
        </Box>
        <div className='board-grid'>
          <Grid mx='8%' mb='xl' gutter={30}>
            {renderBoard}
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Vorstand;
