import { useEffect } from 'react';
import {Grid, Center, MantineProvider} from "@mantine/core";
import AOS from 'aos';
import stilmat from '../../media/stilmat-logo-ch.png';
import hederavita from '../../media/hederavita.png';
import tgazajug from '../../media/tga_za_jug.jpeg';
import munishi from '../../media/munishi_logo.jpeg';
import konsens from '../../media/konsens_logo.png';
import dieMobiliar from '../../media/die_mobiliar.jpeg';
import './styles.css';
import 'aos/dist/aos.css'

function Home() {

	useEffect(() => {
		AOS.init({ duration: 1000 })
	});

	return (
		<Center>
			<div>
				<div className='sponsor-images grid'>
					{/*<SimpleGrid*/}
					{/*	cols={3}*/}
					{/*	spacing={"lg"}*/}
					{/*	breakpoints={[*/}
					{/*		{maxWidth: '768px', cols: 2, spacing: 'md'},*/}
					{/*		{maxWidth: '425px', cols: 1, spacing: 'sm'}*/}
					{/*	]}*/}
					{/*>*/}
					{/*	<div><a href={'https://www.stilmat.com/de/'}><img src={stilmat} alt={'Stilmat Logo'}/></a></div>*/}
					{/*	<div><a href={'https://hederavita.ch'}><img src={hederavita} alt={'Hederavita Logo'}/></a></div>*/}
					{/*	<div><a href={'https://www.tgazajug.com'}><img src={tgazajug} alt={'Tga Za Jug Logo'}/></a></div>*/}
					{/*	<div><a href={'https://munishi.ch'}><img src={munishi} alt={'Munishi Logo'}/></a></div>*/}
					{/*	<div><a href={'https://kon-sens.com'}><img src={konsens} alt={'Konsens Logo'}/></a></div>*/}
					{/*	<div><a href={'https://www.mobiliar.ch'}><img src={dieMobiliar} alt={'Die Mobiliar Logo'}/></a></div>*/}

					{/*</SimpleGrid>*/}
					<MantineProvider>
						<Grid justify='center' align='center'>
							<Grid.Col sm={6} md={4}><a href={'https://www.stilmat.com/de/'}><img src={stilmat} alt={'Stilmat Logo'}/></a></Grid.Col>
							<Grid.Col sm={6} md={4}><a href={'https://hederavita.ch'}><img src={hederavita} alt={'Hederavita Logo'}/></a></Grid.Col>
							<Grid.Col sm={6} md={4}><a href={'https://www.tgazajug.com'}><img src={tgazajug} alt={'Tga Za Jug Logo'}/></a></Grid.Col>
							<Grid.Col sm={6} md={4}><a href={'https://munishi.ch'}><img src={munishi} alt={'Munishi Logo'}/></a></Grid.Col>
							<Grid.Col sm={6} md={4}><a href={'https://kon-sens.com'}><img src={konsens} alt={'Konsens Logo'}/></a></Grid.Col>
							<Grid.Col sm={6} md={4}><a href={'https://www.mobiliar.ch'}><img src={dieMobiliar} alt={'Die Mobiliar Logo'}/></a></Grid.Col>
						</Grid>
					</MantineProvider>
				</div>
			</div>
		</Center>

	);
}

export default Home;