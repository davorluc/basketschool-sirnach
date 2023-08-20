// React imports here
import { useEffect, useRef } from 'react';

// Mantine Imports here
import {
	Grid,
	Center,
	Divider,
	Card,
	Image,
	Text,
	Badge,
	Group,
	rem,
	Title,
	AspectRatio
} from "@mantine/core";
import { Carousel } from '@mantine/carousel';
import Autoplay from "embla-carousel-autoplay";

// AOS Import
import AOS from 'aos';

// Image Imports here
import bear1 from '../../media/bears/bc_bears_realistic_effect.png';
import bear2 from '../../media/bears/black_bear_realistic_second.png';
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



function Home() {

	useEffect(() => {
		AOS.init({ duration: 1000 })
	});

	const autoplay = useRef(Autoplay({ delay: 6000 }));

	return (
		<Center>
			<div>
				<div className={'main'}>
					<div className='carousel'>
						<Carousel slideSize={'100%'}
								  height={'xl'}
								  withIndicators
								  withControls={false}
								  plugins={[autoplay.current]}
								  onMouseEnter={autoplay.current.stop}
								  onMouseLeave={autoplay.current.reset}
								  loop
								  styles={{
									  indicator: {
										  width: rem(12),
										  height: rem(4),
										  transition: 'width 250ms ease',

										  '&[data-active]': {
											  width: rem(40),
										  },
									  },
								  }}>
							<Carousel.Slide>
								<AspectRatio ratio={1536/520}>
									<Image
										src={bear2}
										alt={'bear wide cropped'}
										fit={'fill'}
										width={'100%'}
									/>

								</AspectRatio>
							</Carousel.Slide>
							<Carousel.Slide>
								<AspectRatio ratio={1536/520}>
									<Image
										src={bear1}
										alt={'bear wide cropped'}
										fit={'fill'}
										width={'100%'}
									/>
								</AspectRatio>
							</Carousel.Slide>
							<Carousel.Slide>
								<AspectRatio ratio={1536/520}>
									<Image
										src={bear2}
										alt={'bear wide cropped'}
										fit={'fill'}
										width={'100%'}
									/>
								</AspectRatio>
							</Carousel.Slide>
						</Carousel>
					</div>
					<Divider mx={'xl'} my={'xl'}/>
					<div className={'next-title'}>
						<Title order={1} align={'center'} my={'xl'}>Unsere nächsten Veranstaltungen</Title>
					</div>
                        <div className='next-description'>
                        <Text c='dimmed' mx='7%' mb='xl'>Selbst an Spannung mangelt es nicht, denn in unserem "Kommende Termine" Abschnitt verpassen Sie nie wieder ein aufregendes Basketballspiel oder wichtige administrative Veranstaltungen. Halten Sie sich auf dem Laufenden über die nächsten Höhepunkte, die unser Basketballverein zu bieten hat – sei es ein mitreißendes Heimspiel oder eine wichtige Vereinssitzung. Von packenden Auswärtsbegegnungen auf dem Spielfeld bis hin zu bedeutenden organisatorischen Ereignissen neben dem Spielfeld – hier finden Sie alle Termine, die Sie benötigen, um sowohl Teil unserer leidenschaftlichen Fan-Gemeinschaft als auch informiert über die Vereinsangelegenheiten zu sein. Seien Sie bereit, unsere Mannschaft anzufeuern und die Zukunft des Vereins mitzugestalten. Verpassen Sie keine Gelegenheit mehr, die Spannung des Sports und die Bedeutung der Vereinsarbeit hautnah zu erleben. Schauen Sie regelmäßig vorbei, um sicherzustellen, dass Sie keine der kommenden Veranstaltungen, sei es sportlich oder administrativ, verpassen.</Text>
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
					<Divider mx={'xl'} my={'xl'}/>
					<div className={'sponsors-title'}>
						<Title order={1} align={'center'} my={'xl'}>Unsere Sponsoren</Title>
					</div>
					<div className='sponsor-images grid'>
							<Grid justify='center' align='center' pb={'xl'}>
								<Grid.Col sm={6} md={4}><a href={'https://www.stilmat.com/de/'}><img src={stilmat} alt={'Stilmat Logo'}/></a></Grid.Col>
								<Grid.Col sm={6} md={4}><a href={'https://hederavita.ch'}><img src={hederavita} alt={'Hederavita Logo'}/></a></Grid.Col>
								<Grid.Col sm={6} md={4}><a href={'https://www.tgazajug.com'}><img src={tgazajug} alt={'Tga Za Jug Logo'}/></a></Grid.Col>
								<Grid.Col sm={6} md={4}><a href={'https://munishi.ch'}><img src={munishi} alt={'Munishi Logo'}/></a></Grid.Col>
								<Grid.Col sm={6} md={4}><a href={'https://kon-sens.com'}><img src={konsens} alt={'Konsens Logo'}/></a></Grid.Col>
								<Grid.Col sm={6} md={4}><a href={'https://www.mobiliar.ch'}><img src={dieMobiliar} alt={'Die Mobiliar Logo'}/></a></Grid.Col>
							</Grid>
					</div>
				</div>
			</div>
		</Center>
	);
}
export default Home;
