export const contactData = {
  // Informations de contact
  phone: '06 06 06 06 06',
  email: 'k.hiphoprespect@yahoo.fr',
  address: '123 Rue de la Danse, 64100 BAYONNE',
  
  // Carte Google Maps
  mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2894.4232679884667!2d-1.477482923083889!3d43.49350497111021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd51408c2578963b%3A0xd21b42155291276d!2sMairie%20de%20Bayonne!5e0!3m2!1sfr!2sfr!4v1745755928081!5m2!1sfr!2sfr',
  
  // Horaires d'ouverture
  hours: {
    weekdays: '9h00 - 20h00',
    saturday: '10h00 - 18h00',
    sunday: 'Fermé',
  },
  
  // Options du formulaire
  formOptions: {
    subjects: [
      { id: 'cours', label: 'Renseignements sur les cours' },
      { id: 'inscription', label: 'Inscription' },
      { id: 'essai', label: "Cours d'essai" },
      { id: 'autre', label: 'Autre' },
    ],
  },
  
  // FAQ
  faqs: [
    {
      question: "Comment s'inscrire aux cours ?",
      answer: "Vous pouvez me contacter par téléphone, email ou via le formulaire pour réserver votre place."
    },
    {
      question: "Proposez-vous des cours d'essai ?",
      answer: "Oui, je propose un cours d'essai gratuit pour vous permettre de découvrir mes méthodes d'enseignement."
    },
    {
      question: "Quel équipement faut-il prévoir ?",
      answer: "Pour votre premier cours, une tenue confortable et des chaussures adaptées suffiront."
    }
  ],
  
  // Options de contact
  contactOptions: {
    call: {
      label: 'Appeler maintenant',
      color: 'call' as 'call', // Type assertion explicite
    },
    sms: {
      label: 'Envoyer un SMS',
      color: 'sms' as 'sms', // Type assertion explicite
    },
    whatsapp: {
      label: 'Contacter sur WhatsApp',
      color: 'whatsapp' as 'whatsapp', // Type assertion explicite
    },
  },
};