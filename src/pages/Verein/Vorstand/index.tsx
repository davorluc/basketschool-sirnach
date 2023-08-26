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
    Text,
    Title
} from '@mantine/core'

// Image imports
import miki from '../../../media/portraits/miki.jpeg'
import alex from '../../../media/portraits/alex.jpeg'
import vreni from '../../../media/portraits/vreni.jpeg'
import ivana from '../../../media/portraits/ivana.jpeg'
import christian  from '../../../media/portraits/christian.jpeg'
import daniel from '../../../media/portraits/daniel.jpeg'

function Vorstand () {
    const board = [
        { img: miki, name: 'Miodrag Manojlovic', role: 'Präsident', email:'*email*', tel:'+41799533413' },
        { img: alex, name: 'Alexander Manzan', role: 'Vize-Vereinspr.', email:'*email*', tel:'+41799159823' },
        { img: vreni, name: 'Vreni Nachname', role: 'k/a', email:'*email*', tel:'*tel*' },
        { img: ivana, name: 'Ivana Manojlovic', role: 'Finanzen', email:'*email*', tel:'*tel*' },
        { img: christian, name: 'Christian Nachname', role: 'k/a', email:'*email*', tel:'+41796826517' },
        { img: daniel, name: 'Daniel Brüschweiler', role: 'k/a', email:'*email*', tel:'+41788901535' },
    ]

    const renderBoard = board.map((member) => (
        <Grid.Col sm={6} md={4} xl={3}>
            <Card shadow='md' radius='md' mb='xl'>
                <Card.Section>
                    <AspectRatio ratio={6/8}>
                        <Image
                            src={member.img}
                        />
                    </AspectRatio>
                    <Group position='apart' mx='md' my='xs' noWrap={true}>
                        <Title c='#189940' order={2}>{member.name}</Title>
                        <Badge color='green' variant='light'>{member.role}</Badge>
                    </Group>
                    <Stack spacing='xs' mt='lg'>
                        <Text c='dimmed' component='a' href={`mailto:${member.email}`} mx='lg'>{member.email}</Text>
                        <Text c='dimmed' component='a' href={`tel:${member.tel}`} mx='lg' mb='md'>{member.tel}</Text>
                    </Stack>
                </Card.Section>
            </Card>
        </Grid.Col>
    ));
    return (
        <div>
            <div className={'main'}>
                <Space h={'xl'}/>
                <Space h={'xl'}/>
                <Title c={'#189940'} order={1} mt={'xl'} mx={'7%'}>Vorstand</Title>
                <div className='board-grid'>
                    <Grid mx='8%' gutter={30}>
                        {renderBoard}
                    </Grid>
                </div>
            </div>
        </div>
    );
}

export default Vorstand;
