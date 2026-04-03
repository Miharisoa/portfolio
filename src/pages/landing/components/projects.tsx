import { Anchor, Button, Card, Grid, Group, Image, Text } from "@mantine/core";
import type { Project } from "../interfaces/common.interface";
import { PROJECTS } from "../constants/projects.constant";

const ProjectList: React.FC = () => {
    return (
        <>
            <Grid id="projects">
                {PROJECTS.map((project: Project, index: number) => (
                    <Grid.Col key={index} span={{base:12, md: 6}}>
                        <Card shadow="sm" padding="lg" radius="md" withBorder>
                            <Card.Section>
                                <Image
                                    src={project.image}
                                    height={160}
                                    alt={project.name}
                                />
                            </Card.Section>

                            <Group justify="space-between" mt="md" mb="xs">
                                <Anchor href={project.url} target="_blank">{project.name}</Anchor>
                            </Group>

                            <Text size="sm" c="dimmed" ta="left">
                                {project.description}
                            </Text>

                            <Button color="blue" fullWidth mt="md" radius="md">
                                Voir le projet
                            </Button>
                        </Card>
                    </Grid.Col>
                ))}
            </Grid>
        </>
    );
}

export default ProjectList;