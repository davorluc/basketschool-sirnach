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
		{ image: first, title: 'Sommerferien!', datetime: '05.07.2024 - 12.08.2024', content: 'Die Saison neigt sich dem Ende, darum wünschen wir allen Spielern und Eltern unserer Spieler einen erholsamen Sommer!' },
		{ image: first, title: 'Sommerferien!', datetime: '05.07.2024 - 12.08.2024', content: 'Die Saison neigt sich dem Ende, darum wünschen wir allen Spielern und Eltern unserer Spieler einen erholsamen Sommer!' },
		{ image: first, title: 'Sommerferien!', datetime: '05.07.2024 - 12.08.2024', content: 'Die Saison neigt sich dem Ende, darum wünschen wir allen Spielern und Eltern unserer Spieler einen erholsamen Sommer!' },
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
						<Badge color={'blue'} variant={'light'}>
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
        textShadow: '2px 2px #ffffff',
        color: '#1B1A55',
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
						<Title order={1} align={'center'} mb={'xl'} c='white' pt='xl'>Wichtige Termine</Title>
					</div>
                        <div className='next-description'>
                        <Text c='white' mx='7%' mb='xl' size='xl'>Hier finden unsere Spieler und deren Eltern die nächsten wichtigen Termine. Von Spezialtrainings bis hin zu geplanten Trainingsausfällen durch andersweitige Hallenbesetzungen findet Ihr hier alles. Diese Sammlung wird regelmässig gepflegt, sodass ihr sicherlich keine wichtigen Infos verpasst. Bei Unklarheiten könnt ihr euch jederzeit bei einem der Trainer auf Whatsapp melden.</Text>
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
