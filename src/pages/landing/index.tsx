import React from 'react';
import { Space, Stack, Title, Text, Container } from '@mantine/core';

import Layout from './layout';
import Hero from './components/hero';
import TechStack from './components/tech-stack';
import About from './components/about';
import ProjectList from './components/projects';
import ContactForm from './components/contact-form';

const Portfolio: React.FC = () => {

    return (
        <>

            <Layout>
                <Container size="lg" py={80} fluid>
                    <Stack gap={60}>
                        {/* HERO */}
                        <Hero />

                        {/* TECHNOLOGIES */}
                        <TechStack />

                        {/* ABOUT  */}
                        <Space h={50}/>
                        <About />

                        <Space h={50}/>
                        <Container ta="center">
                            {/* EXPERIENCES */}
                            <Title>Projets</Title>
                            <Text c="dimmed">Quelques projets clients auxquels j'ai participé</Text>
                            <Space h={30}/>
                            <ProjectList />
                            <Space h={50}/>

                            {/* CONTACT */}
                            <Title>Contact</Title>
                            <Text c="dimmed">Une remarque ? une suggestion ? N'hésitez pas à m'écrire</Text>
                            <Space h={30}/>
                            <ContactForm />
                        </Container>

                    </Stack>
                </Container>
            </Layout>
        </>
    );
};

export default Portfolio;