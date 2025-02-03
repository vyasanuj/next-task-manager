

// export default function Home() {
//   return (

//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      

//     </div>
//   );
// }

// "use client";

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen bg-gray-50 p-8 pb-20 gap-16 sm:p-20 font-sans">
      
//       {/* Header Section */}
//       <header className="text-center mb-12">
//         <h1 className="text-4xl font-bold text-gray-800">
//           Task Management Application
//         </h1>
//         <p className="text-lg text-gray-600 mt-2">
//           Organize and manage your tasks with ease. Create, view, update, and delete tasks.
//         </p>
//       </header>
      
//       {/* Main Content Section */}
//       <main className="flex flex-col items-center justify-center w-full">
//         <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
//           <h2 className="text-2xl font-semibold text-gray-800 mb-6">
//             Tasks Overview
//           </h2>
          
//           {/* Task List Placeholder */}
//           <div className="space-y-4">
//             <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
//               <h3 className="text-xl font-medium text-gray-800">Sample Task 1</h3>
//               <p className="text-gray-600">This is a description of a task that is in progress.</p>
//               <div className="flex justify-between mt-4">
//                 <span className="text-sm text-gray-500">Due: 2025-02-25</span>
//                 <div className="space-x-2">
//                   <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition">Edit</button>
//                   <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500 transition">Delete</button>
//                 </div>
//               </div>
//             </div>
            
//             <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
//               <h3 className="text-xl font-medium text-gray-800">Sample Task 2</h3>
//               <p className="text-gray-600">This task is marked as complete and does not require any further action.</p>
//               <div className="flex justify-between mt-4">
//                 <span className="text-sm text-gray-500">Due: 2025-02-18</span>
//                 <div className="space-x-2">
//                   <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition">Edit</button>
//                   <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500 transition">Delete</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Create Task Section */}
//         <div className="mt-12 w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
//           <h2 className="text-2xl font-semibold text-gray-800 mb-6">Create a New Task</h2>
          
//           {/* Task Creation Form Placeholder */}
//           <form className="space-y-4 text-black">
//             <input 
//               type="text" 
//               className="w-full p-3 border border-gray-300 rounded-lg" 
//               placeholder="Task Title" 
//             />
//             <textarea 
//               className="w-full p-3 border border-gray-300 rounded-lg" 
//               placeholder="Task Description"
//             ></textarea>
//             <input 
//               type="date" 
//               className="w-full p-3 border border-gray-300 rounded-lg" 
//             />
//             <button type="submit" className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500 transition">
//               Create Task
//             </button>
//           </form>
//         </div>
//       </main>

//       {/* Footer Section */}
//       <footer className="text-center mt-12 text-gray-600">
//         <p>Built with ❤️ using Next.js and MongoDB</p>
//       </footer>
//     </div>
//   );
// }

"use client";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen bg-gray-50 p-8 pb-20 gap-16 sm:p-20 font-sans">
      
      {/* Welcome Section */}
      <header className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-gray-800">
          Welcome to Your Task Management App
        </h2>
        <p className="text-lg text-gray-600 mt-2">
          Stay organized and manage your day-to-day tasks effortlessly. This app lets you create, view, update, and delete tasks to help you stay on track with your goals.
        </p>
      </header>
      
      {/* Instruction Section */}
      <main className="flex flex-col items-center justify-center w-full max-w-4xl">
        <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Manage Your Tasks</h3>
          
          {/* Instruction Text */}
          <p className="text-gray-600 mb-6">
            You can view your tasks by clicking on the "Tasks" section, and to create a new task, simply navigate to "Create Task." 
          </p>
          <p className="text-gray-600">
            Manage your tasks efficiently and stay on top of your daily activities!
          </p>
        </div>
      </main>
      
      {/* Footer Section */}
      <footer className="mt-12 text-center text-gray-600">
        <p>Organize your day-to-day tasks and achieve your goals with ease.</p>
      </footer>
    </div>
  );
}


