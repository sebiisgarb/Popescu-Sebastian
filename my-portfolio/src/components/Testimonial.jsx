export default function Testimonial() {
  return (
    <section className="px-8 py-16 max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold mb-6 text-center">Testimonial</h3>
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src="https://via.placeholder.com/150"
          alt="testimonial"
          className="rounded-full"
        />
        <p className="text-gray-400">
          “The design quality, flexibility, documentation and support are
          outstanding. Highly recommended!”
          <br />
          <span className="text-yellow-400">— Josef Sharon, CEO Omweb</span>
        </p>
      </div>
    </section>
  );
}

