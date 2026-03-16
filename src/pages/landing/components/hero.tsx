import { Stack, Image, Text, Title, Group, Button } from "@mantine/core";
import profilePic from '../../../assets/profil.jpeg';

const Hero: React.FC = () => {
    return (
        <Stack align="center" gap="md">
            <Image src={profilePic} height={200} radius="50%" w="auto" />
            <Text size="lg" fw={700} c="cyan">Bonjour, je suis</Text>
            <Title order={1} ta="center">Miharisoa RAHARITSIRESY</Title>
            <Title order={2} c="lightgray">Développeuse Web</Title>

            <Text c="dimmed" size="lg" ta="center" maw={600}>
                Avec une expertise particulière en TypeScript, React et NodeJS, j'aide les
                entreprises ou particuliers à convertir des idées en solutions numériques.
            </Text>
            
            <Group mt="lg">
                <Button size="md">Me contacter</Button>
                <Button size="md" variant="outline">Télécharger mon CV</Button>
            </Group>
        </Stack>
    );
}

export default Hero;