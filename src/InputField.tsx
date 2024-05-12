interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleAdd(e);
      }}
    >
      <input
        type="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a task....."
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default InputField;
