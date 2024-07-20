const Veranstaltungen = () => {
  return (
    <section className="bg-gray-100 py-12 md:py-24 lg:py-32">
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Kommende Veranstaltungen
            </h2>
          </div>
        </div>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          <div className="grid gap-1 rounded-lg bg-white p-6 shadow-md">
            <h3 className="text-lg font-bold">165. Stiftungsfest</h3>
            <p className="text-sm text-gray-500">
              Treff uns auf dem Wasen bei einer Maß einem Hendl und einer mega
              Stimmung.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium text-[#003366]">
                1. Oktober 2024
              </div>
            </div>
          </div>
          <div className="grid gap-1 rounded-lg bg-white p-6 shadow-md">
            <h3 className="text-lg font-bold">Hüttenwocheende</h3>
            <p className="text-sm text-gray-500">
              Verbringe ein Wochenende in den Bergen und genieße die Natur.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium text-[#003366]">
                4.-6. Oktober 2024
              </div>
            </div>
          </div>
          <div className="grid gap-1 rounded-lg bg-white p-6 shadow-md">
            <h3 className="text-lg font-bold">Vortragsabend</h3>
            <p className="text-sm text-gray-500">
              Höre ein spannden Vortrag über Quanten Computing für
              Leichtbaudesigns von iaCB Huibers.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium text-[#003366]">
                11. November
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Veranstaltungen;
