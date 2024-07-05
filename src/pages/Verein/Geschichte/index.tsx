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


    return (
        <div>
            <div className={'main'}>
                <Space h={'xl'}/>
                <Space h={'xl'}/>
                <div className={'page-header'}>
                    <Box mx={'7%'} my={'xl'} sx={() => ({
                        backgroundColor: '#1B1A55',
                        borderRadius: '7px'
                    })}>
                        <Title order={1} my={'xl'} mx={'xl'} c={'white'}>
                            Geschichte
                        </Title>
                    </Box>
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
                </div>
            </div>
        </div>
    );
}

export default Geschichte;