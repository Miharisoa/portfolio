import { Anchor, AppShell, Burger, Container, Drawer, Group, Stack, Title } from "@mantine/core";
import { useState } from "react";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { label: "Compétences", href: "#stacks" },
        { label: "Projets", href: "#projects" },
        { label: "Contact", href: "#contact" }
    ];

    return (
        <AppShell
            padding="md"
            header={{ height: {xs: 60, sm: 70} }}
        >
            <AppShell.Header>
                <Group h="100%" justify="space-between" px={{ xs: "sm", sm: "md" }}>
                    <Title c="cyan" order={3}>&lt;Dev.JS /&gt;</Title>
                    
                    {/* Desktop Navigation */}
                    <Group gap="sm" visibleFrom="sm" className="header-nav">
                        {navLinks.map((link) => (
                            <Anchor key={link.href} className="header-link" href={link.href}>
                                {link.label}
                            </Anchor>
                        ))}
                    </Group>

                    {/* Mobile Hamburger Menu */}
                    <Burger
                        opened={mobileMenuOpen}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        hiddenFrom="sm"
                        size="sm"
                    />
                </Group>
            </AppShell.Header>

            {/* Mobile Navigation Drawer */}
            <Drawer
                opened={mobileMenuOpen}
                onClose={() => setMobileMenuOpen(false)}
                title="Menu"
                position="right"
                size="xs"
            >
                <Stack gap="md">
                    {navLinks.map((link) => (
                        <Anchor
                            key={link.href}
                            className="header-link"
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            style={{ fontSize: "16px" }}
                        >
                            {link.label}
                        </Anchor>
                    ))}
                </Stack>
            </Drawer>

            <AppShell.Main>
                <Container fluid>
                    {children}
                </Container>
            </AppShell.Main>
        </AppShell>
    )
}

export default Layout;