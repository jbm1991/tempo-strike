// 1. Core Primitives
export type MoveType = "strike" | "defense" | "movement";
export type MoveTarget = "head" | "body" | "leg";

export interface Move {
  id: string; // e.g. 'm_jab'
  name: string; // e.g. 'Jab'
  shorthand: string; // e.g. '1'
  type: MoveType;
  target?: MoveTarget; // Optional, useful for Muay Thai vs Boxing
}

// 2. The Builder Nodes
export interface ComboNode extends Move {
  instanceId: string; // A UUID generated when it's dropped into a combo
}

export interface SequenceNode {
  instanceId: string; // A UUID generated when it's dropped into a sequence
  comboId: string; // Reference to the original Combo
}

// 3. Aggregate entities
export interface Combo {
  id: string; // e.g. 'c_1'
  name: string; // e.g. '1-2-Slip-2'
  nodes: ComboNode[]; // The ordered array of moves
}

export interface Sequence {
  id: string;
  name: string;
  nodes: SequenceNode[];
}

// 4. Timer & Execution Configurations
export interface RoundConfig {
  totalRounds: number;
  workDurationSeconds: number; // e.g. 180 (3 mins)
  restDurationSeconds: number; // e.g. 60 (1 min)
  prepDurationSeconds: number; // e.g. 10 (get ready)
}

export interface PlaybackConfig {
  speed: "beginner" | "intermediate" | "advanced";
  displayMode: "numeric" | "text";
}
