export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <header className="bg-slate-900 text-white p-4 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-tight uppercase">
            Tempo Strike
          </h1>
          <div className="text-sm text-slate-400 font-mono">
            Sequence Builder v1.0
          </div>
        </div>
      </header>

      {/* Main Builder Workspace */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-6 grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left Column: The Move Library (Palette) */}
        <section className="md:col-span-4 lg:col-span-3 bg-white rounded-xl shadow-sm border border-slate-200 p-4 flex flex-col h-[calc(100vh-8rem)]">
          <h2 className="font-semibold text-slate-800 mb-4 uppercase tracking-wider text-sm">
            Move Library
          </h2>
          <div className="flex-1 overflow-y-auto">
            {/* Draggable standard moves will go here */}
            <div className="p-3 border-2 border-dashed border-slate-300 rounded-lg text-slate-400 text-center text-sm">
              Move Palette pending...
            </div>
          </div>
        </section>

        {/* Right Column: The Active Sequence (Canvas) */}
        <section className="md:col-span-8 lg:col-span-9 bg-white rounded-xl shadow-sm border border-slate-200 p-4 flex flex-col h-[calc(100vh-8rem)]">
          <h2 className="font-semibold text-slate-800 mb-4 uppercase tracking-wider text-sm">
            Active Sequence
          </h2>
          <div className="flex-1 bg-slate-50 rounded-lg border border-slate-100 p-4 overflow-y-auto">
            {/* Droppable combos will go here */}
            <div className="flex h-full items-center justify-center text-slate-400 text-sm">
              Canvas pending...
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
