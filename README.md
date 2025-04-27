# 🩰 Karyn' Danse - Site Web Officiel

![Karyn Danse](https://via.placeholder.com/800x400?text=Karyn+Danse)

---

## 📋 Sommaire

- [🩰 Karyn' Danse - Site Web Officiel](#-karyn-danse---site-web-officiel)
  - [📋 Sommaire](#-sommaire)
  - [🌟 À propos du projet](#-à-propos-du-projet)
    - [Objectifs](#objectifs)
  - [🔧 Technologies utilisées](#-technologies-utilisées)
    - [Frontend](#frontend)
    - [Backend](#backend)
    - [Outils de développement](#outils-de-développement)
  - [✨ Fonctionnalités](#-fonctionnalités)
    - [🏠 Page d’accueil](#-page-daccueil)
    - [👨‍🏫 Section Cours](#-section-cours)
    - [📞 Page Contact](#-page-contact)
    - [🧩 Composants UI](#-composants-ui)
  - [🚀 Installation](#-installation)
  - [📁 Structure du projet](#-structure-du-projet)
  - [🔑 Variables d’environnement](#-variables-denvironnement)
  - [Config e-mail pour le formulaire Contact](#config-e-mail-pour-le-formulaire-contact)
  - [Ajoute d’autres vars si besoin…](#ajoute-dautres-vars-si-besoin)
  - [👨‍💻 Guide de développement](#-guide-de-développement)
  - [Dev](#dev)
  - [Prod build](#prod-build)
  - [Start prod](#start-prod)
  - [Lint](#lint)
  - [Format](#format)
  - [🌐 Déploiement](#-déploiement)
    - [Préparation](#préparation)
    - [Build pour prod](#build-pour-prod)
  - [🔄 Maintenance](#-maintenance)
  - [👏 Crédits et remerciements](#-crédits-et-remerciements)

---

## 🌟 À propos du projet

**Karyn' Danse** est un site web moderne et interactif pour une école de danse, conçu pour :

- Présenter l'école et ses services  
- Faciliter le contact avec les élèves potentiels  
- Offrir une interface fluide, réactive et esthétique  

### Objectifs

1. Présenter l'école de danse et ses services  
2. Permettre aux visiteurs de contacter facilement l'école  
3. Donner toutes les infos sur les cours (descriptions, horaires)  
4. Proposer une UX moderne et attrayante  

---

## 🔧 Technologies utilisées

### Frontend

- **Next.js 14** – Framework React avec SSR  
- **React** – Bibliothèque UI  
- **TypeScript** – JavaScript typé  
- **Tailwind CSS** – CSS utilitaire  
- **Framer Motion** – Animations React  

### Backend

- **Node.js** – Exécution JS côté serveur  
- **Nodemailer** – Envoi d’e-mails depuis Node  

### Outils de développement

- **ESLint** – Linting  
- **Prettier** – Formatage  

---

## ✨ Fonctionnalités

### 🏠 Page d’accueil

- Présentation graphique de Karyn’ Danse  
- Navigation fluide  
- Animations interactives  

### 👨‍🏫 Section Cours

- Liste des cours disponibles  
- Descriptions détaillées  
- Horaires par créneau  

### 📞 Page Contact

- Formulaire avec validation côté client & serveur  
- Carte Google Maps interactive  
- Plusieurs options de contact (téléphone, email, WhatsApp)  
- FAQ dynamique  

### 🧩 Composants UI

- Navbar « glassmorphism » au scroll  
- Design 100 % responsive  
- Thème cohérent avec l’identité de l’école  

---

## 🚀 Installation

1. **Cloner le dépôt**

```bash
git clone https://github.com/votre-nom/karyn_danse.git
cd karyn_danse
```

Installer les dépendances

```bash
npm install
# ou
yarn install
```

Configurer les variables d’environnement
Crée un fichier .env à la racine (voir Variables d’environnement).

Lancer le serveur de dev

```bash
npm run dev
# ou
yarn dev
```

Ouvrir
Accède à <http://localhost:3000> dans ton navigateur.

---

## 📁 Structure du projet

```plaintext
karyn_danse/
├── .env                   # Variables d'environnement
├── public/                # Assets statiques (images, fonts…)
├── src/
│   ├── actions/           # Server Actions (ex : contactActions.ts)
│   ├── app/
│   │   ├── contact/       # Page Contact
│   │   │   ├── components/
│   │   │   ├── data.ts
│   │   │   └── page.tsx
│   │   ├── cours/         # Page Cours
│   │   └── page.tsx       # Page d'accueil
│   ├── components/
│   │   ├── layout/        # Header, Footer…
│   │   └── ui/            # Composants réutilisables
│   └── styles/
│       └── globals.css    # Tailwind globals
├── tailwind.config.js     # Config Tailwind
└── tsconfig.json          # Config TypeScript
```

---

## 🔑 Variables d’environnement

Crée un fichier .env à la racine :

dotenv

## Config e-mail pour le formulaire Contact

`EMAIL_USER=votre_adresse_email@gmail.com`
`EMAIL_PASSWORD=votre_mot_de_passe_application_gmail`

## Ajoute d’autres vars si besoin…

💡 Pour Gmail :

Active la 2FA sur ton compte Google

Crée un mot de passe d’application :
[Page des mots de passe d'application Google](https://myaccount.google.com/apppasswords)

---

## 👨‍💻 Guide de développement

Conventions de code
Components React + TypeScript

Architecture modulaire

Respect du pattern Pages/Components de Next.js

Commandes utiles

## Dev

npm run dev

## Prod build

npm run build

## Start prod

npm run start

## Lint

npm run lint

## Format

npm run format

---

## 🌐 Déploiement

### Préparation

Vérifie tes vars d'environnement

### Build pour prod

```bash
npm run build
```

---

## 🔄 Maintenance

Mise à jour du contenu
Tous les contenus sont dans les data.ts.

Modifie les données → rebuild si besoin.

Mises à jour techniques

npm outdated   # lister les dépendances obsolètes
npm update     # mettre à jour tout
npm update nom-du-package  # package spécifique

---

## 👏 Crédits et remerciements

Développé par Jacques Poulin
