// React Imports
import { useState } from "react";

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
import kanti from '../../../media/hallen/kanti.jpg'
import ebnet from '../../../media/hallen/ebnet.jpg'
import sonnenhof from '../../../media/hallen/sonnenhof.jpg'


function Hallen () {
    const [halleSonnenhof, setHalleSonnenhof] = useState(true);
    const [halleEbnet, setHalleEbnet] = useState(true);
    const [halleKanti, setHalleKanti] = useState(true);
    return (
        <div>
            <div className={'main'}>
                <Space h={'xl'}/>
                <Space h={'xl'}/>
                <div className={'header'}>
                    <Title c={'#189940'} order={1} my={'xl'} mx={'7%'}>Hallen</Title>
                </div>
                <div className={'gym-grid'}>
                    <Grid mx={'8%'}>
                        <Grid.Col sm={6} md={4}>
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
                                        <Text color={'dimmed'}>Bronschhoferstrasse 43, 9500 Wil, Schweiz</Text>
                                    </Group>
                                </Card.Section>
                            </Card>
                        </Grid.Col>
                        <Grid.Col sm={6} md={4}>
                            <Card shadow={'md'} radius={'md'} mb={'xl'}>
                                <Card.Section>
                                    <AspectRatio ratio={1000/500} onClick={() => setHalleKanti((v) => !v)}>
                                        <Image
                                            src={kanti}
                                            fit={'fill'}
                                        />
                                        {!halleKanti && <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2697.5236597753797!2d9.030890475728803!3d47.4602240711768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479aebb88cc4d3db%3A0x13891633e5ba315a!2sKantonsschule%20Wil!5e0!3m2!1sen!2shr!4v1690914619557!5m2!1sen!2shr" referrerPolicy="no-referrer-when-downgrade"></iframe>}
                                    </AspectRatio>
                                    <Group position={'apart'} m={'md'}>
                                        <Title c={'#189940'} order={4}>Kantonsschule Wil, Wil SG</Title>
                                        <Text color={'dimmed'}>Hubstrasse 75, 9501 Wil, Schweiz</Text>
                                    </Group>
                                </Card.Section>
                            </Card>
                        </Grid.Col>
                        <Grid.Col sm={6} md={4}>
                            <Card shadow={'md'} radius={'md'} mb={'xl'}>
                                <Card.Section>
                                    <AspectRatio ratio={1000/500} onClick={() => setHalleEbnet((v) => !v)}>
                                        <Image
                                            src={ebnet}
                                            fit={'fill'}
                                        />
                                        {!halleEbnet && <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2696.748475427073!2d9.03378445!3d47.475330699999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479aeb92221f5eab%3A0xfdd9243307a78e58!2sEbnet-Saal%2C%20Industriestrasse%202%2C%209552%20Bronschhofen%2C%20Switzerland!5e0!3m2!1sen!2shr!4v1690835404168!5m2!1sen!2shr"referrerPolicy="no-referrer-when-downgrade"></iframe>}
                                    </AspectRatio>
                                    <Group position={'apart'} m={'md'}>
                                        <Title c={'#189940'} order={4}>Ebnet Saal, Bronschhofen</Title>
                                        <Text color={'dimmed'}>Industriestrasse 2, 9552 Bronschhofen, Schweiz</Text>
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

export default Hallen;
