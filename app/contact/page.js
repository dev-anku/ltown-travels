import ContactSection from "@/components/ContactSection";

export default function Page() {
  return (
    <>
      <section className="relative mt-4 h-96 bg-gradient-to-r from-primary/90 to-secondary/90 flex items-center justify-center">
        <div
          className={`absolute inset-0 bg-cover bg-center`}
          style={{ backgroundImage: `url(/packages/hawa-mahal.png)` }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative text-center text-white z-10">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4">
            Contact Us
          </h1>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
