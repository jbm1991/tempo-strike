import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import type { Move, Combo, Sequence, ComboNode, SequenceNode } from "../types";

interface BuilderState {
  // --- State ---
  moveLibrary: Move[]; // The master list of available strikes/blocks
  currentSequence: Sequence; // The sequence currently being built

  // --- Actions ---
  addMoveToCombo: (comboId: string, move: Move) => void;
  removeMoveFromCombo: (comboId: string, nodeInstanceId: string) => void;
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
  currentSequence: {
    id: "seq_initial",
    name: "My First Sequence",
    nodes: [],
  },

  addMoveToCombo: (comboId, move) =>
    set((state) => {
      const newNode: ComboNode = {
        ...move,
        instanceId: uuidv4(),
      };

      console.log(
        `Added ${move.name} to combo ${comboId}. Instance ID: ${newNode.instanceId}`,
      );

      return state;
    }),

  removeMoveFromCombo: (comboId, nodeInstanceId) =>
    set((state) => {
      console.log(`Removing node ${nodeInstanceId} from ${comboId}`);
      return state;
    }),
}));
