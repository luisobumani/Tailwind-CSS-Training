export default function Home() {
  return (
    <div className="relative min-h-screen font-bold">

      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-[url('/images/awesomebackgroundcarsandhouses.jpg')] z-10" />

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-white z-20 opacity-60" />

      {/* Header Section */}
      <div className="relative z-30 flex items-center justify-center h-[60vh]">
        <div className="flex flex-col w-[90vw] max-w-[900px] p-4">
          <h1 className="text-blue-950 text-3xl sm:text-5xl font-sans mb-2">
            Amaia Scapes Laguna
          </h1>
          <h2 className="text-green-800 text-2xl sm:text-4xl font-sans">
            P R O P E R T Y L I S T
          </h2>
        </div>
      </div>

      {/* Property List Section */}
      <div className="relative z-40 bg-blue-950 py-10">
        <div className="bg-white w-[90vw] max-w-[1200px] mx-auto rounded-3xl shadow-lg p-6">
          <table className="w-full text-left">
            <thead>
              <tr className="text-black font-sans">
                <th className="p-2">Property Type</th>
                <th className="p-2">Model</th>
                <th className="p-2">Location</th>
                <th className="p-2">Area</th>
                <th className="p-2">Price</th>
                <th className="p-2">Availability</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-blue-950 font-sans">
                <td className="p-2">Amaia Laguna</td>
                <td className="p-2">Amaia Units</td>
                <td className="p-2">Laguna</td>
                <td className="p-2">50sqm</td>
                <td className="p-2">2.2M</td>
                <td className="p-2 text-green-800">Ready for Occupancy</td>
              </tr>
            </tbody>
          </table>

          {/* Action Buttons */}
          <div className="flex justify-between mt-6">
            <button className="bg-green-800 text-white px-4 py-2">
              View Property Map
            </button>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg">
              View Property Full Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
