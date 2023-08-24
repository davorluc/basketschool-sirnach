// Mantine imports
import { Space,
    Text,
    Grid,
    Container,
    Title,
    Box,
    Divider,
    Image,
    AspectRatio
} from '@mantine/core'

// Image imports
import dieMobiliar from '../../media/sponsors/die_mobiliar.jpeg'
import munishi from '../../media/sponsors/munishi_logo.jpeg'
import hederavita from '../../media/sponsors/hederavita.png'
import stilmat from '../../media/sponsors/stilmat-logo-ch.png'
import tgazajug from '../../media/sponsors/tga_za_jug.jpeg'
import konsens from '../../media/sponsors/konsens_logo.png'

function Partners () {
    const mainSponsor = [
    { image: munishi, text: 'this is an example description' },
    ];

    const silver = [
    { image: dieMobiliar, text: 'this is another example description' }
    ];

    const bronze = [
    { image: tgazajug, text: 'this is another example description' },
    { image: stilmat, text: 'this is the stilmat text'}
    ];

    const medical = [
    { image: hederavita, text: 'this is another example description' },
    { image: konsens, text: 'this is another example description' }
    ];

    const mainSponsorContent = mainSponsor.map((entry) => (
        <div>
            <Image my='xl' mx='9%' src={entry.image} maw='50%'/>
            <Text my='xl' mx='9%'>{entry.text}</Text>
        </div>
        ));

    const silverSponsorContent = silver.map((entry) => (
        <div>
            <Image my='xl' mx='9%' src={entry.image} maw='50%'/>
            <Text my='xl' mx='9%'>{entry.text}</Text>
        </div>
        ));

    const bronzeSponsorContent = bronze.map((entry) => (
        <div>
            <Image my='xl' mx='9%' src={entry.image} maw='50%'/>
            <Text my='xl' mx='9%'>{entry.text}</Text>
        </div>
        ));

    const medicalSponsorContent= medical.map((entry) => (
        <div>
            <Image my='xl' mx='9%' src={entry.image} maw='50%'/>
            <Text my='xl' mx='9%'>{entry.text}</Text>
        </div>
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
                            backgroundColor: '#189940',
                            borderRadius: '7px'})
                        }>
                        <Title mx={'xl'} order={1}>Sponsoren</Title>
                    </Box>
                    <div className='main-sponsors'>
                        {mainSponsorContent}
                    </div>
                    <Divider m='xl'/>
                    <div className='main-sponsors'>
                        {silverSponsorContent}
                    </div>
                    <Divider m='xl'/>
                    <div className='main-sponsors'>
                        {bronzeSponsorContent}
                    </div>
                    <Divider m='xl'/>
                    <div className='main-sponsors'>
                        {medicalSponsorContent}
                    </div>
                </div>
            </div>
           );
}

export default Partners;
