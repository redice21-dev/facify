const { initializeApp } = require("firebase/app");
const { getFirestore, doc, setDoc } = require("firebase/firestore");

const firebaseConfig = {
  projectId: "facify",
  appId: "1:509791774647:web:d7bab588a7601ccdaaea32", 
  storageBucket: "facify.firebasestorage.app", 
  apiKey: "AIzaSyBL8xP2A-CI7bhSQnWfZ11ecTnI5rm7mt8", 
  authDomain: "facify.firebaseapp.com", 
  messagingSenderId: "509791774647", 
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const siteContent = {
  home: {
    hero: {
      badge: "WE ARE EXPERT TEAM",
      title: "We create products that makes people's lives easier & better.",
      highlight: "lives",
      button1: "How it works?",
      button2: "Read the full story line"
    },
    services: {
      badge: "OUR SERVICES",
      title: "We Will Help Your Business Growing",
      list: [
        {
          icon: "fas fa-mobile-alt",
          title: "Social Marketing",
          desc: "Social marketing is an approach used to develop activities aimed."
        },
        {
          icon: "fas fa-users",
          title: "Business Ideas",
          desc: "Based on client needs, We will provide some good business solutions."
        },
        {
          icon: "fas fa-code",
          title: "Development",
          desc: "Creating Your Own Website was Never That Easy. Come and Check it Out!"
        }
      ]
    },
    about: {
      badge: "ABOUT OUR COMPANY",
      title: "We are team of expert people with creativity ideas",
      desc: "As an example, let's take the content marketing process. It's a process you'll find in every Marketing Department out there.",
      features: [
        { icon: "fas fa-paint-brush", title: "Designing", desc: "Expert in photoshop" },
        { icon: "fas fa-code", title: "Development", desc: "Any CMS you want" },
        { icon: "fas fa-share-alt", title: "Social Media", desc: "Increase your likes" },
        { icon: "fab fa-wordpress", title: "WordPress", desc: "Themes and Plugins" }
      ]
    },
    process: {
      badge: "ABOUT OUR COMPANY",
      title: "Our business process road",
      steps: [
        { number: "01.", title: "Create an Idea", desc: "What's hard is to develop the habits that enable us to come up with great ideas." },
        { number: "02.", title: "Complete the Project", desc: "You can organize yourself and your team in endless ways." },
        { number: "03.", title: "Execution", desc: "When it comes to motivating teams, awarding members for good performance." }
      ]
    },
    projects: {
      badge: "PROJECTS WE DONE",
      title: "Our recent creative projects",
      subtitle: "Let's check some of our perfect projects."
    },
    testimonials: {
      badge: "OUR TESTIMONIALS",
      title: "Our happy customers",
      desc: "The testimonials feature lets you collect kudos from customers and clients and display them on your site in different ways to add credibility and a professional feel.",
      list: [
        {
          quote: "Great customer service, Social Media Marketing Company is professional and extremely serious about business. I have increased my revenue of my business.",
          author: "Sarah Thomas",
          role: "client"
        }
      ]
    },
    cta: {
      title: "Start your own business",
      highlight: "Ready?",
      desc: "We are here to start your new project and finish it soon",
      button: "Contact Us Today"
    }
  },
  about: {
    hero: {
      title: "About Us"
    },
    intro: {
      badge: "ABOUT OUR COMPANY",
      title: "We are a team of expert people with creative ideas",
      desc: "As an example, let's take the content marketing process. It's a process you'll find in every Marketing Department out there. We specialize in delivering high-impact solutions that drive growth and engagement for modern businesses.",
      features: [
        "Professional & Dedicated Team",
        "Innovative Business Solutions",
        "24/7 Premium Customer Support"
      ]
    },
    mission: {
      title: "Our Mission",
      desc: "To empower businesses by providing innovative digital tools and creative strategies that transform their online presence and drive measurable success."
    },
    vision: {
      title: "Our Vision",
      desc: "To be the world's leading creative agency, recognized for our commitment to excellence, innovation, and the success of our global clients."
    },
    team: {
      badge: "EXPERT TEAM",
      title: "Meet Our Creative Minds",
      members: [
        { name: "Faith Achigbulem", role: "Creative Director", image: "faith.jpeg" },
        { name: "Joy Okwu", role: "Lead Designer", image: "/cooperate look.png" },
        { name: "Henry Elechi", role: "Business Strategist", image: "/older man.png" }
      ]
    },
    cta: {
      title: "Start your project with 30% Off today!",
      desc: "Contact us now and let's build something amazing together.",
      button: "Start your new project"
    }
  },
  services: {
    hero: {
      badge: "WE CARE ABOUT YOUR BUSINESS",
      title: "We Will Help Your Business Growing"
    },
    businessServices: {
      badge: "POPULAR PACKAGES",
      title: "Our Business Services",
      list: [
        { icon: "fas fa-mobile-alt", title: "Social Marketing", desc: "Social marketing is an approach used to develop activities aimed at changing behavior for the better." },
        { icon: "fas fa-rocket", title: "Startups", desc: "We've funded hundreds of companies over the world, you'll find them all here." },
        { icon: "fas fa-chart-line", title: "Business Growing", desc: "Based on client needs, We will provide some good business solutions." },
        { icon: "fas fa-code", title: "Development", desc: "Creating Your Own Website was Never That Easy. Come and Check It Out!" }
      ]
    },
    processRoad: {
      badge: "WE CAN DO IT!",
      title: "Our Business Process Road",
      steps: [
        { number: "01.", title: "Create an Idea", desc: "What's hard is to develop the habits that enable us to come up with great ideas." },
        { number: "02.", title: "Complete the Project", desc: "You can organize yourself and your team in endless ways." },
        { number: "03.", title: "Execution", desc: "When you have a great plan, the execution is the key to success." }
      ]
    },
    projectsProcess: {
      badge: "WE'RE EXPERT TEAM",
      title: "Projects Process",
      steps: [
        { label: "Strategy", icon: "fas fa-comments" },
        { label: "Design", icon: "fas fa-gem" },
        { label: "Launch", icon: "fas fa-atom" }
      ]
    },
    techStack: {
      badge: "OUR TECH STACK",
      title: "Technologies We Use",
      technologies: [
        { name: "Angular", image: "assets/tech/angular.png" },
        { name: "CSS3", image: "assets/tech/css.png" },
        { name: "Firebase", image: "assets/tech/firebase.png" },
        { name: "HTML5", image: "assets/tech/html5.png" },
        { name: "Ionic", image: "assets/tech/ionic.png" },
        { name: "TypeScript", image: "assets/tech/typescript.png" }
      ]
    }
  },
  portfolio: {
    hero: {
      badge: "OUR SUCCESS STORIES",
      title: "Digital Works That Inspire"
    },
    filters: [
      { id: "all", label: "All Projects" },
      { id: "web", label: "Web Development" },
      { id: "app", label: "App Development" }
    ],
    projects: [
      {
        id: 1,
        title: 'Aurora SaaS Dashboard',
        category: 'web',
        image: 'assets/portfolio/web-1.png',
        description: 'A comprehensive analytics dashboard for SaaS platforms focusing on real-time data visualization.',
        tags: ['Angular', 'Typescript', 'D3.js']
      },
      {
        id: 2,
        title: 'Aethel Luxury E-commerce',
        category: 'web',
        image: 'assets/portfolio/web-2.png',
        description: 'A minimalist, high-end fashion e-commerce platform with seamless shopping experience.',
        tags: ['Angular', 'Firebase', 'Stripe']
      },
      {
        id: 3,
        title: 'Aura Fitness App',
        category: 'app',
        image: 'assets/portfolio/app-1.png',
        description: 'A premium mobile application for workout tracking and fitness goal management.',
        tags: ['Ionic', 'Capacitor', 'Firebase']
      },
      {
        id: 4,
        title: 'Nexus Fintech App',
        category: 'app',
        image: 'assets/portfolio/app-2.png',
        description: 'A sophisticated digital banking and financial management application with secure transactions.',
        tags: ['Ionic', 'Angular', 'Node.js']
      },
      {
        id: 5,
        title: 'Voter Registration App',
        category: 'app',
        image: 'assets/portfolio/votingapp.jpeg',
        description: 'A secure and transparent voter registration and management system built for reliability and ease of use.',
        tags: ['Ionic', 'Angular', 'Firebase'],
        hasFrame: true
      },
      {
        id: 6,
        title: 'Boutique Management System',
        category: 'web',
        image: 'assets/portfolio/boutique.jpeg',
        description: 'A stylish and modern boutique management and shopping platform for high-end retail businesses.',
        tags: ['Angular', 'SCSS', 'Typescript'],
        hasFrame: true
      }
    ],
    cta: {
      title: "Have a Project in Mind?",
      desc: "Let's collaborate to build something extraordinary together.",
      button: "Let's Talk Business"
    }
  },
  contact: {
    hero: {
      title: "Contact"
    },
    info: {
      badge: "SAY HELLO",
      title: "Get in touch with us",
      phone: "+234 803 735 9707",
      email: "faith.achigbulem@gmail.com",
      address: "125, Isheri Oshun Road, Alimosho. Lagos, Nigeria."
    },
    form: {
      title: "Contact us"
    }
  }
};

async function seedData() {
  console.log("Starting seed process...");
  try {
    for (const [page, data] of Object.entries(siteContent)) {
      console.log(`Writing ${page} to Firestore...`);
      await setDoc(doc(db, "siteContent", page), data);
      console.log(`${page} successfully written!`);
    }
    console.log("All data seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding data:", error);
    process.exit(1);
  }
}

seedData();
