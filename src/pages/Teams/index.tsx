// Mantine imports
import { Title,
    Card,
    Grid,
    Space,
    Image,
    AspectRatio,
} from "@mantine/core"

// Image imports
import u10 from '../../media/teams/u10.jpeg'
import u14 from '../../media/teams/u14.jpeg'
import u14damen from '../../media/teams/u14_girls.jpeg'
import u16 from '../../media/teams/u16.jpeg'
import u18 from '../../media/teams/u18.jpg'
import herren1 from '../../media/teams/senioren.jpg'
import herren2 from '../../media/teams/h4.jpeg'

// Stylesheet import
import './index.css'

function Teams() {
    const teams = [
    { image: u10, title: 'U10 Mix', link: '/teams/mixu10' },
    { image: u14, title: 'U14 Herren', link: '/teams/herrenu14'},
    { image: u14damen, title: 'U14 Damen', link: '/teams/damenu14' },
    { image: u16, title: 'U16 Herren', link: '/teams/herrenu16' },
    { image: u18, title: 'U18 Herren', link: '/teams/herrenu18' },
    { image: herren1, title: 'Herren 2. Liga Interregional', link: '/teams/herren3' },
    { image: herren2, title: 'Herren 4. Liga Regional', link: '/teams/herren4' }
    ]

    const renderTeams = teams.map((team) => (
    <Grid.Col sm={6} md={4}>
        <Card shadow='md' style={{backgroundColor: "#189940"}} radius='md' component='a' href={team.link}>
            <Card.Section>
                <AspectRatio ratio={8/5}>
                    <Image
                        src={team.image}
                        fit={'fill'}
                    />
                </AspectRatio>
                <Title c='white' order={2} p='xl' mx='md' align='center'>{team.title}</Title>
            </Card.Section>
        </Card>
    </Grid.Col>
    ));

	return (
		<div>
            <div className="main">
                <Space h='xl'/>
                <Space h='xl'/>
                <Title c='#189940' order={1} my='xl' mx='7%'>Teams</Title>
                <div className="teams-grid">
                    <Grid mx='8%' my='xl' gutter={30}>
                        {renderTeams}
                    </Grid>
                </div>
            </div>
        </div>
	);
}

export default Teams;
