import { Box, Button, Stack, Title, Group } from "@mantine/core";
import { TECH_ITEMS, type TechItem } from "../constants/tech.constant.tsx";

const TechStack: React.FC = () => {
    return (
        <Stack align="center" id="stacks">
            <Title my="lg" order={1}>Compétences techniques</Title>
            <Group wrap="wrap">
                {TECH_ITEMS.map((tech: TechItem, index: number) => (
                    <Button key={index} variant="default">
                        <Box w={20} mr="xs">{tech.logo}</Box>
                        <span>{tech.name}</span>
                    </Button>
                ))}
            </Group>
        </Stack>
    );
}

export default TechStack;