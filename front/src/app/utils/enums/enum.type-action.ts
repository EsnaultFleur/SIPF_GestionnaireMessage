export enum TypeAction {
  Creation = 'C',
  Modification = 'M',
  Suppression = 'D',
}

export function getTypeActionLabel(alias: string): string {
  switch (alias) {
    case TypeAction.Creation:
      return 'Création';
    case TypeAction.Modification:
      return 'Modification';
    case TypeAction.Suppression:
      return 'Suppression';
    default:
      return alias;
  }
}
