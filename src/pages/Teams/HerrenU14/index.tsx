// React imports
import { useState } from 'react';
// Mantine Imports
import {
    Title,
    Image,
    Grid,
    Container,
    Divider,
    Overlay,
    Box,
    Card,
    Space, AspectRatio, Group, Text, Badge
} from '@mantine/core';

// Image imports
import team from '../../../media/teams/u14.jpeg';
import person from '../../../media/placeholder_person.jpeg';
import sonnenhof from '../../../media/hallen/sonnenhof.jpg';

// Stylesheet import
import './index.css';

function HerrenU14 () {
    const [halleSonnenhof, setHalleSonnenhof] = useState(true);
    return (
        <div>
            <div className={'main'}>
                <Space h={'xl'}/>
                <Space h={'xl'}/>
                <Title c={'#189940'} order={1} mt={'xl'} mx={'7%'}>Herren U14</Title>
                <div className={'team-infos'}>
                    <Container my={'lg'}>
                        <Image
                            src={team}
                            height={'100%'}
                        />
                    </Container>
                </div>
                <Divider m={'xl'}/>
                <div className={'staff'}>
                    <Box
                        mx={'7%'}
                        c={'white'}
                        my={'xl'}
                        sx={() => ({
                            backgroundColor: '#189940',
                            borderRadius: '7px'})
                        }>
                        <Title mx={'xl'} order={2}>Trainer</Title>
                    </Box>
                    <Grid mx={'8%'}>
                        <Grid.Col sm={3}>
                            <Card shadow={'md'} radius={'md'} mb={'xl'}>
                                <Card.Section>
                                    <AspectRatio ratio={600/620}>
                                        <Image
                                            src={person}
                                        />
                                    </AspectRatio>
                                    <Group position={'apart'} mx={'md'} my={'xs'}>
                                        <Title c={'#189940'} order={4}>Davor Lucic</Title>
                                        <Badge color={'green'} variant={'light'}>
                                            Herren U14/U16
                                        </Badge>
                                    </Group>
                                    <Text mx={'lg'} c={'dimmed'}>*Email*</Text>
                                    <Text mx={'lg'} mb={'md'} c={'dimmed'}>*Nummer*</Text>
                                </Card.Section>
                            </Card>
                        </Grid.Col>
                    </Grid>
                </div>
                <Divider m={'xl'}/>
                <div className={'training-infos'}>
                    <Box
                        mx={'7%'}
                        c={'white'}
                        my={'xl'}
                        sx={() => ({
                            backgroundColor: '#189940',
                            borderRadius: '7px'})
                        }>
                        <Title mx={'xl'} order={2}>Zeit und Ort der Trainings</Title>
                    </Box>
                    <Grid mx={'8%'}>
                        <Grid.Col sm={4}>
                            <Card shadow={'md'} radius={'md'} mb={'xl'}>
                                <Card.Section>
                                    <AspectRatio ratio={1000/500} onClick={() => setHalleSonnenhof((v) => !v)}>
                                        <Image
                                            src={sonnenhof}
                                            fit={'fill'}
                                        />
                                        {!halleSonnenhof && <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2697.0980266890647!2d9.040443175729395!3d47.46851917117743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479aebea2b77b975%3A0x1eb9b99ae18e950!2sOberstufe%20Sonnenhof!5e0!3m2!1sen!2sch!4v1691932950433!5m2!1sen!2sch" referrerPolicy="no-referrer-when-downgrade"></iframe>}
                                    </AspectRatio>
                                    <Group position={'apart'} m={'md'}>
                                        <Title c={'#189940'} order={4}>Oberstufe Sonnenhof, Wil</Title>
                                        <Badge color={'green'} variant={'light'}>
                                            Montag, 18:00 - 19:00
                                        </Badge>
                                        <Text color={'dimmed'}>Bronschhoferstrasse 43, 9500 Wil, Schweiz</Text>
                                    </Group>
                                </Card.Section>
                            </Card>
                        </Grid.Col>
                    </Grid>
                </div>
            </div>
        </div>
    );
}

export default HerrenU14;
