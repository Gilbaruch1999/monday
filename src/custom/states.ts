export const  states = ['Not started', 'WIP', 'Wait', 'Done']
export const mapStates: Map<string, string[]> = new Map([
  ['Not started', ['Pending', 'Next Sprint']],
  ['WIP', ['Work In Progress', 'Needs PO Review']],
  ['Wait', ['Stuck']],
  ['Done', ['Done']],
]);
