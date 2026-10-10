// PROVISÓRIO: número de WhatsApp ainda não informado pelo cliente. Trocar antes de publicar.
export const WHATSAPP_NUMBER = '5551900000000';

const WHATSAPP_MESSAGE = 'Olá! Quero conversar sobre o meu restaurante.';

export const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const INSTAGRAM_HREF = 'https://www.instagram.com/embaixadagourmetbr/';

export const NAV = [
  { label: 'Momentos', href: '#momentos' },
  { label: 'Método', href: '#metodo' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'História', href: '#historia' },
  { label: 'Perguntas', href: '#perguntas' },
];
