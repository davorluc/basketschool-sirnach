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

function Geschichte() {


  return (
    <div>
      <div className={'main'}>
        <Space h={'xl'} />
        <Space h={'xl'} />
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
              <Text>Die Basketschool Sirnach (BS) wurde im Jahr 2008 ins Leben gerufen, um Kindern und Jugendlichen einen einfachen Einstieg in die Welt des Basketballsports zu bieten. Die Gründungsidee war, jungen Menschen die Möglichkeit zu geben, Basketball in einer lockeren und unterstützenden Umgebung zu entdecken. Durch den sportlichen Einstieg bei der Basketschool sollen sie nicht nur spielerisch ihre Begeisterung für den Sport finden, sondern auch körperliche und soziale Fähigkeiten entwickeln, die sie in ihrem Alltag unterstützen.</Text>
              <Title order={2} mt={'xl'} c={'#1B1A55'}>Der Weg zur offiziellen Vereinsgründung im Jahr 2016</Title>
              <Text>Acht Jahre nach der Gründung entschloss sich die Basketschool Sirnach dazu, als offizieller Verein anerkannt zu werden und damit eine verbindlichere Struktur zu schaffen. 2016 wurde die BS Sirnach als gemeinnütziger, eingetragener Verein registriert. Diese Umstrukturierung war ein wichtiger Schritt, um die Vereinsarbeit zu festigen und die Rahmenbedingungen für Mitglieder und Trainer nachhaltig zu gestalten. Die offizielle Registrierung ermöglichte es dem Verein, seine Angebote zu erweitern und mehr lokale Unterstützung zu gewinnen, um noch mehr Kindern und Jugendlichen den Zugang zum Basketball zu ermöglichen.</Text>
              <Title order={2} mt={'xl'} c={'#1B1A55'}>Werte und MItgliedschaft bei "cool and clean"</Title>
              <Text>Seit 2011 ist die Basketschool Sirnach stolzes Mitglied von „cool and clean“, dem grössten Präventionsprogramm im Schweizer Sport. „cool and clean“ setzt sich für einen verantwortungsvollen, fairen und gesunden Umgang mit Sport ein und fördert Werte wie Respekt, Fairplay und Teamgeist. Die Mitgliedschaft in diesem Programm spiegelt die Werte wider, die auch die BS Sirnach vermitteln möchte: ein Basketballtraining, das über den Sport hinausgeht und bei den Kindern und Jugendlichen ein Bewusstsein für gesundes Verhalten und Teamverantwortung weckt. In der Zusammenarbeit mit „cool and clean“ stärkt die Basketschool die Qualität ihres Angebots und motiviert die Teilnehmer, sich positiv und engagiert im Sportumfeld zu verhalten.</Text>
            </Grid.Col>
            <Grid.Col sm={6} mb={'xl'}>
              <Title order={2} mt={'xl'} c={'#1B1A55'}>Trainingsangebote und Philosophie der Basketschool Sirnach</Title>
              <Text>Die Basketschool Sirnach bietet ein wöchentliches Training für eine gemischte Gruppe an, in der Jungen und Mädchen unterschiedlichen Alters gemeinsam trainieren können. Dieses Konzept der Alters- und Geschlechterdurchmischung fördert den Zusammenhalt und ermöglicht es den Teilnehmern, voneinander zu lernen. Jede Spielerin und jeder Spieler wird individuell gefördert und kann sich in seinem eigenen Tempo entwickeln, unabhängig von Leistungsansprüchen oder Wettkampfdruck.

                Der Fokus des Trainings liegt auf den Grundlagen des Basketballs. Dazu zählen das Dribbeln, Passen und Fangen, die als wesentliche technische Fertigkeiten spielerisch vermittelt werden. Zusätzlich werden die Grundlagen der Offensive und Defensive trainiert. Dieser spielerische Aufbau fördert nicht nur das sportliche Können, sondern soll den Kindern und Jugendlichen vor allem die Freude am Basketball näherbringen. Die Übungen sind darauf ausgelegt, dass alle Teilnehmenden Spaß haben und motiviert sind, sich zu verbessern. Gleichzeitig sollen sie lernen, gemeinsam als Team zu agieren und sich gegenseitig zu unterstützen.</Text>
              <Title order={2} mt={'xl'} c={'#1B1A55'}>Ziel und Vision der Basketchool Sirnach</Title>
              <Text>Das Hauptziel der Basketschool Sirnach ist es, Kindern und Jugendlichen in der Region die Möglichkeit zu geben, Basketball als eine Freizeitaktivität kennenzulernen, die nach ihren eigenen Interessen gestaltet werden kann. Spielerinnen und Spieler sollen hier die Gelegenheit haben, unabhängig von ihrer Vorerfahrung oder ihren Fähigkeiten Basketball zu spielen und sich in einem wertschätzenden Umfeld zu bewegen. Die BS Sirnach setzt darauf, dass durch die regelmäßigen Trainingseinheiten nicht nur sportliche Fähigkeiten gefördert werden, sondern dass die Teilnehmer auch Selbstbewusstsein und Freude an der Bewegung entwickeln.

                Die Basketschool Sirnach versteht sich als eine Plattform, die Jugendlichen eine sportliche Grundlage und die Möglichkeit gibt, Basketball in einem geselligen und lernorientierten Umfeld zu erleben.</Text>
            </Grid.Col>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Geschichte;
