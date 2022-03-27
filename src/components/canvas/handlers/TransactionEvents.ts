
export type TransactionType =
  | 'add'
  | 'remove'
  | 'moved'
  | 'scaled'
  | 'rotated'
  | 'skewed'
  | 'group'
  | 'ungroup'
  | 'paste'
  | 'bringForward'
  | 'bringToFront'
  | 'sendBackwards'
  | 'sendToBack'
  | 'redo'
  | 'undo';
  
export interface TransactionEvent {
  json: string;
  type: TransactionType;
}
