import { Grid, Paper, Space, Text, Title } from "@mantine/core";
// import { Button, Grid, Paper, Space, Stack, Text, Textarea, TextInput, Title } from "@mantine/core";
// import { useState } from "react";

const ContactForm: React.FC = () => {

    // const [formData, setFormData] = useState({
    //     name: "",
    //     email: "",
    //     message: "",
    // });

    // const handleChange = (field: keyof typeof formData) => (value: string) => {
    //     setFormData(prev => ({ ...prev, [field]: value }));
    //     // Efface le statut précédent quand l'utilisateur recommence à taper
    //     // if (status) setStatus(null);
    // };

    // const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

    // const handleMailto = () => {
    //     if (!validateEmail(formData.email)) return;
    //     const subject = encodeURIComponent("PRISE DE CONTACT");
    //     const body = encodeURIComponent(
    //         `Nom : ${formData.name}\nEmail : ${formData.email}\n\nMessage :\n${formData.message}`
    //     );
    //     window.location.href = `mailto:raharitsiresy@gmail.com?subject=${subject}&body=${body}`;
    //     console.log("Message sent");
    // }

    return (
        <Paper shadow="md" p="xl" ta="left" id="contact">
            <Grid>
                <Grid.Col span={{base: 12}}>
                    <Title order={2}>Construisons ensemble</Title>
                    <Space h={10}/>
                    <Text size="md">Currently available for freelance opportunities or full-time roles. Drop me a message and I'll get back to you within 24 hours.</Text>
                    <Space h={10}/>
                    <Text size="sm" c="cyan">raharitsiresy@gmail.com</Text>
                    <Text size="sm" c="cyan">+261 34 10 244 25</Text>
                </Grid.Col>
                {/* <Grid.Col span={{base: 12, md: 6}}>
                    <Stack>
                        <TextInput
                            label="Votre nom"
                            value={formData.name}
                            onChange={(e) => handleChange("name")(e.currentTarget.value)}
                            required 
                        />
                        <TextInput
                            label="Votre e-mail"
                            value={formData.email}
                            onChange={(e) => handleChange("email")(e.currentTarget.value)}
                            required
                        />
                        <Textarea
                            label="Message"
                            value={formData.message}
                            onChange={(e) => handleChange("message")(e.currentTarget.value)}
                            rows={10}>
                        </Textarea> 
                    <Button mt="md" onClick={handleMailto}>Envoyer</Button>
                    </Stack>
                </Grid.Col> */}
            </Grid>
        </Paper>
    );
}

export default ContactForm;