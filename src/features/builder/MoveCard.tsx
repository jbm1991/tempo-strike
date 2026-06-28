import { GripVertical } from "lucide-react";
import type { Move } from "../../types";

interface MoveCardProps {
  move: Move;
  isDraggable?: boolean;
}

export function MoveCard({ move, isDraggable = false }: MoveCardProps) {
  const baseColor =
    move.target === "leg"
      ? "bg-orange-100 border-orange-200"
      : "bg-slate-100 border-slate-200";

  return (
    <div
      className={`flex items-center gap-3 p-3 mb-2 rounded-lg border shadow-sm bg-white ${isDraggable ? "cursor-grab active:cursor-grabbing hover:border-slate-400 transition-colors" : ""}`}
    >
      {isDraggable && <GripVertical className="w-5 h-5 text-slate-400" />}
      <div
        className={`flex items-center justify-center w-10 h-10 rounded-md border font-bold text-lg text-slate-700 ${baseColor}`}
      >
        {move.shorthand}
      </div>
      <div className="flex-1 font-medium text-slate-800">{move.name}</div>
    </div>
  );
}
