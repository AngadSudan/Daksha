import React, { useState } from 'react';

function TodoItem({ Index, Status, Todo }) {
  const [status, setStatus] = useState(!Status);
  const [edit, setEdit] = useState(false);
  const [todo, setTodo] = useState(Todo);
  const [isVisible, setIsVisible] = useState(false);

  // Handle status toggle
  const updateStatus = () => {
    setStatus(!status);
  };

  // Handle todo text update
  const UpdateTodo = (e) => {
    setTodo(e.target.value);
  };

  // Handle edit mode toggle
  const update = () => {
    setEdit(!edit);
  };

  // Handle animation on mount
  React.useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div 
      className={`
        transform transition-all duration-500 ease-out
        ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}
        w-[95%] lg:w-fit
        text-wrap
        flex items-center gap-1 p-4 rounded-xl shadow-md
        ${status 
          ? 'bg-gradient-to-r from-green-200 to-green-300 text-green-800' 
          : 'bg-gradient-to-r from-red-200 to-red-300 text-red-800'
        }
        hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200
        border-2 border-opacity-20 ${status ? 'border-green-400' : 'border-red-400'}
        min-h-[4rem] sm:min-h-[5rem]
      `}
    >
      {/* Checkbox */}
      <div className="flex-shrink-0">
        <input
          type="checkbox"
          checked={status}
          onChange={updateStatus}
          className={`
            w-6 h-6 sm:w-8 sm:h-8 cursor-pointer
            rounded-lg transition-all duration-200
            border-2 ${status ? 'border-green-500' : 'border-red-500'}
            checked:bg-green-500 focus:ring-2 focus:ring-offset-2
            ${status ? 'focus:ring-green-500' : 'focus:ring-red-500'}
          `}
        />
      </div>

      {/* Todo Text Input */}
      <input
        type="text"
        value={todo}
        onChange={UpdateTodo}
        readOnly={!edit}
        className={`
          flex-shrink
          bg-transparent
          text-lg sm:text-lg md:text-2xl
          px-2 py-1
          text-wrap
          rounded
          transition-all duration-200
          outline-none
          ${status ? 'line-through font-semibold' : 'font-normal'}
          ${edit ? 'border-b-2 border-gray-400' : 'border-b-2 border-transparent'}
          placeholder-gray-500
          focus:border-b-2
          ${status ? 'focus:border-green-500' : 'focus:border-red-500'}
        `}
      />

      {/* Edit Button */}
      <button
        onClick={update}
        className={`
          flex-shrink-0
          hidden
          w-10 h-10
          rounded-full
          md:flex items-center justify-center
          transition-all duration-200
          ${status 
            ? 'hover:bg-green-400 active:bg-green-500' 
            : 'hover:bg-red-400 active:bg-red-500'
          }
          text-2xl sm:text-3xl
          focus:outline-none
          focus:ring-2
          focus:ring-offset-2
          ${status ? 'focus:ring-green-500' : 'focus:ring-red-500'}
        `}
        aria-label={edit ? "Save" : "Edit"}
      >
        {!edit ? (
          <span role="img" aria-label="Edit">✎</span>
        ) : (
          <span role="img" aria-label="Save">✓</span>
        )}
      </button>
    </div>
  );
}

export default TodoItem;