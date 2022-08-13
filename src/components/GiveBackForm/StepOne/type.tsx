export type Props = {
  increase: Function;
};

export interface ChooseItem extends React.FormEvent<EventTarget> {
  currentTarget: EventTarget;
}
