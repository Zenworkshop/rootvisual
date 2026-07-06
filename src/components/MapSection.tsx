export default function MapSection() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-black text-center mb-4">
          Lokasi Root Visual Studio
        </h2>

        <p className="text-center text-gray-600 mb-10">
          Kunjungi studio kami atau klik petunjuk arah melalui Google Maps.
        </p>

        <div className="overflow-hidden rounded-3xl shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.445010235684!2d106.71860517520666!3d-6.336357361997281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e5727aa2d9b9%3A0xe3c160517981af48!2sRoot%20Space%20Studio%20%7C%20Photo%20Video%20Prewedding%20Studio%20%26%20Foto%20Outdoor%20%7C%20Lamaran%20%7C%20Pemberkatan%20%7C%20Wedding%20%7C%20Maternity!5e0!3m2!1sid!2sid!4v1783305382114!5m2!1sid!2sid"
            width="100%"
            height="500"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            title="Lokasi Root Visual Studio"
          />
        </div>
      </div>
    </section>
  );
}