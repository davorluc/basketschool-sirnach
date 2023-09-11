// React imports here
import { useEffect, useRef } from 'react';

// Mantine Imports here
import {
	Grid,
	Center,
	Divider,
    Button,
	Card,
	Image,
    Space,
    createStyles,
    Paper,
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
import whole from '../../media/teams/all.jpeg'
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
import { render } from 'react-dom';



function Home() {

	const upNextData = [
		{ image: first, title: 'Sommerferien!', datetime: '10.07.2023 - 14.08.2023', content: 'Die Saison neigt sich dem Ende, darum wünschen wir allen Spielern und Eltern unserer Spieler einen erholsamen Sommer!' },
		{ image: second, title: 'Delegiertenversammlung', datetime: '09.06.2023 19:30', content: 'Die jährliche Delegiertenversammlung findet wieder statt! Es erwarten euch Infos bzgl. zur nächsten Saison, Administratives, Budget, Preisverleihung und ein Apéro!'},
		{ image: third, title: 'Aufstiegsspiel Herren 1!', datetime: '07.05.2023 13:00', content: 'Unsere Herrenmannschaft hat die Möglichkeit, Ihre äusserst erfolgreiche Saison mit einem krönenden Abschluss zu verzieren. In der Kanti Wil kommt es zum Rückspiel gegen Wohlen Basket. Wir brauchen so viel unterstützung wie möglich!' }
	];

	const renderUpNextData = upNextData.map((event) => (
		<Grid.Col md={4} sm={6}>
			<Card shadow={'sm'} radius={'md'}>
				<Card.Section>
					<AspectRatio ratio={2048/1357}>
						<Image
							src={event.image}
							height={'100%'}
							alt={'first'}
							fit={'fill'}
						/>
					</AspectRatio>
					<Group position={'apart'} m={'md'}>
						<Text weight={500}>{event.title}</Text>
						<Badge color={'green'} variant={'light'}>
							{event.datetime}
						</Badge>
					</Group>
					<Text size={'sm'} color={'dimmed'} mx={'lg'} maw={'60ch'} my={'sm'}>
						{event.content}
					</Text>
				</Card.Section>
			</Card>
		</Grid.Col>
	));

	const sponsorData = [
		{ image: munishi, link: 'https://munishi.ch', alternativeText: 'Munishi Logo'},
		{ image: tgazajug, link: 'https://www.tgazajug.com', alternativeText: 'Tga Za Jug Logo'},
		{ image: dieMobiliar, link: 'https://www.mobiliar.ch', alternativeText: 'die Mobiliar Logo'},
		{ image: hederavita, link: 'https://hederavita.ch', alternativeText: 'Hederavita Logo'},
		{ image: konsens, link: 'https://kon-sens.com', alternativeText: 'Konsens Logo'},
		{ image: stilmat, link: 'https://www.stilmat.com/de/', alternativeText: 'Stilmat Logo'}
	];

	const renderSponsors = sponsorData.map((sponsor) => (
		<Grid.Col sm={6} md={4}><a href={sponsor.link}><img src={sponsor.image} alt={sponsor.alternativeText}/></a></Grid.Col>
	))

	useEffect(() => {
		AOS.init({ duration: 1000 })
	});

	const autoplay = useRef(Autoplay({ delay: 6000 }));

    const useStyles = createStyles((theme) => ({
        card: {
        height: rem(440),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        },

        title: {
        fontWeight: 900,
        textShadow: '2px 2px #000000',
        color: '#189940',
        lineHeight: 1.2,
        fontSize: rem(50),
        marginTop: theme.spacing.xs,
        },
          }));

    interface CardProps {
      image: string;
      title: string;
    }

    function Hero({ image, title }: CardProps) {
      const { classes } = useStyles();

  return (
  <AspectRatio ratio={2/1}>
    <Paper
      p="xl"
      radius={0}
      sx={{ backgroundImage: `url(${image})`,
      backgroundSize: '100% 100%'}}
      className={classes.card}
    >
      <div>
        <Title order={1} className={classes.title} my='xl'>
          {title}
        </Title>
      </div>
      <Button variant="white" color="dark" my='xl'>
        Read article
      </Button>
    </Paper>
  </AspectRatio>
  );
}

    const data = [
  {
    image: whole,
    title: 'Willkommen beim BC Bears Wil!',
  },
  {
    image: bear1,
    title: 'Worauf wartest du noch? Melde dich hier an!',
  },
  {
    image: bear2,
    title: 'Geschichte',
  },
  {
    image: whole,
    title: 'shop',
  },
  ];

  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Hero {...item} />
    </Carousel.Slide>
  ));

	return (
		<Center>
			<div>
				<div className={'main'}>
                    <Space h='xl'/>
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
								  }}
                        >
                          {slides}
                    </Carousel>
					</div>
                    <div className='next'>
					<div className={'next-title'}>
						<Title order={1} align={'center'} mb={'xl'} c='white' pt='xl'>Unsere nächsten Veranstaltungen</Title>
					</div>
                        <div className='next-description'>
                        <Text c='white' mx='7%' mb='xl' size='xl'>Selbst an Spannung mangelt es nicht, denn in unserem "Kommende Termine" Abschnitt verpassen Sie nie wieder ein aufregendes Basketballspiel oder wichtige administrative Veranstaltungen. Halten Sie sich auf dem Laufenden über die nächsten Höhepunkte, die unser Basketballverein zu bieten hat – sei es ein mitreißendes Heimspiel oder eine wichtige Vereinssitzung. Von packenden Auswärtsbegegnungen auf dem Spielfeld bis hin zu bedeutenden organisatorischen Ereignissen neben dem Spielfeld – hier finden Sie alle Termine, die Sie benötigen, um sowohl Teil unserer leidenschaftlichen Fan-Gemeinschaft als auch informiert über die Vereinsangelegenheiten zu sein. Seien Sie bereit, unsere Mannschaft anzufeuern und die Zukunft des Vereins mitzugestalten. Verpassen Sie keine Gelegenheit mehr, die Spannung des Sports und die Bedeutung der Vereinsarbeit hautnah zu erleben. Schauen Sie regelmäßig vorbei, um sicherzustellen, dass Sie keine der kommenden Veranstaltungen, sei es sportlich oder administrativ, verpassen.</Text>
                        </div>
					<div className={'next-content'}>
						<Grid justify={'center'} align={'center'} mx={'lg'} pb='xl'>
							{renderUpNextData}				
						</Grid>
					</div>
                    </div>
                    <Divider my='xl' mx='7%'/>
					<div className={'sponsors-title'}>
						<Title order={1} align={'center'} my={'xl'}>Unsere Sponsoren</Title>
					</div>
					<div className='sponsor-images grid'>
							<Grid justify='center' align='center' pb={'xl'}>
								{renderSponsors}
							</Grid>
					</div>
				</div>
			</div>
		</Center>
	);
}
export default Home;
