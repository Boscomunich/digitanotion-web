const serviceImages = {
  "software-dev":
    "https://res.cloudinary.com/dnitzkowt/image/upload/v1761030948/rahul-mishra-XXMA-8fBB-g-unsplash_bqw0qc.jpg",
  "product-design": "/images/product-design.jpg",
  "cybouncer":
    "https://res.cloudinary.com/dnitzkowt/image/upload/v1761034195/clint-patterson-dYEuFB8KQJk-unsplash_w4fzrp.jpg",
};

export const WHATSAPP_BASE = "https://wa.me/2348080035596";

export const SERVICES = [
  {
    key: "software-dev",
    name: "Software Development",
    imageDesktop: serviceImages["software-dev"],
    imageMobile: serviceImages["software-dev"],
    headline: "Need a reliable software development team?",
    blurb:
      "In Digitanotion, we understand that there is no solution without a problem, our agile software development team is keened to applying industrial standards during the development cycle of a software product from systems analysis to deployment.",
    link: "/services/software-development",
  },
  {
    key: "product-design",
    name: "Digital Product Design and Management",
    imageDesktop: serviceImages["product-design"],
    imageMobile: serviceImages["product-design"],
    headline: "Do you want a scalable website for your business?",
    blurb:
      "Digital Product Design and Management helps businesses create scalable, engaging, and high-performing digital experiences. We craft websites and applications that are intuitive, responsive, efficient and secure, ensuring your brand stands out and grows sustainably in an evolving digital landscape.",
    link: "/services/product-design",
  },
  {
    key: "cybouncer",
    name: "CyBouncer",
    imageDesktop: serviceImages["cybouncer"],
    imageMobile: serviceImages["cybouncer"],
    headline: "Ethical Hacking (Pen Testing)",
    blurb:
      "CyBouncer delivers comprehensive cybersecurity support, from workforce awareness training and continuous SOC monitoring to expert vulnerability testing and rapid incident response. We integrate security through DevSecOps and provide secure product (website/app) management to keep your digital ecosystem protected end-to-end",
    link: "/services/cyber-security",
  },
];
