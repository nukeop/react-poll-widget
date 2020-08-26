export type BranchFunction = (condition: boolean, ComponentIfTrue: React.ReactNode, ComponentIfFalse: React.ReactNode) => React.ReactNode;

export const branch: BranchFunction = (condition, ComponentIfTrue, ComponentIfFalse) => condition
  ? ComponentIfTrue
  : ComponentIfFalse;