import {
  DndContext,
  useDraggable,
  useDroppable,
  type DragEndEvent,
} from "@dnd-kit/core";
import { useBuilderStore } from "../../store/useBuilderStore";
import { MoveCard } from "./MoveCard";
import type { Move } from "../../types";

function DraggablePaletteItem({ move }: { move: Move }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: move.id,
    data: move,
  });

  const style = transform
    ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` }
    : undefined;

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <MoveCard move={move} isDraggable />
    </div>
  );
}

function DroppableCanvas() {
  const { isOver, setNodeRef } = useDroppable({
    id: "combo-canvas",
  });

  const { currentCombo } = useBuilderStore();

  return (
    <div
      ref={setNodeRef}
      className={`flex-1 rounded-lg border-2 border-dashed p-4 overflow-y-auto transition-colors ${isOver ? "border-blue-500 bg-blue-50" : "border-slate-300 bg-slate-50"}`}
    >
      {currentCombo.nodes.length === 0 ? (
        <div className="flex h-full items-center justify-center text-slate-400 text-sm">
          Drag moves here to build your combo...
        </div>
      ) : (
        currentCombo.nodes.map((node) => (
          <MoveCard key={node.instanceId} move={node} />
        ))
      )}
    </div>
  );
}

// --- Main Export ---
export function ComboBuilder() {
  const { moveLibrary, addMoveToCombo } = useBuilderStore();

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && over.id === "combo-canvas") {
      const draggedMove = active.data.current as Move | undefined;

      if (draggedMove) {
        addMoveToCombo(draggedMove);
      }
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-full">
        <section className="md:col-span-4 lg:col-span-3 bg-white rounded-xl shadow-sm border border-slate-200 p-4 flex flex-col h-[calc(100vh-8rem)]">
          <h2 className="font-semibold text-slate-800 mb-4 uppercase tracking-wider text-sm">
            Move Library
          </h2>
          <div className="flex-1 overflow-y-auto pr-2">
            {moveLibrary.map((move) => (
              <DraggablePaletteItem key={move.id} move={move} />
            ))}
          </div>
        </section>

        <section className="md:col-span-8 lg:col-span-9 bg-white rounded-xl shadow-sm border border-slate-200 p-4 flex flex-col h-[calc(100vh-8rem)]">
          <h2 className="font-semibold text-slate-800 mb-4 uppercase tracking-wider text-sm">
            Active Combo
          </h2>
          <DroppableCanvas />
        </section>
      </div>
    </DndContext>
  );
}
