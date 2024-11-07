
import { useState } from "react";

export default function App() {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [maintask, setmaintask] = useState([]);

  const handleSubmitter = (e) => {
    e.preventDefault();
    setdesc("");
    settitle("");
    setmaintask([...maintask, { title, desc }]);
    console.log(maintask);
  };

  const deletehandler=(index)=>{
    let copytask = [...maintask]
    copytask.splice(index,1)
    setmaintask(copytask)
  }

  let task = <h2 className="text-gray-600 text-center">No items are available</h2>;

  if (maintask.length > 0) {
    task = maintask.map((item, index) => {
      return (
        <div
          key={index}
          className="flex justify-between bg-white text-gray-800 p-3 rounded-lg shadow-md mb-3"
        >
          <h5 className="font-semibold text-lg">{item.title}</h5>
          <h5 className="text-gray-600">{item.desc}</h5>
          <button onClick={()=>{deletehandler(index)}}
           className="bg-red-400 text-white font-bold rounded-md px-5 py-2 shadow-md hover:bg-red-500 transition">
        Delete</button>
        </div>
      );
    });
  }

  return (
    <>
      <div className="flex items-center flex-col min-h-screen bg-gray-100 py-10">
        <h1 className="text-gray-800 bg-gray-300 p-4 rounded-lg shadow-lg text-3xl font-bold mb-5">
          Todo List
        </h1>

        <form
          onSubmit={handleSubmitter}
          className="flex flex-col sm:flex-row gap-5 mb-6"
        >
          <input
            className="w-full sm:w-64 h-12 border border-gray-300 p-2 rounded-md shadow-sm"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => settitle(e.target.value)}
          />
          <input
            className="w-full sm:w-64 h-12 border border-gray-300 p-2 rounded-md shadow-sm"
            type="text"
            placeholder="Description"
            value={desc}
            onChange={(e) => setdesc(e.target.value)}
          />
          <button className="bg-blue-600 text-white font-bold rounded-md px-5 py-2 shadow-md hover:bg-blue-700 transition">
            Add Task
          </button>
        </form>

        <hr className="w-full max-w-3xl border-gray-300 mb-5" />

        <div className="w-full max-w-3xl">
          <ul className="space-y-4">
            {task}
          </ul>
        </div>
      </div>
    </>
  );
}

