import {
  FaMobileAlt,
  FaGlobe,
  FaDesktop,
  FaCloud,
  FaReact,
  FaNodeJs,
  FaAws,
  FaDatabase,
  FaShieldAlt,
  FaRobot,
} from "react-icons/fa";
import { SiFlutter, SiNextdotjs, SiPostgresql } from "react-icons/si";
import { TbApi } from "react-icons/tb";

export default function RightContent() {
  const services = [
    {
      icon: FaMobileAlt,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications using Flutter for seamless iOS and Android experiences. We build performant, feature-rich apps with beautiful UIs and native functionality.",
      tech: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase"],
      coreTech: <SiFlutter className="text-blue-400 text-2xl" />,
    },
    {
      icon: FaGlobe,
      title: "Web Application Development",
      description:
        "Modern web applications with React.js and Next.js for scalable, SEO-friendly solutions. From SPAs to enterprise portals, we create responsive, high-performance web experiences.",
      tech: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
      coreTech: <SiNextdotjs className="text-gray-800 text-2xl" />,
    },
    {
      icon: FaDesktop,
      title: "Desktop Applications",
      description:
        "Cross-platform desktop applications using Electron and native frameworks. We develop secure, reliable software for Windows, macOS, and Linux with native performance.",
      tech: ["Electron", ".NET", "Java", "Python", "C++"],
      coreTech: <FaDesktop className="text-purple-500 text-2xl" />,
    },
    {
      icon: FaCloud,
      title: "Cloud Solutions & Architecture",
      description:
        "Cloud-native applications and infrastructure on AWS, Azure, and Google Cloud. We design scalable, cost-effective cloud architectures with containerization and serverless computing.",
      tech: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Serverless"],
      coreTech: <FaAws className="text-orange-500 text-2xl" />,
    },
    {
      icon: FaDatabase,
      title: "Database Solutions",
      description:
        "Relational and NoSQL database design, optimization, and management. We implement data architectures that scale with your business using modern database technologies.",
      tech: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firestore"],
      coreTech: <SiPostgresql className="text-blue-600 text-2xl" />,
    },
    {
      icon: TbApi,
      title: "API & Backend Development",
      description:
        "RESTful and GraphQL APIs with Node.js, Python, and Java backends. We build robust, scalable APIs that power web, mobile, and desktop applications.",
      tech: ["Node.js", "Python/Django", "Java/Spring", "GraphQL", "FastAPI"],
      coreTech: <FaNodeJs className="text-green-500 text-2xl" />,
    },
    {
      icon: FaReact,
      title: "Frontend Development",
      description:
        "Modern frontend development with React, Vue, and Angular. We create intuitive, responsive user interfaces with state management and component libraries.",
      tech: ["React", "Vue.js", "Angular", "Redux", "Material-UI"],
      coreTech: <FaReact className="text-blue-400 text-2xl" />,
    },
    {
      icon: FaShieldAlt,
      title: "Security & Compliance",
      description:
        "Security-first development with authentication, encryption, and compliance features. We implement best practices for data protection and regulatory requirements.",
      tech: ["JWT", "OAuth2", "SSL/TLS", "GDPR", "HIPAA"],
      coreTech: <FaShieldAlt className="text-red-500 text-2xl" />,
    },
    {
      icon: FaRobot,
      title: "AI/ML Integration",
      description:
        "Intelligent applications with machine learning and artificial intelligence. We integrate AI capabilities for automation, personalization, and data insights.",
      tech: ["TensorFlow", "PyTorch", "OpenAI", "Computer Vision", "NLP"],
      coreTech: <FaRobot className="text-green-600 text-2xl" />,
    },
  ];

  return (
    <div className="w-full py-12 max-w-2xl mx-auto">
      <div className="space-y-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="rounded-xl p-6 bg-white border border-gray-200 hover:border-primary/50 over:shadow-lg transition-all duration-300"
          >
            <div className="flex items-start gap-6">
              <div className="relative">
                <div className="text-4xl flex-shrink-0 size-16 rounded-xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 flex items-center justify-center">
                  {service.coreTech}
                </div>
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                  <service.icon className="text-blue-500 text-lg" />
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.tech.map((technology, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-full border border-blue-100"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-200">
        <div className="text-center">
          <h4 className="text-2xl font-bold text-gray-900 mb-4">
            Our Technology Stack
          </h4>
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <div className="text-center">
              <FaReact className="text-4xl text-blue-400 mx-auto mb-2" />
              <span className="text-sm font-medium">React</span>
            </div>
            <div className="text-center">
              <SiFlutter className="text-4xl text-blue-500 mx-auto mb-2" />
              <span className="text-sm font-medium">Flutter</span>
            </div>
            <div className="text-center">
              <FaNodeJs className="text-4xl text-green-500 mx-auto mb-2" />
              <span className="text-sm font-medium">Node.js</span>
            </div>
            <div className="text-center">
              <SiNextdotjs className="text-4xl text-gray-800 mx-auto mb-2" />
              <span className="text-sm font-medium">Next.js</span>
            </div>
            <div className="text-center">
              <SiPostgresql className="text-4xl text-blue-600 mx-auto mb-2" />
              <span className="text-sm font-medium">PostgreSQL</span>
            </div>
            <div className="text-center">
              <FaAws className="text-4xl text-orange-500 mx-auto mb-2" />
              <span className="text-sm font-medium">AWS</span>
            </div>
          </div>
          <p className="text-gray-600">
            We leverage modern technologies to build scalable, maintainable, and
            high-performance software solutions.
          </p>
        </div>
      </div>
    </div>
  );
}
