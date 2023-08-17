/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Title, Text, Space, Grid, NumberInput } from "@mantine/core";
import { TextInput, Checkbox, Button, Group, Radio } from "@mantine/core";

import { DateInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { useState } from "react";

function underAgeValidate(birthday: Date) {
    const age = ~~((Date.now() - birthday.getTime()) / 31557600000);
    return age > 18;
}

function Neumitglied() {
    const [date, setDateValue] = useState<Date | null>(null);

    const form = useForm({
        initialValues: {
            name: "",
            surname: "",
            birthdate: "",
            email: "",
            phone: "",
            gdpr: false,
            address: {
                street: "",
                number: undefined,
                zip: undefined,
                city: "",
            },
            ahv: undefined,
            sex: undefined,
            socialPermission: false,
            supervisor: {
                name: "",
                surname: "",
                phone: "",
                email: "",
            },
        },

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
            name: (value) => (value.length < 3 ? "Der Name ist nicht valide" : null),
            surname: (value) => (value.length < 3 ? "Der Nachname ist nicht valide" : null),
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
                    <form onSubmit={form.onSubmit((values) => console.log(values))}>
                        <Grid mx={"7%"} my={"xl"} grow>
                            <Grid.Col sm={6} span={2}>
                                <TextInput withAsterisk label="Vorname" placeholder="Marcus" {...form.getInputProps("name")} />
                                <TextInput withAsterisk label="Name" placeholder="Aurelius" {...form.getInputProps("surname")} />
                                <DateInput
                                    withAsterisk
                                    valueFormat="DD.MM.YYYY"
                                    label="Geburtsdatum"
                                    placeholder="15.7.2007"
                                    // onChange={(value: Date) => {
                                    //     setDateValue(value);
                                    //     if (underAgeValidate(value)) {
                                    //         console.log("under age");
                                    //     }
                                    // }}
                                />
                                <TextInput withAsterisk label="Email" placeholder="marcus.aurelius@gmail.com" {...form.getInputProps("email")} />
                                <NumberInput label="Telefonnummer" placeholder="0795648977" hideControls {...form.getInputProps("phone")} />
                            </Grid.Col>
                            <Grid.Col sm={6} span={2}>
                                <TextInput withAsterisk label="Strasse" placeholder="Hauptstrasse" {...form.getInputProps("address.street")} />
                                <NumberInput withAsterisk label="Nummer" placeholder="12" hideControls {...form.getInputProps("address.number")} />
                                <NumberInput withAsterisk label="PLZ" placeholder="8000" hideControls {...form.getInputProps("address.zip")} />
                                <TextInput withAsterisk label="Ort" placeholder="Zürich" {...form.getInputProps("address.city")} />
                                <NumberInput label="AHV Nummer" placeholder="756.1234.5678.97" hideControls {...form.getInputProps("ahv")} />
                                <Radio.Group name="sex" label="Geschlecht" withAsterisk>
                                    <Group mt="xs">
                                        <Radio value={0} label="M" />
                                        <Radio value={1} label="W" />
                                    </Group>
                                </Radio.Group>
                            </Grid.Col>
                            {/*Place for supervisor data
                            <Grid.Col sm={6} span={2}></Grid.Col> */}
                        </Grid>
                        <Checkbox mx={"lg"} mt="md" label="Ich akzeptiere die Datenschutzbestimmungen." {...form.getInputProps("gdpr", { type: "checkbox" })} />
                        <Checkbox
                            mt="md"
                            mx={"lg"}
                            label="Ich bin damit einverstanden, dass Fotos von mir auf der Website und in den sozialen Medien veröffentlicht werden."
                            {...form.getInputProps("socialPermission", { type: "checkbox" })}
                        />
                        <Group position="right" mt="md" mx="lg">
                            <Button type="submit">Submit</Button>
                        </Group>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Neumitglied;
