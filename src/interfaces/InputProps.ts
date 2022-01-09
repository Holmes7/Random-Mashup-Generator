import React from "react";
import { Tag } from 'react-tag-input'

interface InputProps {
  state: Tag[],
  setState: React.Dispatch<React.SetStateAction<Tag[]>>,
  label: string
}

export default InputProps