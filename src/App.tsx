import { ComboBuilder } from "./features/builder/ComboBuilder";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
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

      <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-6">
        <ComboBuilder />
      </main>
    </div>
  );
}
