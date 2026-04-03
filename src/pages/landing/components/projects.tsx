import { Anchor, Button, Card, Grid, Group, Image, List, Modal, SimpleGrid, Space, Text, Title } from "@mantine/core";
import type { Project } from "../interfaces/common.interface";
import { PROJECTS } from "../constants/projects.constant";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";

const ProjectList: React.FC = () => {
    const [opened, { open, close }] = useDisclosure(false);
    const [selectedProject, setSelectedProject] = useState<Project|null>(null);

    const handleOpenModal = (item: Project) => {
        setSelectedProject(item);
        open();
    }

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

                            <Button color="blue" fullWidth mt="md" radius="md" onClick={() => handleOpenModal(project)}>
                                Voir le projet
                            </Button>
                        </Card>
                    </Grid.Col>
                ))}
            </Grid>
            {selectedProject && <Modal opened={opened} onClose={close} title={
                <Title order={2}>{selectedProject.name}</Title>
            } fullScreen>
                <SimpleGrid cols={3}>
                    {selectedProject.screenshots.map((s: string, i: number) => (<Image fit="contain" height={300} key={`capture-${i}`} src={s} />))}
                </SimpleGrid>
                <Space h={30} />
                <Title order={4}>Contexte & objectif</Title>
                <Text>{selectedProject.context}</Text>

                <Space h={30} />
                <Title order={4}>Principaux fonctionnalités</Title>
                <List>
                    {selectedProject.features.map((f: string, i: number) => (<List.Item key={`features-${i}`}>{f}</List.Item>))}
                </List>
                
            </Modal>}
        </>
    );
}

export default ProjectList;