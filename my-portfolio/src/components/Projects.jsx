export default function Portfolio() {
  return (
    <section id="portfolio" className="px-8 py-16">
      <h3 className="text-2xl font-bold mb-6 text-center">Portfolio</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[1,2,3,4,5,6].map(i => (
          <img
            key={i}
            src={`https://picsum.photos/400/300?random=${i}`}
            alt="portfolio"
            className="rounded-lg hover:opacity-80 cursor-pointer"
          />
        ))}
      </div>
    </section>
  );
}

