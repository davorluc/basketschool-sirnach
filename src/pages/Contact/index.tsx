import React from 'react';

import {
  Title,
  Box,
  Text,
  Grid,
  Image,
  Card,
  AspectRatio,
  Group,
  Stack,
  Badge,
  ThemeIcon,
  Space
} from "@mantine/core";

import davor from '../../media/portraits/davor.jpeg';
import placeholder from '../../media/basketschool_sirnach_alternatelogo_withwhite.png';

import { Phone, Mail } from 'tabler-icons-react'

import './styles.css';


const contactData = [
  { image: placeholder, name: 'Thomas Frischknecht', tel: '+41797970862', email: 'thomas@basketschool.ch', role: 'Präsident' },
  { image: davor, name: 'Davor Lucic', tel: '+41791795801', email: 'd.lucic4@hotmail.com', role: 'Trainer' },
];

const renderContacts = contactData.map((contact) => (
  <Grid.Col sm={6} md={4} xl={3}>
    <Card shadow='md' radius='md' mb='xl'>
      <Card.Section>
        <AspectRatio ratio={6 / 7}>
          <Image
            src={contact.image}
          />
        </AspectRatio>
        <Group position='apart' mx='md' my='xs'>
          <Title c='#1B1A55' order={2}>{contact.name}</Title>
        </Group>
        <Stack spacing='xs' mt='lg'>
          <Text c='dimmed' component='a' href={`mailto:${contact.email}`} mx='lg'><ThemeIcon mx='sm' color='blue' variant='light'><Mail /></ThemeIcon>{contact.email}</Text>
          <Text c='dimmed' component='a' href={`tel:${contact.tel}`} mx='lg' mb='md'><ThemeIcon mx='sm' color='blue' variant='light'><Phone /></ThemeIcon>{contact.tel}</Text>
          <Badge color='blue' variant='light' m={'xs'}>{contact.role}</Badge>
        </Stack>
      </Card.Section>
    </Card>
  </Grid.Col>
));

function Contact() {
  return (
    <div className={'main'}>
      <Space h={'xl'} />
      <Space h={'xl'} />
      <Box mx={'7%'} mt={'4%'} sx={() => ({
        backgroundColor: '#1B1A55',
        borderRadius: '7px'
      })}>
        <Title order={1} m={'xl'} c={'white'}>
          Kontakt
        </Title>
      </Box>
      <Text mx={'7%'} mb={'xl'}>
        Wir freuen uns, dass du dich für unseren Basketballverein interessierst! Egal, ob du Fragen zum Training, zur Mitgliedschaft oder zu unserem Verein im Allgemeinen hast – wir stehen dir gerne zur Verfügung.
      </Text>
      <Text mx={'7%'} mb={'xl'}>
        Wenn es um das Training, unser Team oder Basketball-Themen geht, ist unser Trainer Davor dein Ansprechpartner. Für alles rund um den Verein, wie Mitgliedschaften, organisatorische Fragen oder sonstige Anliegen, kannst du dich an unseren Vereinspräsidenten Thomas wenden.
      </Text>
      <div className={'contact-grid'}>
        <Grid gutter={30} mx={'8%'}>
          {renderContacts}
        </Grid>
      </div>
    </div>
  );
}

export default Contact;
