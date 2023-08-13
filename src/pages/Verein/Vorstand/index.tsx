// Mantine imports
import {
    Space,
    Box,
    Card,
    Grid,
    Text,
    Title
} from '@mantine/core'

function Vorstand () {
    return (
        <div>
            <div className={'main'}>
                <Space h={'xl'}/>
                <Space h={'xl'}/>
                <Title c={'#189940'} order={1} mt={'xl'} mx={'7%'}>Vorstand</Title>
            </div>
        </div>
    );
}

export default Vorstand;
