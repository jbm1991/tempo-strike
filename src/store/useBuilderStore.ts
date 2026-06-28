import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import type { Move, Combo, ComboNode } from "../types";

interface BuilderState {
  moveLibrary: Move[];
  currentCombo: Combo;

  addMoveToCombo: (move: Move) => void;
  removeMoveFromCombo: (nodeInstanceId: string) => void;
}

// Dummy data
const INITIAL_MOVES: Move[] = [
  { id: "m_1", name: "Jab", shorthand: "1", type: "strike", target: "head" },
  { id: "m_2", name: "Cross", shorthand: "2", type: "strike", target: "head" },
  {
    id: "m_3",
    name: "Lead Hook",
    shorthand: "3",
    type: "strike",
    target: "head",
  },
  {
    id: "m_lk",
    name: "Low Kick",
    shorthand: "LK",
    type: "strike",
    target: "leg",
  },
];

export const useBuilderStore = create<BuilderState>((set) => ({
  moveLibrary: INITIAL_MOVES,
  currentCombo: {
    id: "combo_builder_1",
    name: "New Combo",
    nodes: [],
  },

  addMoveToCombo: (move) =>
    set((state) => {
      const newNode: ComboNode = {
        ...move,
        instanceId: uuidv4(),
      };

      return {
        ...state,
        currentCombo: {
          ...state.currentCombo,
          nodes: [...state.currentCombo.nodes, newNode],
        },
      };
    }),

  removeMoveFromCombo: (nodeInstanceId) =>
    set((state) => ({
      ...state,
      currentCombo: {
        ...state.currentCombo,
        nodes: state.currentCombo.nodes.filter(
          (n) => n.instanceId !== nodeInstanceId,
        ),
      },
    })),
}));
