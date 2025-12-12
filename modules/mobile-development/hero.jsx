export function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url(/images/automation.jpg)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/20 to-primary/10" />
      <div className="w-full py-16 flex flex-col lg:flex-row gap-16 lg:justify-evenly px-8 lg:px-24  relative z-10">
        <div className="w-full lg:w-[45%] flex flex-col gap-6">
          <h1 className="lg:text-7xl text-4xl font-bold text-white tracking-tight mb-8">
            Custom Mobile App Development Services
          </h1>
          <h2 className="text-xl font-medium text-white">
            Transforming Your Ideas into Reality
          </h2>
        </div>
        <div className="w-full lg:w-[45%] flex flex-col gap-6">
          <div className="text-lg font-medium text-white">
            Elevate your business with Digitanotion expert mobile app
            development services. Specializing in innovative, tailored mobile
            applications, our dedicated team of app developers uses advanced
            programming languages and frameworks to create exceptional solutions
            for both iOS and Android.
          </div>
          <div className="text-lg font-medium text-white">
            Our comprehensive development process encompasses a detailed
            consultation, user-centric development approach, intuitive user
            experience, robust cross-platform development, and meticulous
            testing across various mobile devices. Whether you require a native
            app, a versatile hybrid mobile application, or a powerful
            cross-platform app, our team delivers scalable and reliable
            solutions tailored specifically to your business.
          </div>
          <div className="text-lg font-medium text-white">
            By leveraging cutting-edge development tools and an agile
            development environment, we ensure your app achieves superior
            performance, enhanced security, and optimal user engagement. From
            initial idea through launch on the App Store or Google Play, we
            guide your project through every stage of the development lifecycle,
            ensuring seamless integration and exceptional quality.
          </div>
        </div>
      </div>
    </section>
  );
}
