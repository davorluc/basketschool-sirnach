// React Import
import React from "react";

// Mantine Imports
import {
    Title,
    Image,
    Grid,
    Center,
    Container,
    Divider,
    Box,
    Card,
    Space, AspectRatio, Group, Text, Badge
} from '@mantine/core';

// Image imports
import team from '../../../media/teams/senioren.jpg'
import person from '../../../media/placeholder_person.jpeg'

// Stylesheet import
import './index.css'
function Herren3 () {
    return (
        <div>
            <div className={'main'}>
                <Space h={'xl'}/>
                <Space h={'xl'}/>
                <Title c={'#189940'} order={1} mt={'xl'} mx={'xl'}>Herren 2. Liga</Title>
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
                        <Card shadow={'md'} radius={'md'} mb={'xl'}>
                            <Card.Section>
                                <AspectRatio ratio={600/620}>
                                    <Image
                                        src={person}
                                    />
                                </AspectRatio>
                                <Group position={'apart'} m={'md'}>
                                    <Title c={'#189940'} order={3}>Miodrag Manojlovic</Title>
                                    <Badge color={'green'} variant={'light'}>
                                        Herren 2. Liga
                                    </Badge>
                                </Group>
                            </Card.Section>
                        </Card>
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
                    <Grid mx={'xl'}>
                        <Grid.Col>

                        </Grid.Col>
                    </Grid>
                </div>
            </div>
        </div>
    );
}

export default Herren3;