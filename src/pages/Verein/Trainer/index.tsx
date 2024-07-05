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
    Box,
    AspectRatio,
    Grid,
    Card
} from '@mantine/core'

// Image imports
import davor from '../../../media/portraits/davor.jpeg'
import placeholder from '../../../media/placeholder_person.jpeg'

// Icon imports
import { Phone, Mail } from 'tabler-icons-react'

function Trainer () {
    const trainers = [
    { image: davor, name: 'Davor', selection: 'Knaben/Mädchen', email: 'd.lucic4@hotmail.com', tel: '+41791795801' },
    { image: placeholder, name: 'Thomas', selection: 'Knaben/Mädchen', email: '*email*', tel: '*tel*' },
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
                        <Title c='#1B1A55' order={2}>{trainer.name}</Title>
                        <Badge color='blue' variant='light'>{trainer.selection}</Badge>
                    </Group>
                    <Stack spacing='xs' mt='lg'>
                        <Text c='dimmed' component='a' href={`mailto:${trainer.email}`} mx='lg'><ThemeIcon mx='sm' color='blue' variant='light'><Mail /></ThemeIcon>{trainer.email}</Text>
                        <Text c='dimmed' component='a' href={`tel:${trainer.tel}`} mx='lg' mb='md'><ThemeIcon mx='sm' color='blue' variant='light'><Phone /></ThemeIcon>{trainer.tel}</Text>
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
                <Box mx={'7%'} mt={'4%'} sx={() => ({
                    backgroundColor: '#1B1A55',
                    borderRadius: '7px'
                })}>
                    <Title order={1} mt={'xl'} mx={'xl'} c={'white'}>
                        Trainer 
                    </Title>
                </Box>
                <div className='trainers-grid'>
                    <Grid gutter={30} mx='8%' my={'xl'}>
                    {renderTrainers}
                    </Grid>
                </div>
            </div>
        </div>
    );
}

export default Trainer;
