import React from "react";
import { Tag } from 'react-tag-input'

export interface InputProps {
  state: Tag[],
  setState: React.Dispatch<React.SetStateAction<Tag[]>>,
  label: string
}