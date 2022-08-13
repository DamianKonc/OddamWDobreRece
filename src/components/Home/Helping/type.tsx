export interface ItemsType {
  name: string;
  need: string;
  mission: string;
  ID: number;
}

export interface ChangeOrganizationsType
  extends React.MouseEvent<HTMLButtonElement> {
  currentTarget: HTMLButtonElement;
}
