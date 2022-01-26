import { Tag, WithContext as ReactTags } from 'react-tag-input';
import InputProps from '../interfaces/InputProps';


function Input(props: InputProps) {
  const {state, setState} = props;
  const handleDelete = (i: number) => {
    setState(state.filter((tag, index) => index !== i));
  };

  const handleAddition = (tag: Tag) => {
    setState([...state, tag]);
  };
  return (
    <div className="mt-5 ml-2">
      <div className='label'>
        {props.label}
      </div>
      <ReactTags 
        classNames={{
          tag: 'tag is-warning is-medium mb-2 mr-1',
          tagInputField: 'input',
          remove: 'delete is-small'
        }}
        tags={props.state}
        handleDelete={handleDelete}
        handleAddition={handleAddition}
        allowUnique={false}
      />
    </div>
  )
}

export default Input;