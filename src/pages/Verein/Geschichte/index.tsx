// React Import
import React from "react";

// Mantine Imports
import {
    Title,
    Text,
    Container,
    Space,
    Table,
    Grid, Box
} from "@mantine/core";

// Stylesheet Import
import './index.css'

function Geschichte () {
    const achievements = [
        {season: '18/19', finish: '1', league: 'Herren 4. Liga'},
        {season: '19/20', finish: '1', league: 'Herren 4. Liga - Saison durch Covid-19 unterbochen'},
        {season: '20/21', finish: '-', league: 'Herren 4. Liga; Saison durch Covid-19 unterbrochen'},
        {season: '21/22', finish: '2*', league: 'Herren 4. Liga'},
        {season: '22/23', finish: '1*', league: 'Herren 3. Liga'}
    ]

    const rowsAchievement = achievements.map((achievement) => (
        <tr key={achievement.season}>
            <td>{achievement.season}</td>
            <td>{achievement.finish}</td>
            <td>{achievement.league}</td>
        </tr>
    ));

    return (
        <div>
            <div className={'main'}>
                <Space h={'xl'}/>
                <Space h={'xl'}/>
                <div className={'page-header'}>
                    <Title order={1} my={'xl'} mx={'7%'} c={'#189940'}>
                        Geschichte
                    </Title>
                </div>
                <div className={'page-content'}>
                    <Grid mx={'7%'} my={'xl'} gutter={'xl'}>
                        <Grid.Col sm={6}>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque elementum dignissim. Duis sed turpis sit amet felis gravida ullamcorper. Cras eget magna faucibus mi auctor ornare. Donec in leo interdum, auctor ex ac, volutpat eros. Mauris tortor dolor, interdum at erat ac, bibendum vestibulum orci. Pellentesque pellentesque felis non neque pulvinar accumsan. Donec massa erat, volutpat et varius eget, maximus sed lectus. In in metus aliquam est mattis pellentesque eget quis mi. Proin malesuada lobortis massa, imperdiet auctor magna posuere ac. Vivamus quis justo ante. Ut imperdiet condimentum ex. Donec vel nisi et diam aliquet pretium a eget velit. Ut vel justo urna. Donec id elementum neque. In hac habitasse platea dictumst. Aenean sed eros sodales, gravida purus non, volutpat ipsum. Sed ante nisi, egestas et placerat iaculis, faucibus non lacus. Aliquam eget nisi sem. Mauris risus tortor, gravida id scelerisque et, blandit a purus. Maecenas urna magna, tempus a purus non, porttitor porttitor justo. Suspendisse sodales dignissim aliquet. Vestibulum facilisis condimentum turpis sed tempor. Vestibulum fermentum felis ut ex auctor blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque elementum dignissim. Duis sed turpis sit amet felis gravida ullamcorper. Cras eget magna faucibus mi auctor ornare. Donec in leo interdum, auctor ex ac, volutpat eros. Mauris tortor dolor, interdum at erat ac, bibendum vestibulum orci. Pellentesque pellentesque felis non neque pulvinar accumsan. Donec massa erat, volutpat et varius eget, maximus sed lectus. In in metus aliquam est mattis pellentesque eget quis mi. Proin malesuada lobortis massa, imperdiet auctor magna posuere ac. Vivamus quis justo ante.</Text>
                        </Grid.Col>
                        <Grid.Col sm={6}>
                            <Text>Ut imperdiet condimentum ex. Donec vel nisi et diam aliquet pretium a eget velit. Ut vel justo urna. Donec id elementum neque. In hac habitasse platea dictumst. Aenean sed eros sodales, gravida purus non, volutpat ipsum. Sed ante nisi, egestas et placerat iaculis, faucibus non lacus. Aliquam eget nisi sem. Mauris risus tortor, gravida id scelerisque et, blandit a purus. Maecenas urna magna, tempus a purus non, porttitor porttitor justo. Suspendisse sodales dignissim aliquet. Vestibulum facilisis condimentum turpis sed tempor. Vestibulum fermentum felis ut ex auctor blandit. Ut imperdiet condimentum ex. Donec vel nisi et diam aliquet pretium a eget velit. Ut vel justo urna. Donec id elementum neque. In hac habitasse platea dictumst. Aenean sed eros sodales, gravida purus non, volutpat ipsum. Sed ante nisi, egestas et placerat iaculis, faucibus non lacus. Aliquam eget nisi sem. Mauris risus tortor, gravida id scelerisque et, blandit a purus. Maecenas urna magna, tempus a purus non, porttitor porttitor justo. Suspendisse sodales dignissim aliquet. Vestibulum facilisis condimentum turpis sed tempor. Vestibulum fermentum felis ut ex auctor blandit. Ut imperdiet condimentum ex. Donec vel nisi et diam aliquet pretium a eget velit. Ut vel justo urna. Donec id elementum neque. In hac habitasse platea dictumst. Aenean sed eros sodales, gravida purus non, volutpat ipsum. Sed ante nisi, egestas et placerat iaculis, faucibus non lacus. Aliquam eget nisi sem. Mauris risus tortor, gravida id scelerisque et, blandit a purus. Maecenas urna magna, tempus a purus non, porttitor porttitor justo. Suspendisse sodales dignissim aliquet. Vestibulum facilisis condimentum turpis sed tempor. Vestibulum fermentum felis ut ex auctor blandit</Text>
                        </Grid.Col>
                    </Grid>
                    <Grid mx={'7%'} my={'xl'} gutter={'xl'}>
                        <Grid.Col sm={6}>
                            <Box
                                c={'white'}
                                my={'xl'}
                                sx={() => ({
                                    backgroundColor: '#189940',
                                    borderRadius: '7px'})
                                }>
                                <Title mx={'xl'} order={2}>Unsere Erfolge</Title>
                            </Box>
                            <Table striped highlightOnHover captionSide={'bottom'} horizontalSpacing={'xl'}>
                                <caption>* Aufstieg in dieser Saison</caption>
                                <thead>
                                <tr>
                                    <th>Saison</th>
                                    <th>Platz</th>
                                    <th>Liga</th>
                                </tr>
                                </thead>
                                <tbody>{rowsAchievement}</tbody>
                            </Table>
                        </Grid.Col>
                        <Grid.Col sm={6}>
                            <Box
                                c={'white'}
                                my={'xl'}
                                sx={() => ({
                                    backgroundColor: '#189940',
                                    borderRadius: '7px'})
                                }>
                                <Title mx={'xl'} order={2}>Unsere Erfolge</Title>
                            </Box>
                            <Table striped highlightOnHover captionSide={'bottom'} horizontalSpacing={'xl'}>
                                <caption>* Aufstieg in dieser Saison</caption>
                                <thead>
                                <tr>
                                    <th>Saison</th>
                                    <th>Platz</th>
                                    <th>Liga</th>
                                </tr>
                                </thead>
                                <tbody>{rowsAchievement}</tbody>
                            </Table>
                        </Grid.Col>
                    </Grid>
                </div>
            </div>
        </div>
    );
}

export default Geschichte;