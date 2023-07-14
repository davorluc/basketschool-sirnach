// React imports here
import { useEffect, useRef } from 'react';

// Mantine Imports here
import {
	Grid,
	Center,
	Divider,
	Card,
	Image,
	NavLink,
	Blockquote,
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
import {Mail, WorldWww, BrandInstagram, BrandFacebook } from 'tabler-icons-react';

function Home() {

	useEffect(() => {
		AOS.init({ duration: 1000 })
	});

	return (
		<Center>
			<div>
				<div className={'main'}>
					<div className='carousel'>
						<Carousel slideSize={'100%'}
								  height={'xl'}
								  withIndicators
								  withControls={false}
								  loop>
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
				</div>
				<div className='footer'>
					<Grid justify={'center'} align={'center'} mx={'xl'} py={'xs'}>
						<Grid.Col md={4} sm={6} align={'left'} ml={'xl'}>
								<AspectRatio ratio={2000/2189} maw={'30%'} my={'sm'}>
									<Anchor href={'https://www.bcbears.ch'}>
										<Image
											src={logo}
											height={'100%'}
											mx={'lg'}
											my={'xs'}
										/>
									</Anchor>
								</AspectRatio>
							<Title order={2} my={'xl'} align={'left'}>BC BEARS WIL</Title>
							<Text align={'left'}>
								<Anchor href={'mailto:bcbear-wil@bluewin.ch'} underline={false} mx={'2px'} c={'black'} weight={700}>
									<ThemeIcon mr={'xs'} variant={'outline'} c={'black'}>
										<Mail/>
									</ThemeIcon>
									bcbears-wil@bluewin.ch
								</Anchor>
							</Text>
							<Text align={'left'}>
								<Anchor href={'https://www.bcbears.ch'} underline={false} mx={'2px'} c={'black'} weight={700}>
									<ThemeIcon mr={'xs'} variant={'outline'} c={'black'}>
										<WorldWww />
									</ThemeIcon>
									www.bcbears.ch
								</Anchor>
							</Text>
						</Grid.Col>
						<Grid.Col md={3} sm={3} mx={'lg'} align={'left'}>
							<Title order={2} ml={'sm'}>SITEMAP</Title>
							<Box w={'100%'}>
								<NavLink
									label={'Home'}
									c={'black'}
									sx={() => ({
										'&:hover': {
											backgroundColor: '#E6F9E6',
										}})
									}>
								</NavLink>
								<NavLink
									label={'Verein'}
									childrenOffset={'lg'}
									c={'black'}
									sx={() => ({
										'&:hover': {
											backgroundColor: '#E6F9E6',
										}})
									}>
									<NavLink
										label={'Geschichte'}
										c={'black'}
										sx={() => ({
											'&:hover': {
												backgroundColor: '#E6F9E6',
											}})
										}>
									</NavLink>
									<NavLink
										label={'Vorstand'}
										c={'black'}
										sx={() => ({
											'&:hover': {
												backgroundColor: '#E6F9E6',
											}})
										}>
									</NavLink>
									<NavLink
										label={'Trainer/innen'}
										c={'black'}
										sx={() => ({
											'&:hover': {
												backgroundColor: '#E6F9E6',
											}})
										}>
									</NavLink>
									<NavLink
										label={'Hallen'}
										c={'black'}
										sx={() => ({
											'&:hover': {
												backgroundColor: '#E6F9E6',
											}})
										}>
									</NavLink>
									<NavLink
										label={'Mitglied werden'}
										c={'black'}
										sx={() => ({
											'&:hover': {
												backgroundColor: '#E6F9E6',
											}})
										}>
									</NavLink>
								</NavLink>
								<NavLink
									label={'Teams'}
									childrenOffset={'lg'}
									c={'black'}
									sx={() => ({
										'&:hover': {
											backgroundColor: '#E6F9E6',
										}})
									}>
									<NavLink
										label={'Mix U10'}
										c={'black'}
										sx={() => ({
											'&:hover': {
												backgroundColor: '#E6F9E6',
											}})
										}>
									</NavLink>
									<NavLink
										label={'Mix U12'}
										c={'black'}
										sx={() => ({
											'&:hover': {
												backgroundColor: '#E6F9E6',
											}})
										}>
									</NavLink>
									<NavLink
										label={'Herren U14'}
										c={'black'}
										sx={() => ({
											'&:hover': {
												backgroundColor: '#E6F9E6',
											}})
										}>
									</NavLink>
									<NavLink
										label={'Damen U14'}
										c={'black'}
										sx={() => ({
											'&:hover': {
												backgroundColor: '#E6F9E6',
											}})
										}>
									</NavLink>
									<NavLink
										label={'Herren U16'}
										c={'black'}
										sx={() => ({
											'&:hover': {
												backgroundColor: '#E6F9E6',
											}})
										}>
									</NavLink>
									<NavLink
										label={'Herren U18'}
										c={'black'}
										sx={() => ({
											'&:hover': {
												backgroundColor: '#E6F9E6',
											}})
										}>
									</NavLink>
									<NavLink
										label={'Herren 2. Liga'}
										c={'black'}
										sx={() => ({
											'&:hover': {
												backgroundColor: '#E6F9E6',
											}})
										}>
									</NavLink>
									<NavLink
										label={'Herren 4. Liga'}
										c={'black'}
										sx={() => ({
											'&:hover': {
												backgroundColor: '#E6F9E6',
											}})
										}>
									</NavLink>
								</NavLink>
								<NavLink
									label={'Partner & Gönner'}
									c={'black'}
									sx={() => ({
										'&:hover': {
											backgroundColor: '#E6F9E6',
										}})
									}>
								</NavLink>
								<NavLink
									label={'Shop'}
									c={'black'}
									sx={() => ({
										'&:hover': {
											backgroundColor: '#E6F9E6',
										}})
									}>
								</NavLink>
							</Box>
							<Group my={'xs'}>
								<Anchor href={'https://www.instagram.com/bc_bears_wil/'}>
									<ThemeIcon c={'green'} variant={'light'} size={'xl'} radius={'md'}>
										<BrandInstagram/>
									</ThemeIcon>
								</Anchor>
								<Anchor href={'https://www.facebook.com/BasketballClubBearsWil/'}>
									<ThemeIcon c={'green'} variant={'light'} size={'xl'} radius={'md'}>
										<BrandFacebook
											strokeWidth={1.5}/>
									</ThemeIcon>
								</Anchor>
							</Group>
						</Grid.Col>
						<Grid.Col md={4} sm={6}>
							<Box align={'center'}>
								<Blockquote cite={'- Miodrag Manojlovic, Vereinspräsident BC Bears Wil'}>
									Ein Sport, Eine Leidenschaft, Eine Familie
								</Blockquote>
							</Box>
						</Grid.Col>
					</Grid>
					<Title order={4} align={'center'}>&copy; 2023 BC Bears Wil</Title>
					<Text align={'center'} size={'sm'}>Engineering and Design by</Text>
					<Text align={'center'} pb={'lg'}><Anchor c={'black'} href={'https://github.com/davorluc'} underline={false}>Davor Lucic</Anchor> and <Anchor href={'https://github.com/FadilSmajilbasic'} underline={false} c={'black'}>Fadil Smajilbasic</Anchor></Text>
				</div>
			</div>
		</Center>
	);
}
export default Home;