// React imports here
import { useEffect } from 'react';

// Mantine Imports here
import {
	Grid,
	Center,
	Space,
	Card,
	Image,
	NavLink,
	Text,
	Badge,
	Group,
	Box,
	ThemeIcon,
	Title,
	Anchor,
	AspectRatio
} from "@mantine/core";
import { Carousel } from '@mantine/carousel';

// AOS Import
import AOS from 'aos';

// Image Imports here
import bear1 from '../../media/bears/bc_bears_realistic_effect.png';
import bear2 from '../../media/bears/black_bear_realistic_second.png';
import bear3 from '../../media/bears/black_bear_realistic_second_cropped.png';
import first from '../../media/beachphoto.jpg'
import second from '../../media/DV.jpg'
import third from '../../media/teams/senioren.jpg'
import stilmat from '../../media/sponsors/stilmat-logo-ch.png';
import hederavita from '../../media/sponsors/hederavita.png';
import tgazajug from '../../media/sponsors/tga_za_jug.jpeg';
import munishi from '../../media/sponsors/munishi_logo.jpeg';
import konsens from '../../media/sponsors/konsens_logo.png';
import dieMobiliar from '../../media/sponsors/die_mobiliar.jpeg';
import logo from '../../media/wil_basktetball_small.png'

// Stylesheet imports here
import './styles.css';
import 'aos/dist/aos.css'

// Icons Imports here
import { Mail, WorldWww } from 'tabler-icons-react';

function Home() {

	useEffect(() => {
		AOS.init({ duration: 1000 })
	});


	return (
		<Center>
			<div>
				<div className={'main'}>
					<div className='carousel'>

					</div>
					<Space h="xl" />
					<div className={'next-title'}>
						<Title order={1} align={'center'} my={'xl'}>Unsere nächsten Veranstaltungen</Title>
					</div>
					<div className={'next'}>
							<Grid justify={'center'} align={'center'} mx={'lg'}>
								<Grid.Col md={4} sm={6}>
									<Card shadow={'sm'} radius={'md'}>
										<Card.Section>
											<AspectRatio ratio={2048/1357}>
												<Image
													src={first}
													height={'100%'}
													alt={'first'}
													fit={'fill'}
												/>
											</AspectRatio>
											<Group position={'apart'} m={'md'}>
												<Text weight={500}>Sommerferien!</Text>
												<Badge color={'green'} variant={'light'}>
													10.07.2023 - 14.08.2023
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
													src={second}
													height={'100%'}
													alt={'second'}
													fit={'fill'}
												/>
											</AspectRatio>
											<Group position={'apart'} m={'md'}>
												<Text weight={500}>Delegiertenversammlung</Text>
												<Badge color={'green'} variant={'light'}>
													09.06.2023 19:30
												</Badge>
											</Group>
											<Text size={'sm'} color={'dimmed'} mx={'lg'} maw={'60ch'} my={'sm'}>
												Die jährliche Delegiertenversammlung findet wieder statt! Es erwarten euch Infos bzgl. zur nächsten Saison, Administratives, Budget, Preisverleihung und ein Apéro
											</Text>
										</Card.Section>
									</Card>
								</Grid.Col>
								<Grid.Col md={4} sm={6}>
									<Card shadow={'sm'} radius={'md'}>
										<Card.Section>
											<AspectRatio ratio={2048/1357}>
												<Image
													src={third}
													height={'100%'}
													alt={'third'}
													fit={'fill'}
												/>
											</AspectRatio>
											<Group position={'apart'} m={'md'}>
												<Text weight={500}>Aufstiegsspiel Herren 1!</Text>
												<Badge color={'green'} variant={'light'}>
													07.05.2023 13:00
												</Badge>
											</Group>
											<Text size={'sm'} color={'dimmed'} mx={'lg'} maw={'60ch'} my={'sm'}>
												Unsere Herrenmannschaft hat die Möglichkeit, Ihre äusserst erfolgreiche Saison mit einem krönenden Abschluss zu verzieren. In der Kanti Wil kommt es zum Rückspiel gegen Wohlen Basket. Wir brauchen so viel unterstützung wie möglich!
											</Text>
										</Card.Section>
									</Card>
								</Grid.Col>
							</Grid>
					</div>
					<Space h="xl" />
					<div className='sponsor-images grid'>
							<Grid justify='center' align='center'>
								<Grid.Col sm={6} md={4}><a href={'https://www.stilmat.com/de/'}><img src={stilmat} alt={'Stilmat Logo'}/></a></Grid.Col>
								<Grid.Col sm={6} md={4}><a href={'https://hederavita.ch'}><img src={hederavita} alt={'Hederavita Logo'}/></a></Grid.Col>
								<Grid.Col sm={6} md={4}><a href={'https://www.tgazajug.com'}><img src={tgazajug} alt={'Tga Za Jug Logo'}/></a></Grid.Col>
								<Grid.Col sm={6} md={4}><a href={'https://munishi.ch'}><img src={munishi} alt={'Munishi Logo'}/></a></Grid.Col>
								<Grid.Col sm={6} md={4}><a href={'https://kon-sens.com'}><img src={konsens} alt={'Konsens Logo'}/></a></Grid.Col>
								<Grid.Col sm={6} md={4}><a href={'https://www.mobiliar.ch'}><img src={dieMobiliar} alt={'Die Mobiliar Logo'}/></a></Grid.Col>
							</Grid>
					</div>
					<Space h="xl" />
				</div>
				<div className='footer'>
					<Grid justify={'center'} align={'center'} mx={'10%'}>
						<Grid.Col md={4} sm={6}>
							<AspectRatio ratio={2000/2189} maw={'30%'} my={'lg'}>
								<Image
									src={logo}
									height={'100%'}
									mx={'lg'}
								/>
							</AspectRatio>
							<Title order={2} my={'xl'} align={'left'}>BC BEARS WIL</Title>
							<Text align={'left'}>
								<Anchor href={'mailto:bcbear-wil@bluewin.ch'} underline={false} c={'dimmed'} mx={'2px'}>
									<ThemeIcon color={'green'} mr={'7px'} variant={'outline'}>
										<Mail/>
									</ThemeIcon>
									bcbears-wil@bluewin.ch
								</Anchor>
							</Text>
							<Text align={'left'}>
								<Anchor href={'https://www.bcbears.ch'} underline={false} c={'dimmed'} mx={'2px'}>
									<ThemeIcon color={'green'} mr={'7px'} variant={'outline'}>
										<WorldWww/>
									</ThemeIcon>
									www.bcbears.ch
								</Anchor>
							</Text>
						</Grid.Col>
						<Grid.Col md={4} sm={6} mx={'lg'}>
							<Title order={2}>SITEMAP</Title>
							<Box w={'100%'} color={'black'}>
								<NavLink
									label={'Home'}>
								</NavLink>
								<NavLink
									label={'Verein'}
									childrenOffset={'lg'}>
									<NavLink
										label={'Geschichte'}>
									</NavLink>
									<NavLink
										label={'Vorstand'}>
									</NavLink>
									<NavLink
										label={'Trainer/innen'}>
									</NavLink>
									<NavLink
										label={'Hallen'}>
									</NavLink>
									<NavLink
										label={'Mitglied werden'}>
									</NavLink>
								</NavLink>
								<NavLink
									label={'Teams'}
									childrenOffset={'lg'}>
									<NavLink
										label={'Mix U10'}>
									</NavLink>
									<NavLink
										label={'Mix U12'}>
									</NavLink>
									<NavLink
										label={'Herren U14'}>
									</NavLink>
									<NavLink
										label={'Damen U14'}>
									</NavLink>
									<NavLink
										label={'Herren U16'}>
									</NavLink>
									<NavLink
										label={'Herren U18'}>
									</NavLink>
									<NavLink
										label={'Herren 2. Liga'}>
									</NavLink>
									<NavLink
										label={'Herren 4. Liga'}>
									</NavLink>
								</NavLink>
								<NavLink
									label={'Partner & Gönner'}>
								</NavLink>
								<NavLink
									label={'Shop'}>
								</NavLink>
							</Box>
						</Grid.Col>
						<Grid.Col md={4} sm={6}>

						</Grid.Col>
					</Grid>
				</div>
			</div>
		</Center>
	);
}
export default Home;