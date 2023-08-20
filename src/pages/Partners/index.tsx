// Mantine imports
import { Space,
    Text,
    Grid,
    Container,
    Title,
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
    { image: tgazajug, text: 'this is another example description' }
    ];

    const medical = [
    { image: hederavita, text: 'this is another example description' },
    { image: konsens, text: 'this is another example description' }
    ];

    return (
            <div>
                <div className="main">
                    <Space h={'xl'}/>
                    <Space h={'xl'}/>
                    <Title order={1} my='xl' c='#189940' mx='7%'>Sponsoren</Title>
                </div>
            </div>
           );
}

export default Partners;
