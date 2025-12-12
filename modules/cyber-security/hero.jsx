import Image from "next/image";
import { GradientButton } from "../component/gradient-button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative mx-auto py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div className="space-y-8">
          {/* Label */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-px bg-blue-500" />
            <span className="text-sm font-medium tracking-wide text-blue-600">
              Cybouncer
            </span>
          </div>

          {/* Headline */}
          <div>
            <h1 className="text-4xl lg:text-7xl font-bold text-blue-500 leading-tight tracking-tight">
              Protect Your Digital Future
            </h1>
          </div>

          {/* Description */}
          <p className="text-lg leading-relaxed max-w-lg">
            Fortify your infrastructure with enterprise-grade cybersecurity
            solutions. Our expert security specialists deliver advanced threat
            detection, penetration testing, and vulnerability management to
            safeguard your critical assets. From real-time monitoring to
            incident response, we ensure complete protection across your digital
            landscape. Let us be your partner in building an impenetrable
            defense. Contact us today and secure your tomorrow.
          </p>

          {/* CTA Button */}
          <Link href="/services/cyber-security/contact">
            <GradientButton>Contact Us</GradientButton>
          </Link>
        </div>

        {/* Right visual section */}
        <div className="grid grid-cols-2 gap-6">
          {/* Large card - Security Dashboard */}
          <div className="col-span-2 lg:col-span-1 row-span-2 rounded-3xl overflow-hidden bg-gradient-to-br from-blue-500/20 to-cyan-500/10 border border-blue-500/30 backdrop-blur-sm hover:border-blue-400/50 transition-all">
            <Image
              src="/images/cyber-security.png"
              alt="Security monitoring dashboard"
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Shield icon card */}
          <div className="rounded-3xl overflow-hidden backdrop-blur-sm flex  min-h-40">
            <Image
              src="/images/cyberillus.jpg"
              alt="Security monitoring dashboard"
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Lock icon card */}
          <div className="rounded-3xl overflow-hidden backdrop-blur-sm flex  min-h-40">
            <Image
              src="/images/cyberillus2.jpg"
              alt="Security monitoring dashboard"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
