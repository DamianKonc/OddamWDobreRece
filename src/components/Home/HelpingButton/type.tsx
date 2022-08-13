export interface Props {
  text: string;
  changeOrganizations: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

// '(event: MouseEvent<HTMLButtonElement, MouseEvent>): void'.
