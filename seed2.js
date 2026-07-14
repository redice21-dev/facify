const { initializeApp } = require("firebase/app");
const { getFirestore, doc, setDoc, updateDoc } = require("firebase/firestore");

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

const globalContent = {
  navbar: {
    brandName: "FACIFY",
    brandSub: "WEB & APP DEVELOPMENT",
    links: [
      { path: "/", label: "Home" },
      { path: "/about", label: "About" },
      { path: "/services", label: "Services" },
      { path: "/portfolio", label: "Portfolio" },
      { path: "/contact", label: "Contact" }
    ],
    button: "Free Consultation"
  },
  footer: {
    brandName: "FACIFY",
    brandSub: "CONSULTING",
    desc: "We are a team of expert people with creativity ideas. We create products that makes people's lives easier & better. Facify is dedicated to building high-end digital solutions for your business.",
    navTitle: "NAVIGATION",
    servicesTitle: "OUR SERVICES",
    servicesLinks: [
      { path: "/services", label: "Web Development" },
      { path: "/services", label: "App Development" },
      { path: "/services", label: "UI/UX Design" },
      { path: "/services", label: "Digital Marketing" }
    ],
    newsletterTitle: "NEWSLETTER",
    newsletterText: "Subscribe to our newsletter to get latest updates and news.",
    newsletterPlaceholder: "Your Email Address",
    newsletterSuccess: "Thanks for subscribing!",
    copyright: "copyright 2026 © FACIFY Consulting Firm all rights reserved",
    bottomLinks: [
      { path: "/about", label: "About" },
      { path: "/contact", label: "Contact Us" }
    ]
  },
  whatsapp: {
    title: "Connect on WhatsApp",
    desc: "You are about to be redirected to WhatsApp to chat directly with our expert team.",
    cancelBtn: "Cancel",
    continueBtn: "Continue to Chat"
  },
  contactForm: {
    nameLabel: "Your Name (required)",
    emailLabel: "Your Email (required)",
    msgLabel: "Your Message",
    submitBtn: "Send Message",
    submittingBtn: "Sending...",
    successMsg: "Your message has been sent successfully!",
    errorMsg: "Something went wrong. Please try again later.",
    missingFieldsMsg: "Please fill in all required fields."
  },
  portfolio: {
    viewCaseStudyBtn: "View Case Study"
  }
};

async function seedData() {
  console.log("Seeding global content...");
  try {
    await setDoc(doc(db, "siteContent", "global"), globalContent);
    console.log("Global content seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding data:", error);
    process.exit(1);
  }
}

seedData();
