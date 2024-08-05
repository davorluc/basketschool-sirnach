/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  Title,
  Text,
  Space,
  Grid,
  Box,
  NumberInput,
  TextInput,
  Checkbox,
  Button,
  Container,
  Group,
  Stack,
  Card,
  Badge,
  Radio,
} from "@mantine/core"

// Stylesheet imports here
import './styles.css';

import { DateInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { useState } from "react";
import validator from "validator";

const singleTrainingData = [
  { title: 'Einzeltraining', price: 'CHF 15', text: 'Für ein einmaliges Training gültig. Müsste bei jedem Besuch in Bar oder per Twint bezahlt werden.' }
]

const stampCardText = 'Nach jedem Training wird Stempel auf dem Kärtchen hinzugefügt bis es voll ist. Bei einer vollen Karte muss eine neue Erworben werden.';

const stampCardData = [
  { title: '6 Trainings', price: 'CHF 80', text: stampCardText },
  { title: '12 Trainings', price: 'CHF 150', text: stampCardText },
]

const subscriptionText = 'Die Jahreszulassung beginnt ab dem Eingang des Jahresbeitrags und ist genau für 1 Jahr gültig.';

const annualSubscriptionData = [
  { title: '1. Jahr', price: 'CHF 330', text: subscriptionText },
  { title: '2. Jahr', price: 'CHF 320', text: subscriptionText },
  { title: '3. Jahr', price: 'CHF 310', text: subscriptionText },
  { title: '3+ Jahre', price: 'CHF 300', text: subscriptionText },
]

const renderSingleTraining = singleTrainingData.map((entry) => (
  <Card shadow={'sm'} radius={'md'} mr={'auto'}>
    <Card.Section>
      <Group m={'md'} className={'training-type-header'}>
        <Text size={'xl'} weight={500} c={'#1B1A55'}>{entry.title}</Text>
        <Badge color={'blue'} variant={'light'} size={'lg'}>
          {entry.price}
        </Badge>
      </Group>
      <Text size={'md'} color={'dimmed'} mx={'lg'} maw={'60ch'} my={'sm'}>
        {entry.text}
      </Text>
    </Card.Section>
  </Card>
));

const renderStampCard = stampCardData.map((entry) => (
  <Grid.Col md={6} sm={4}>
    <Card shadow={'sm'} radius={'md'} mr={'auto'}>
      <Card.Section>
        <Group m={'md'} className={'training-type-header'}>
          <Text size={'xl'} weight={500} c={'#1B1A55'}>{entry.title}</Text>
          <Badge color={'blue'} variant={'light'} size={'lg'}>
            {entry.price}
          </Badge>
        </Group>
        <Text size={'md'} color={'dimmed'} mx={'lg'} maw={'60ch'} my={'sm'}>
          {entry.text}
        </Text>
      </Card.Section>
    </Card>
  </Grid.Col>
));

const renderSubscriptions = annualSubscriptionData.map((entry) => (
  <Grid.Col md={6} sm={6}>
    <Card shadow={'sm'} radius={'md'} mr={'auto'}>
      <Card.Section>
        <Group m={'md'} className={'training-type-header'}>
          <Text size={'xl'} weight={500} c={'#1B1A55'}>{entry.title}</Text>
          <Badge color={'blue'} variant={'light'} size={'lg'}>
            {entry.price}
          </Badge>
        </Group>
        <Text size={'md'} color={'dimmed'} mx={'lg'} maw={'60ch'} my={'sm'}>
          {entry.text}
        </Text>
      </Card.Section>
    </Card>
  </Grid.Col>
));

function Neumitglied() {
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
            Mitgliedschaft
          </Title>
        </Box>
        <Group my={'xl'} mx={'7%'}>
          <Title order={2} c={'#1B1A55'}>Vor der Mitgliedschaft</Title>
          <Text>Jedes Kind hat Anrecht auf zwei gratis Probetrainings bevor er/sie die Entscheidung treffen soll. Dies soll den Kindern ermöglichen einen guten Einblick in die Trainings zu erschaffen und womöglich auch die ersten Freundschaften zu schliessen. Da wir in der Regel in kleineren Gruppen trainieren, lernen sich die Spieler viel schneller kennen, sodass keiner ausgeschlossen wird.</Text>
        </Group>
        <Group my={'xl'} mx={'7%'}>
          <Title order={2} c={'#1B1A55'}>Arten Mitgliedschaft</Title>
          <Text>Generell wird zwischen Einzeltrainings, Sammelkarten und Jahresbeiträgen unterschieden. Nach den absolvierten Probetrainings soll sich das Kind, resp. die Eltern, für eines der Modelle entscheiden. Umso langfristiger das Kind dabei ist, desto weniger Kosten die Trainings im Schnitt.</Text>
        </Group>
        <Stack my={'xl'} mx={'7%'} align={'left'}>
          <Title order={3} c={'#1B1A55'}>Einzeltraining</Title>
          {renderSingleTraining}
        </Stack>
        <Container my={'xl'} mx={'7%'} align={'left'} px={0}>
          <Title order={3} c={'#1B1A55'}>Stempelkarten</Title>
          <Grid>
            {renderStampCard}
          </Grid>
        </Container>
        <Container my={'xl'} mx={'7%'} align={'left'} px={0}>
          <Title order={3} c={'#1B1A55'}>Jahresbeiträge</Title>
          <Grid>
            {renderSubscriptions}
          </Grid>
        </Container>
      </div>
    </div >
  );
}

export default Neumitglied;
