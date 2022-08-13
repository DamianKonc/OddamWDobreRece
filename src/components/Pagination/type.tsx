export type PaginationData = {
  name: string;
  mission: string;
  need: string;
};

export type Props = {
  data: PaginationData[];
  howManyOnPage: number;
};

export interface BTNInterface extends React.MouseEvent<HTMLButtonElement> {
  currentTarget: HTMLButtonElement;
}
