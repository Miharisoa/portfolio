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
                            <Space h={20} />
                            <Text c="dimmed">Voici une sélection de projets clients auxquels j’ai contribué, illustrant mon savoir-faire et ma capacité à transformer des idées en solutions concrètes et efficaces.</Text>
                            <Space h={30}/>
                            <ProjectList />
                            <Space h={50}/>

                            {/* CONTACT */}
                            <Space h={50}/>
                            <Title>Contact</Title>
                            <Space h={20} />
                            <Text c="dimmed">Chaque projet est unique, discutons ensemble de votre idée et construisons quelque chose d’exceptionnel.</Text>
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