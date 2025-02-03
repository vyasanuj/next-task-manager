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


