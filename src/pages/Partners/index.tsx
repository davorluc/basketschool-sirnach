// Mantine imports
import { Space,
    Text,
    Grid,
    Container,
    Stack,
    Title,
    Box,
    Divider,
    Image
} from '@mantine/core'

// Image imports
import hostpoint from '../../media/sponsors/logo_hostpoint_orig.png';
import velopeter from '../../media/sponsors/logo_velopeter_ohne_weiss.png';
import apotheke from '../../media/sponsors/logo_apotheke.png';
import swissInsurance from '../../media/sponsors/Logo_swissinsuranceag_04.png';
import raiffeisen from '../../media/sponsors/Raiffeisen_Schweiz_Logo.svg.png';
import fitness4all from '../../media/sponsors/logo_fitness4all_02.png';

function Partners () {
    const mainSponsor = [
    { image: hostpoint, text: 'Sponsorbeschreibung', link:'https://www.hostpoint.ch' },
    { image: velopeter, text: 'Sponsorenbeschreibung', link: 'https://velopeter.ch/'},
    { image: apotheke, text: 'Sponsorenbeschreibung', link:'http://www.gate24.ch/de/Beauty+Wellness-13/Sirnach/Apotheke-Sirnach-Dr--R--Krahenmann/detail-2951248-2940210.aspx' },
    { image: swissInsurance, text: 'Sponsorenbeschreibung', link:'https://www.swiss-insurance-ag.ch/' },
    { image: raiffeisen, text: 'Sponsorenbeschreibung', link:'https://www.raiffeisen.ch/regio-sirnach/de.html' },
    { image: fitness4all, text: 'Sponsorenbeschreibung', link:'http://www.fitness4all.ch/' }
    ];

    const mainSponsorContent = mainSponsor.map((entry) => (
        <Stack component='a' href={entry.link}>
            <Image my='xl' mx='9%' src={entry.image} maw='200px'/>
            <Text mb='xl' mx='9%'>{entry.text}</Text>
        </Stack>
        ));


    return (
            <div>
                <div className="main">
                    <Space h={'xl'}/>
                    <Space h={'xl'}/>
                    <Box
                        mx={'7%'}
                        c={'white'}
                        my={'xl'}
                        sx={() => ({
                            backgroundColor: '#1B1A55',
                            borderRadius: '7px'})
                        }>
                        <Title mx={'xl'} order={1}>Sponsoren</Title>
                    </Box>
                    <div className='main-sponsors'>
                        <Title order={1} c='#1B1A55' mx='8%'>Hauptsponsoren</Title>
                        {mainSponsorContent}
                    </div>
                    <Divider m='xl'/>
                    <div className='main-sponsors'>
                        <Title order={1} c='#1B1A55' mx='8%'>Andere Partner und Links</Title>
                    </div>
                    <Divider m='xl'/>
                </div>
            </div>
           );
}

export default Partners;
