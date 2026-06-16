function BrandTicker() {
  const brands = [
    "Apple",
    "Samsung",
    "Google",
    "OnePlus",
    "Xiaomi",
    "Redmi",
    "POCO",
    "Oppo",
    "Vivo",
    "Realme",
    "Huawei",
    "Honor",
    "Sony",
    "Motorola",
    "Nokia",
    "Asus",
    "Nothing",
    "Tecno",
    "Infinix",
    "Itel",
    "Lenovo",
    "ZTE",
  ];

  return (
    <div className="border-y border-border py-8 bg-card/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center gap-8 opacity-40">
        {brands.map((brand) => (
          <span
            key={brand}
            className="font-bold tracking-widest uppercase text-xs md:text-sm"
          >
            {brand}
          </span>
        ))}
      </div>
    </div>
  );
}

export default BrandTicker;