import Input from "./Input";
import { useRef } from "react";

export default function NewProject({ onAdd }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <button
            onClick={handleSave}
            className="px-6 py-2 rounded-md bg-indigo-700 text-indigo-50 hover:bg-indigo-900"
          >
            Save
          </button>
        </li>
      </menu>
      {/* will eventually be a form */}
      <div>
        <Input type="text" ref={title} label="Title" />
        <Input ref={description} label="Description" textArea />
        <Input type="date" ref={dueDate} label="Due Date" />
      </div>
    </div>
  );
}
