import { Card, Group, Stack, ThemeIcon, Text } from "@mantine/core";
import { IconMail, IconBrandWhatsapp } from "@tabler/icons-react";
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
        <ContactCard
          name="Miharisoa RAHARITSIRESY"
          email="raharitsiresy@gmail.com"
          phone="+261 34 10 244 25"
          whatsapp="0341024425"
        />
    );
}

export default ContactForm;

interface ContactCardProps {
  name: string;
  email: string;
  phone: string;
  whatsapp?: string; // numéro complet sans + ni espaces
}

export function ContactCard({ name, email, phone, whatsapp }: ContactCardProps) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Stack gap="sm">
        <Text w={700} size="lg">{name}</Text>

        <Group gap="sm" align="center">
          <ThemeIcon color="blue" variant="light" radius="xl">
            <IconMail size={16} />
          </ThemeIcon>
          <Text>
            <a href={`mailto:${email}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              {email}
            </a>
          </Text>
        </Group>

        <Group gap="sm" align="center">
          <ThemeIcon color="teal" variant="light" radius="xl">
            <IconBrandWhatsapp size={16} />
          </ThemeIcon>
          <Text>
            <a href={`https://wa.me/${whatsapp}?text=${encodeURIComponent("Bonjour, je souhaite vous contacter")}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              {phone}
            </a>
          </Text>
        </Group>
      </Stack>
    </Card>
  );
}