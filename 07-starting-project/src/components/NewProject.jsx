import { useRef } from "react";

import Modal from "./Modal";
import Button from "./Button";
import Input from "./Input";

export default function NewProject({ onAdd, onCancel }) {
  const modal = useRef();

  const titleRef = useRef();
  const descRef = useRef();
  const duedateRef = useRef();

  function saveHandler() {
    const enteredTitle = titleRef.current.value;
    const enteredDesc = descRef.current.value;
    const enteredDueDate = duedateRef.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDesc.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDesc,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Ok">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input field!
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={onCancel}
              className="text-stone-800 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <Button onClick={saveHandler}>Save</Button>
          </li>
        </menu>
        <div>
          <Input ref={titleRef} field="Title" type="text" />
          <Input ref={descRef} field="Description" textarea={true} />
          <Input ref={duedateRef} field="Due Date" type="date" />
        </div>
      </div>
    </>
  );
}
