import { Anchor, AppShell, Container, Group, Title } from "@mantine/core";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <AppShell
            padding="md"
            header={{ height: {sm: 80, md: 60} }}
        >
            <AppShell.Header>
                <Group h="100%" align="center" px="md" justify="space-around">
                    <Title c="cyan" order={3}>&lt;Dev.JS /&gt;</Title>
                    <Group gap="lg">
                        <Anchor className="header-link" href="#projects">Projects</Anchor>
                        <Anchor className="header-link" href="#stacks">Stacks</Anchor>
                        <Anchor className="header-link" href="#contact">Contact</Anchor>
                    </Group>
                </Group>
            </AppShell.Header>

            <AppShell.Main>
                <Container fluid>
                    {children}
                </Container>
            </AppShell.Main>
        </AppShell>
    )
}

export default Layout;