// Mantine imports
import {
    Space,
    Box,
    Image,
    ThemeIcon,
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
import placeholder from '../../../media/placeholder_person.jpeg'

// Icon imports
import { Phone, Mail } from 'tabler-icons-react'

function Vorstand () {
    const board = [
        { img: placeholder, name: 'Thomas Frischknecht', role: 'Präsident', email:'*email*', tel:'*tel*' },
        { img: placeholder, name: 'Pascal Ghirardi', role: 'VP', email:'*email*', tel:'*tel*' },
        { img: placeholder, name: 'Kevin Rubin', role: 'Kassier', email:'*email*', tel:'*tel*' },
        { img: placeholder, name: 'Niklaus Engi', role: 'Aktuar', email:'*email*', tel:'*tel*' },
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
                        <Title c='#1B1A55' order={2}>{member.name}</Title>
                        <Badge color='blue' variant='light'>{member.role}</Badge>
                    </Group>
                    <Stack spacing='xs' mt='lg'>
                        <Text c='dimmed' component='a' href={`mailto:${member.email}`} mx='lg'><ThemeIcon mx='sm' color='blue' variant='light'><Mail /></ThemeIcon>{member.email}</Text>
                        <Text c='dimmed' component='a' href={`tel:${member.tel}`} mx='lg' mb='md'><ThemeIcon mx='sm' color='blue' variant='light'><Phone /></ThemeIcon>{member.tel}</Text>
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
