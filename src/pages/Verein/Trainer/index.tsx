// Mantine imports
import {
    Title,
    Image,
    Group,
    Stack,
    ThemeIcon,
    Space,
    Text,
    Badge,
    AspectRatio,
    Grid,
    Card
} from '@mantine/core'

// Image imports
import miki from '../../../media/portraits/miki.jpeg'
import alen from '../../../media/portraits/alen.jpeg'
import ersun from '../../../media/portraits/ersun.jpeg'
import nef from '../../../media/portraits/nef.jpeg'
import davor from '../../../media/portraits/davor.jpeg'

// Icon imports
import { Phone, Mail } from 'tabler-icons-react'

function Trainer () {
    const trainers = [
    { image: miki, name: 'Miodrag Manojlovic', selection: 'U18 Herren', email: '*email*', tel: '+41799533413' },
    { image: alen, name: 'Alen Kruljac', selection: 'U10 Mix/Herren 4. Liga', email: '*email*', tel: '+41792871834' },
    { image: ersun, name: 'Ersun Luma', selection: 'U18 Herren', email: '*email*', tel: '+41791276850' },
    { image: nef, name: 'Nefajla Fata', selection: 'U14 Damen', email: '*email*', tel: '+41789107186' },
    { image: davor, name: 'Davor Lucic', selection: 'U14 Herren/U16 Herren', email: 'd.lucic4@hotmail.com', tel: '+41791795801' },
    ]

    const renderTrainers = trainers.map((trainer) => (
        <Grid.Col sm={6} md={4} xl={3}>
            <Card shadow='md' radius='md' mb='xl'>
                <Card.Section>
                    <AspectRatio ratio={6/8}>
                        <Image
                            src={trainer.image}
                        />
                    </AspectRatio>
                    <Group position='apart' mx='md' my='xs'>
                        <Title c='#189940' order={2}>{trainer.name}</Title>
                        <Badge color='green' variant='light'>{trainer.selection}</Badge>
                    </Group>
                    <Stack spacing='xs' mt='lg'>
                        <Text c='dimmed' component='a' href={`mailto:${trainer.email}`} mx='lg'><ThemeIcon mx='sm' color='green' variant='light'><Mail /></ThemeIcon>{trainer.email}</Text>
                        <Text c='dimmed' component='a' href={`tel:${trainer.tel}`} mx='lg' mb='md'><ThemeIcon mx='sm' color='green' variant='light'><Phone /></ThemeIcon>{trainer.tel}</Text>
                    </Stack>
                </Card.Section>
            </Card>
        </Grid.Col>
        ));

    return (
        <div>
            <div className="main">
                <Space h='xl'/>
                <Space h='xl'/>
                <Title order={1} c='#189940' my='xl' mx='7%'>Trainer/Innen</Title>
                <div className='trainers-grid'>
                    <Grid gutter={30} mx='8%'>
                    {renderTrainers}
                    </Grid>
                </div>
            </div>
        </div>
    );
}

export default Trainer;
