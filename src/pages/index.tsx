export default function Home() {
  return (
    <div className="relative h-screen font-bold">

      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-[url('/images/awesomebackgroundcarsandhouses.jpg')] z-10" />

      {/* Background */}
      <div className="absolute inset-0 bg-white z-20 opacity-60" />
      

      {/* Header Section */}
      <div className="relative z-30 flex items-center justify-center h-full">
        <div className="flex flex-col items-start w-[90vw] max-w-[900px] h-[50vh] max-h-[500px] p-4">
          <h1 className="text-blue-950 text-3xl sm:text-5xl font-sans mb-2">
            Amaia Scapes Laguna
          </h1>
          <h2 className="text-green-900 text-2xl sm:text-4xl font-sans">
            P R O P E R T Y  L I S T
          </h2>


          
        </div>
      </div>
    </div>
  );
}
