'use client';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ToastContainer, toast } from "react-toastify"; // Import toast and ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import the Toastify CSS

const validationSchema = z.object({
  name: z.string().nonempty("Task name is required"),
});

type FormData = z.infer<typeof validationSchema>;

function CreateItem() {
  const { handleSubmit, register, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(validationSchema),
  });

  /* Handle OnSubmit */
  const onSubmit: (data: FormData) => Promise<void> = async (data: FormData) => {
    try {
      const res = await fetch("http://localhost:8000/api/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        const newItem = await res.json();
        console.log(newItem);
        
        // Show a success toast message using react-toastify
        toast.success("Task successfully added!");
        
        // Clear the input field
        reset();
      } else {
        throw new Error("Failed to add task");
      }
    } catch (error) {
      console.error(error);
      
      // Show an error toast message using react-toastify
      toast.error("Error adding task, please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center text-center p-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg shadow-lg w-full sm:w-96 mx-auto space-y-6">
      
      {/* ToastContainer to display the toast messages */}
      <ToastContainer
        position="top-right"
        autoClose={5000}  // 5 seconds auto close
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      
      <label htmlFor="name" className="text-xl font-semibold text-white">Task Name</label>
      <input 
        type="text" 
        id="name" 
        {...register("name")} 
        className="w-full h-12 px-4 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 ease-in-out"
      />
      {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}

      <button 
        type="button"
        onClick={handleSubmit(onSubmit)} // Make sure onSubmit is triggered
        className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Create Task
      </button>
    </div>
  );
}

export default CreateItem;
