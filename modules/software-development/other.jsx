"use client";

import { useState } from "react";
import {
  FaServer,
  FaDatabase,
  FaCloud,
  FaShieldAlt,
  FaCode,
  FaChartLine,
  FaRobot,
  FaBrain,
  FaExchangeAlt,
} from "react-icons/fa";
import { SiPrometheus } from "react-icons/si";
import { GiArtificialIntelligence, GiNetworkBars } from "react-icons/gi";

export default function SoftwareLayerBlockchainAI() {
  const [activeTab, setActiveTab] = useState("blockchain-software");

  const services = {
    "blockchain-software": [
      {
        icon: FaServer,
        title: "Blockchain Node Infrastructure",
        description:
          "Enterprise-grade node deployment, management, and optimization for various blockchain networks.",
        features: [
          "Full Node Deployment",
          "Validator Setup",
          "Load Balancing",
          "High Availability Clusters",
        ],
        stack: ["AWS/Azure/GCP", "Docker", "Kubernetes", "Terraform"],
      },
      {
        icon: FaDatabase,
        title: "Blockchain Data Indexing & APIs",
        description:
          "Real-time blockchain data processing, indexing, and REST/GraphQL API development.",
        features: [
          "Blockchain Data Indexing",
          "Real-time Event Streaming",
          "Custom API Development",
          "Data Warehousing",
        ],
        stack: ["PostgreSQL", "MongoDB", "Elasticsearch", "GraphQL"],
      },
      {
        icon: GiNetworkBars,
        title: "Blockchain Middleware Solutions",
        description:
          "Middleware layers that abstract blockchain complexity and provide standardized interfaces.",
        features: [
          "Transaction Management",
          "Gas Optimization",
          "Web3 Abstraction",
          "Multi-chain Support",
        ],
        stack: ["Node.js", "Python", "Go", "TypeScript"],
      },
      {
        icon: FaExchangeAlt,
        title: "Blockchain Integration Platforms",
        description:
          "Integration platforms connecting blockchain networks with existing enterprise systems.",
        features: [
          "ERP Integration",
          "Payment Gateway Bridges",
          "Legacy System Connectivity",
          "Real-time Sync",
        ],
        stack: ["Apache Kafka", "RabbitMQ", "REST APIs", "WebSocket"],
      },
    ],
    "ai-applications": [
      {
        icon: FaRobot,
        title: "Enterprise RAG Systems",
        description:
          "Custom Retrieval-Augmented Generation systems integrated with enterprise knowledge bases.",
        features: [
          "Document Intelligence",
          "Semantic Search",
          "Knowledge Graph Integration",
          "Multi-source RAG",
        ],
        stack: ["LangChain", "LlamaIndex", "Pinecone", "OpenAI API"],
      },
      {
        icon: FaBrain,
        title: "AI-Powered Chat Applications",
        description:
          "Intelligent chat interfaces with contextual understanding and personalized responses.",
        features: [
          "Context Window Management",
          "Memory Systems",
          "Multi-modal Responses",
          "Real-time Processing",
        ],
        stack: ["React/Next.js", "FastAPI", "WebSocket", "Vector DBs"],
      },
      {
        icon: FaChartLine,
        title: "AI Analytics Platforms",
        description:
          "Data analytics platforms enhanced with machine learning for predictive insights.",
        features: [
          "Predictive Analytics",
          "Anomaly Detection",
          "Automated Reporting",
          "Real-time Dashboards",
        ],
        stack: ["Python", "TensorFlow", "Streamlit", "Plotly"],
      },
      {
        icon: FaShieldAlt,
        title: "AI Security & Monitoring",
        description:
          "Security layers for AI applications including content filtering and usage monitoring.",
        features: [
          "Content Moderation",
          "Usage Analytics",
          "Cost Optimization",
          "Performance Monitoring",
        ],
        stack: ["Prometheus", "Grafana", "Custom ML Models", "Alert Systems"],
      },
    ],
  };

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-br from-white to-primary/5">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(90deg, currentColor 1px, transparent 1px),
                            linear-gradient(180deg, currentColor 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
            color: "var(--color-primary, #3b82f6)",
          }}
        ></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Network Visualization */}
        <div className="absolute top-20 left-10 w-48 h-48 border border-primary/20 rounded-full animate-pulse"></div>
        <div
          className="absolute top-40 right-20 w-32 h-32 border border-primary/20 rounded-full animate-pulse"
          style={{ animationDelay: "0.3s" }}
        ></div>
        <div
          className="absolute bottom-40 left-1/4 w-40 h-40 border border-primary/20 rounded-full animate-pulse"
          style={{ animationDelay: "0.6s" }}
        ></div>

        {/* Neural Network Visualization */}
        <div className="absolute top-60 right-40 opacity-10">
          <svg width="200" height="200" viewBox="0 0 200 200">
            {[...Array(8)].map((_, i) => (
              <circle
                key={i}
                cx={100 + 70 * Math.cos((i * Math.PI) / 4)}
                cy={100 + 70 * Math.sin((i * Math.PI) / 4)}
                r="10"
                fill="currentColor"
                className="text-primary"
              />
            ))}
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary"></div>
            <span className="text-primary font-mono text-sm tracking-widest">
              SOFTWARE ENGINEERING EXCELLENCE
            </span>
            <div className="w-12 h-px bg-gradient-to-r from-primary to-transparent"></div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-primary/80 to-primary">
              Enterprise Software Solutions
            </span>
          </h1>

          <p className="text-xl text-primary/70 max-w-3xl mx-auto mb-12">
            Building robust software infrastructure for blockchain networks and
            intelligent AI applications
          </p>

          {/* Technology Tabs */}
          <div className="inline-flex bg-white rounded-xl p-2 shadow-lg border border-primary/10 mb-16">
            <button
              onClick={() => setActiveTab("blockchain-software")}
              className={`px-2 lg:px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-3 ${
                activeTab === "blockchain-software"
                  ? "bg-primary/20 text-black shadow-md border border-primary/20"
                  : "text-primary/80 hover:text-black hover:bg-primary/10"
              }`}
            >
              <FaServer className="hidden lg:block lg:text-xl" />
              Blockchain Infrastructure
            </button>

            <div className="w-px h-8 bg-primary/20 mx-2 self-center"></div>

            <button
              onClick={() => setActiveTab("ai-applications")}
              className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-3 ${
                activeTab === "ai-applications"
                  ? "bg-primary/20 text-black shadow-md border border-primary/20"
                  : "text-primary/80 hover:text-black hover:bg-primary/10"
              }`}
            >
              <GiArtificialIntelligence className="hidden lg:block lg:text-xl" />
              AI Applications
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {services[activeTab].map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl border border-primary/10 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
            >
              {/* Accent Bar */}
              <div className="h-1 w-full bg-gradient-to-r from-primary/60 to-primary"></div>

              <div className="p-8">
                {/* Icon and Title */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <service.icon className="text-2xl" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-black mb-2">
                      {service.title}
                    </h3>
                    <p className="text-primary/70">{service.description}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-primary/50 uppercase tracking-wider mb-3">
                    Key Features
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary/90 border border-primary/20"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-sm font-semibold text-primary/50 uppercase tracking-wider mb-3">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.stack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-primary/5 text-primary/80 rounded-lg text-sm font-mono border border-primary/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button className="mt-8 w-full py-3 rounded-lg font-semibold transition-all duration-300 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 hover:border-primary/30 flex items-center justify-center gap-2 group/btn">
                  Explore Architecture
                  <span className="transition-transform group-hover/btn:translate-x-1 text-primary">
                    →
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Infrastructure Highlights */}
        <div className="bg-primary/10 rounded-3xl p-8 md:p-12 border border-primary/20">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-blue-500 mb-4">
              Complete Development Lifecycle
            </h3>
            <p className="text-primary/70 max-w-2xl mx-auto">
              From architecture design to deployment and monitoring, we handle
              the entire software development lifecycle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FaCloud,
                title: "Cloud Infrastructure",
                description:
                  "Multi-cloud deployment strategies with automated scaling",
              },
              {
                icon: FaShieldAlt,
                title: "Security & Compliance",
                description:
                  "Enterprise-grade security protocols and compliance frameworks",
              },
              {
                icon: SiPrometheus,
                title: "Monitoring & Observability",
                description:
                  "Comprehensive monitoring, logging, and alerting systems",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-primary/10 hover:border-primary/20 transition-colors"
              >
                <div className="inline-flex p-3 rounded-lg mb-4 bg-primary/10 text-primary">
                  <item.icon className="text-2xl" />
                </div>
                <h4 className="text-xl font-bold text-black mb-2">
                  {item.title}
                </h4>
                <p className="text-primary/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-20 h-px bg-gradient-to-r from-transparent to-primary/30"></div>
            <span className="text-primary/50 font-mono text-sm">
              READY TO BUILD?
            </span>
            <div className="w-20 h-px bg-gradient-to-r from-primary/30 to-transparent"></div>
          </div>

          <h3 className="text-4xl font-bold text-blue-600 mb-8">
            Let's Architect Your Next-Gen Solution
          </h3>

          <button className="group px-12 py-4 bg-primary/20 hover:bg-primary/30 text-black font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl border border-primary/20 hover:border-primary/30 flex items-center gap-3 mx-auto">
            <FaCode className="text-xl" />
            Schedule Technical Consultation
            <span className="transition-transform group-hover:translate-x-2">
              ↗
            </span>
          </button>

          <p className="text-primary/50 text-sm mt-4">
            Connect with our software architects for a detailed technical
            discussion
          </p>
        </div>
      </div>
    </section>
  );
}
