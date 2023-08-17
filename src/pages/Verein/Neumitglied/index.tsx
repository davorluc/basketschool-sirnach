/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Title, Text, Space, Grid, NumberInput } from "@mantine/core";
import { TextInput, Checkbox, Button, Group } from "@mantine/core";

import { DateInput } from '@mantine/dates';
import { useForm } from "@mantine/form";

function Neumitglied() {
    const form = useForm({
        initialValues: {
            name: "",
            surname: "",
            birthdate: "",
            email: "",
            phone: "",
            gdpr: false,
        },

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
            name: (value) => (value.length < 3 ? 'Der Name ist nicht valide' : null),
            surname: (value) => (value.length < 3 ? 'Der Nachname ist nicht valide' : null),


          },
    });

    return (
        <div>
            <div className={"main"}>
                <Space h={"xl"} />
                <Space h={"xl"} />
                <div className={"page-header"}>
                    <Title order={1} my={"xl"} mx={"7%"} c={"#189940"}>
                        Werde ein Teil von uns!
                    </Title>

                    <Text my={"m"} mx={"7%"}>
                        Wir freuen uns über jedes neue Mitglied!
                    </Text>
                    <Text my={"m"} mx={"7%"}>
                        Fülle einfach das Formular aus und wir melden uns bei dir!
                    </Text>
                </div>
                <div className={"page-content"}>
                    <Grid mx={"7%"} my={"xl"} gutter={"xl"}>
                        <Grid.Col sm={6}>
                            <form onSubmit={form.onSubmit((values) => console.log(values))}>
                                <TextInput withAsterisk label="Vorname" placeholder="Marcus" {...form.getInputProps("name")} />
                                <TextInput withAsterisk label="Name" placeholder="Aurelius" {...form.getInputProps("surname")} />
                                <DateInput withAsterisk valueFormat="YYYY.MM.DD" label="Geburtsdatum" placeholder="15.7.2007" value={...form.getInputProps("birthdate")} onChange={} />
                                <TextInput withAsterisk label="Email" placeholder="marcus.aurelius@gmail.com" {...form.getInputProps("email")} />
                                <NumberInput label="Nummer" placeholder="0795648977" hideControls {...form.getInputProps("phone")} />

                                <Checkbox
                                    mt="md"
                                    label="Ich akzeptiere die Datenschutzbestimmungen."
                                    {...form.getInputProps("gdpr", { type: "checkbox" })}
                                />

                                <Group position="right" mt="md">
                                    <Button type="submit">Submit</Button>
                                </Group>
                            </form>
                        </Grid.Col>
                    </Grid>
                </div>
            </div>
        </div>
    );
}

export default Neumitglied;
