// React Imports
import { useState } from "react";

// Mantine Imports
import {
  Title,
  Image,
  Grid,
  Box,
  Card,
  Spoiler,
  Space, AspectRatio, Group, Text, Badge
} from '@mantine/core';

// Image imports
import sonnenhof from '../../../media/hallen/sonnenhof.jpg'

// Data for special Trainings
const trainingData = [
  { date: '05. Juli - 12. August', description: 'Sommerferien, es finden keine Trainings statt', type: 'Ausfall' },
];

const renderTrainingData = trainingData.map((training) => (
  <Grid.Col md={4} sm={5} mt={'md'}>
    <Card shadow={'sm'} radius={'md'}>
      <Card.Section>
        <Group m={'md'}>
          <Text size={'xl'} weight={500}>{training.type}</Text>
          <Badge color={'blue'} variant={'light'}>
            {training.date}
          </Badge>
        </Group>
        <Spoiler showLabel={'mehr'} hideLabel={'weniger'} maxHeight={45} mx={'lg'} mb={'xs'}>
          <Text size={'md'} color={'dimmed'} mx={'lg'} maw={'60ch'} my={'sm'}>
            {training.description}
          </Text>
        </Spoiler>
      </Card.Section>
    </Card>
  </Grid.Col>
));

function Hallen() {
  const [halleSonnenhof, setHalleSonnenhof] = useState(true);
  return (
    <div>
      <div className={'main'}>
        <Space h={'xl'} />
        <Space h={'xl'} />
        <Box mx={'7%'} mt={'4%'} sx={() => ({
          backgroundColor: '#1B1A55',
          borderRadius: '7px'
        })}>
          <Title order={1} mt={'xl'} mx={'xl'} c={'white'}>
            Wann & Wo
          </Title>
        </Box>
        <div className={'gym-grid'}>
          <Grid mx={'8%'} mt={'xl'}>
            <Grid.Col sm={8} md={8} lg={8} mx={'auto'}>
              <Card shadow={'md'} radius={'md'} mb={'xl'} onClick={() => setHalleSonnenhof((v) => !v)}>
                <Card.Section>
                  <AspectRatio ratio={1000 / 500}>
                    <Image
                      src={sonnenhof}
                      fit={'fill'}
                    />
                    {!halleSonnenhof && <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d389.98775837116847!2d8.997254189901522!3d47.465220352224854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479aeb1223472fb3%3A0x43965ac69ec21113!2sTurnhalle%20Birkenweg!5e0!3m2!1sen!2str!4v1720891817953!5m2!1sen!2str"></iframe>}
                  </AspectRatio>
                  <Group position={'apart'} m={'md'}>
                    <Title c={'#1B1A55'} order={2}>Turnhalle am Birkenweg</Title>
                    <Badge color={'blue'} variant={'light'}>
                      Samstags, 10:30 - 12:00
                    </Badge>
                    <Text color={'dimmed'}>Birkenweg 20, 8370 Sirnach, Schweiz</Text>
                  </Group>
                  <Group>
                    <Text mx={'xl'} pb={'xl'}>
                      Hier Trainieren Jungs und Mädchen zusammen. Ebenfalls unterscheiden wir auch die Altersgruppen nicht. Unsere Trainer haben jahrelange Erfahrung in diesem Bereich, sodass jedes Kind sicherlich das bekommt, was nötig ist. Neben Technik schauen unsere Trainer ebenfalls, dass auch genug Spass am Spiel dabei ist. Wir wollen nämlich keine Maschinen kreieren, sondern Kids die Freude an diesem wunderschönen Sport haben. Besondere Termine und Ausfälle finden Sie unten.
                    </Text>
                  </Group>
                </Card.Section>
              </Card>
            </Grid.Col>
          </Grid>
          <Box mx={'7%'} mt={'4%'} sx={() => ({
            backgroundColor: '#1B1A55',
            borderRadius: '7px'
          })}>
            <Title order={1} mt={'xl'} mx={'xl'} c={'white'}>
              Spezielle Termine und Ausfälle
            </Title>
          </Box>
          <Grid mx={'8%'} pb={'xl'}>
            {renderTrainingData}
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Hallen;
