import React from "react";

export type Props = {
  increase: Function;
  decrease: Function;
};
export interface FormControlEvent extends React.FormEvent<HTMLInputElement> {
  currentTarget: HTMLInputElement;
}

export interface TextAreaControlEvent
  extends React.FormEvent<HTMLTextAreaElement> {
  currentTarget: HTMLTextAreaElement;
}
