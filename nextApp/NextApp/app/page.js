export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-white p-8 text-gray-800">
      <h1 className="text-5xl font-extrabold mb-6 text-center text-indigo-900">
        🏛️ Sabedoria Grega
      </h1>
      <p className="text-xl text-center max-w-2xl mb-10 text-gray-600">
        Um breve tributo aos pilares do pensamento ocidental: Sócrates, Platão e Aristóteles.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="text-center">

          <h2 className="mt-4 text-xl font-bold">Sócrates</h2>
          <p className="text-sm mt-2 text-gray-500">
            “Conhece-te a ti mesmo.” — precursor da ética e do diálogo como método filosófico.
          </p>
        </div>

        <div className="text-center">
   
          <h2 className="mt-4 text-xl font-bold">Platão</h2>
          <p className="text-sm mt-2 text-gray-500">
            Fundador da Academia, desenvolveu a teoria das ideias e influenciou toda a metafísica ocidental.
          </p>
        </div>

        <div className="text-center">
      
          <h2 className="mt-4 text-xl font-bold">Aristóteles</h2>
          <p className="text-sm mt-2 text-gray-500">
            Discípulo de Platão, sistematizou a lógica, ética, política e ciência com rigor e observação.
          </p>
        </div>
      </div>

      <footer className="mt-16 text-sm text-gray-400 text-center">
        Inspirado pela razão, movido pela curiosidade.
      </footer>
    </main>
  );
}
