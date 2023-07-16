// React Imports
import React from "react";

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
import geschichte from '../../media/wil_basketball_small_cropped.png';
// import vorstand from
// import trainer from
// import hallen from
// import mitglied from

function Verein () {
    return (
        <div>
            <div className={'main'}>
                <Space h={'xl'}/>
                <Space h={'xl'}/>
                <div className={'header'}>
                    <Title order={1} my={'xl'} mx={'xl'} align={'left'}>Verein</Title>
                </div>
                <div className={'verein-grid'}>
                    <Grid my={'xl'} align={'center'} justify={'center'}>
                        <Grid.Col md={4} sm={6}>
                            <Card shadow={'sm'} radius={'md'} style={{backgroundColor: "#F0F0F0"}}>
                                <Card.Section p={'xl'}>
                                    <AspectRatio ratio={2000/1797} p={'xl'}>
                                        <Image
                                            src={geschichte}
                                            height={'100%'}
                                            alt={'first'}
                                            fit={'fill'}
                                        />
                                    </AspectRatio>
                                        <Title m={'xl'} p={'xl'} align={'center'} order={2}>Geschichte!</Title>
                                </Card.Section>
                            </Card>
                        </Grid.Col>
                        <Grid.Col md={4} sm={6}>
                            <Card shadow={'sm'} radius={'md'} style={{backgroundColor: "#F0F0F0"}}>
                                <Card.Section p={'xl'}>
                                    <AspectRatio ratio={2000/1797}>
                                        <Image
                                            src={geschichte}
                                            height={'100%'}
                                            alt={'first'}
                                            fit={'fill'}
                                        />
                                    </AspectRatio>
                                    <Title m={'xl'} p={'xl'} align={'center'} order={2}>Vorstand</Title>
                                </Card.Section>
                            </Card>
                        </Grid.Col>
                        <Grid.Col md={4} sm={6}>
                            <Card shadow={'sm'} radius={'md'} style={{backgroundColor: "#F0F0F0"}}>
                                <Card.Section p={'xl'}>
                                    <AspectRatio ratio={2000/1797}>
                                        <Image
                                            src={geschichte}
                                            height={'100%'}
                                            alt={'first'}
                                            fit={'fill'}
                                        />
                                    </AspectRatio>
                                    <Title m={'xl'} p={'xl'} align={'center'} order={2}>Trainer/Innen</Title>
                                </Card.Section>
                            </Card>
                        </Grid.Col>
                        <Grid.Col md={4} sm={6}>
                            <Card shadow={'sm'} radius={'md'} style={{backgroundColor: "#F0F0F0"}}>
                                <Card.Section p={'xl'}>
                                    <AspectRatio ratio={2000/1797}>
                                        <Image
                                            src={geschichte}
                                            height={'100%'}
                                            alt={'first'}
                                            fit={'fill'}
                                        />
                                    </AspectRatio>
                                    <Title m={'xl'} p={'xl'} align={'center'} order={2}>Hallen</Title>
                                </Card.Section>
                            </Card>
                        </Grid.Col>
                        <Grid.Col md={4} sm={6}>
                            <Card shadow={'sm'} radius={'md'} style={{backgroundColor: "#F0F0F0"}}>
                                <Card.Section p={'xl'}>
                                    <AspectRatio ratio={2000/1797}>
                                        <Image
                                            src={geschichte}
                                            height={'100%'}
                                            alt={'first'}
                                            fit={'fill'}
                                        />
                                    </AspectRatio>
                                    <Title m={'xl'} p={'xl'} align={'center'} order={2}>Mitglied werden</Title>
                                </Card.Section>
                            </Card>
                        </Grid.Col>
                    </Grid>
                </div>
            </div>
        </div>
    );
}

export default Verein;