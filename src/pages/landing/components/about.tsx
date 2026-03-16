import { Grid, Space, Title, Text, Paper, Group, Stack } from "@mantine/core";

const About: React.FC = () => {

    return (
        <Grid align="stretch" display="flex">
            <Grid.Col span={{base: 12, md: 6}}>
                <Title>À propos de moi</Title>
                <Space h={20} />
                <Text>
                    Développeuse web fullstack (React/Node) avec un <b>dominant frontend</b>. <br />
                    Depuis plus de 5 ans, j'accompagne les entreprises dans la conception et développement de solutions numériques sur mesure.
                    J'apprécie le challenge et je suis convaincue que dans le monde de l'informatique, on n'arrête jamais d'apprendre. 
                </Text>
                <Space h={50} />
                <Title order={2}>Mon approche</Title>
                <Space h={20} />
                <Text>
                    Je privilégie la qualité du code, les bonnes pratiques de développement et une communication transparente avec mes clients.
                    Chaque projet est une opportunité de résoudre un problème de plus pour avoir un monde meilleur.
                </Text>
            </Grid.Col>
            <Grid.Col span={{base: 12, md: 6}}>
                <Paper shadow="lg" p={50} h="100%">
                    <Group ta="center" justify="space-between" align="center" h="100%">
                        <Stack>
                            <Title order={1}>5+</Title>
                            <Text>Années d'expériences</Text>
                        </Stack>
                        <Stack>
                            <Title order={1}>2+</Title>
                            <Text>Missions réalisées</Text>
                        </Stack>
                        <Stack>
                            <Title order={1}>2+</Title>
                            <Text>Technos maitrisées</Text>
                        </Stack>
                    </Group>
                </Paper>
            </Grid.Col>
        </Grid>
    );
}

export default About;