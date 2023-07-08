import { useEffect } from 'react';
import {
	Grid,
	Center,
	MantineProvider,
	rem,
	Space,
	Card,
	Image,
	Text,
	Badge,
	Group,
	AspectRatio
} from "@mantine/core";
import { Carousel } from '@mantine/carousel';
import AOS from 'aos';
import bear1 from '../../media/bc_bears_realistic_effect.png';
import bear2 from '../../media/black_bear_realistic_second.png';
import bear3 from '../../media/black_bear_realistic_second_cropped.png';
import beach from '../../media/beachphoto.jpg'
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
				<div className='carousel'>

				</div>
				<Space h="xl" />
				<div className={'next'}>
					<MantineProvider>
						<Grid justify={'center'} align={'center'}>
							<Grid.Col md={4} sm={6}>
								<Card shadow={'sm'} radius={'md'}>
									<Card.Section>
										<AspectRatio ratio={2048/1357}>
											<Image
												src={beach}
												height={'100%'}
												alt={'beach'}
												fit={'fill'}
											/>
										</AspectRatio>
										<Group position={'apart'} m={'md'}>
											<Text weight={500}>Sommerferien!</Text>
											<Badge color={'green'} variant={'light'}>
												Info
											</Badge>
										</Group>
										<Text size={'sm'} color={'dimmed'} mx={'lg'} maw={'60ch'} my={'sm'}>
											Die Saison neigt sich dem Ende, darum wünschen wir allen Spielern und Eltern unserer Spieler einen erholsamen Sommer!
										</Text>
									</Card.Section>
								</Card>
							</Grid.Col>
							<Grid.Col md={4} sm={6}>
								<Card shadow={'sm'} radius={'md'}>
									<Card.Section>
										<AspectRatio ratio={2048/1357}>
											<Image
												src={beach}
												height={'100%'}
												alt={'beach'}
												fit={'fill'}
											/>
										</AspectRatio>
										<Group position={'apart'} m={'md'}>
											<Text weight={500}>Sommerferien!</Text>
											<Badge color={'green'} variant={'light'}>
												Info
											</Badge>
										</Group>
										<Text size={'sm'} color={'dimmed'} mx={'lg'} maw={'60ch'} my={'sm'}>
											Die Saison neigt sich dem Ende, darum wünschen wir allen Spielern und Eltern unserer Spieler einen erholsamen Sommer!
										</Text>
									</Card.Section>
								</Card>
							</Grid.Col>
							<Grid.Col md={4} sm={6}>
								<Card shadow={'sm'} radius={'md'}>
									<Card.Section>
										<AspectRatio ratio={2048/1357}>
											<Image
												src={beach}
												height={'100%'}
												alt={'beach'}
												fit={'fill'}
											/>
										</AspectRatio>
										<Group position={'apart'} m={'md'}>
											<Text weight={500}>Sommerferien!</Text>
											<Badge color={'green'} variant={'light'}>
												Info
											</Badge>
										</Group>
										<Text size={'sm'} color={'dimmed'} mx={'lg'} maw={'60ch'} my={'sm'}>
											Die Saison neigt sich dem Ende, darum wünschen wir allen Spielern und Eltern unserer Spieler einen erholsamen Sommer!
										</Text>
									</Card.Section>
								</Card>
							</Grid.Col>
						</Grid>
					</MantineProvider>
				</div>
				<Space h="xl" />
				<div className='sponsor-images grid'>
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