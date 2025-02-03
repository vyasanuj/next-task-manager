// 'use client';
// import { useQuery } from '@tanstack/react-query'

// /* Fetch List of Items */
// function ItemList() {
//   const { data, error } = useQuery({
//     queryKey: ['items'],
//     queryFn: async () => {
//       const res = await fetch('http://localhost:8000/api/items')
//       return res.json()
//   }})

//   if (error) return <div>Error: {error.message}</div>
//   if (!data) return <div>Loading...</div>

//   return (
//     <ul>
//       {data.map((item: { _id: number; name: string }) => (
//         <li key={item._id}>{item.name}</li>
//       ))}
//     </ul>
//   )
// }

// export default ItemList

// 'use client';
// import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
// import { useState } from 'react';

// /* Fetch List of Items */
// function ItemList() {
//   const queryClient = useQueryClient();
//   const { data, error } = useQuery({
//     queryKey: ['items'],
//     queryFn: async () => {
//       const res = await fetch('http://localhost:8000/api/items');
//       return res.json();
//     }
//   });

//   /* State to track which item is being edited */
//   const [editingId, setEditingId] = useState<string | null>(null);
//   const [updatedName, setUpdatedName] = useState<string>('');

//   /* Mutation for updating item */
//   const updateMutation = useMutation({
//     mutationFn: async ({ id, name }: { id: string; name: string }) => {
//       const res = await fetch(`http://localhost:8000/api/items/${id}`, {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ name }),
//       });
//       return res.json();
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['items'] });
//       setEditingId(null); // Close input field after update
//     }
//   });

//   if (error) return <div>Error: {error.message}</div>;
//   if (!data) return <div>Loading...</div>;

//   return (
//     <ul className="space-y-3">
//       {data.map((item: { _id: string; name: string }) => (
//         <li key={item._id} className="flex justify-between items-center p-3 border">
//           {editingId === item._id ? (
//             <input
//               type="text"
//               value={updatedName}
//               onChange={(e) => setUpdatedName(e.target.value)}
//               className="border p-2 text-black"
//             />
//           ) : (
//             <span>{item.name}</span>
//           )}
//           <div className="space-x-2">
//             {editingId === item._id ? (
//               <button
//                 onClick={() => updateMutation.mutate({ id: item._id, name: updatedName })}
//                 className="bg-green-500 text-white p-2 rounded"
//               >
//                 Save
//               </button>
//             ) : (
//               <button
//                 onClick={() => {
//                   setEditingId(item._id);
//                   setUpdatedName(item.name);
//                 }}
//                 className="bg-yellow-500 text-white p-2 rounded"
//               >
//                 Edit
//               </button>
//             )}
//           </div>
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default ItemList;

// 'use client';
// import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
// import { useState } from 'react';

// function ItemList() {
//   const queryClient = useQueryClient();
//   const [editId, setEditId] = useState<string | null>(null);
//   const [editName, setEditName] = useState("");

//   // Fetch Items
//   const { data, error } = useQuery({
//     queryKey: ['items'],
//     queryFn: async () => {
//       const res = await fetch('http://localhost:8000/api/items');
//       return res.json();
//     }
//   });

//   // Update Item Mutation
//   const updateMutation = useMutation({
//     mutationFn: async ({ id, name }: { id: string; name: string }) => {
//       const res = await fetch(`http://localhost:8000/api/items/${id}`, {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ name }),
//       });
//       return res.json();
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['items'] }); // Refresh list
//       setEditId(null); // Reset editing state
//     }
//   });

//   // Delete Item Mutation
//   const deleteMutation = useMutation({
//     mutationFn: async (id: string) => {
//       await fetch(`http://localhost:8000/api/items/${id}`, {
//         method: 'DELETE',
//       });
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['items'] }); // Refresh list
//     }
//   });

//   if (error) return <div>Error: {error.message}</div>;
//   if (!data) return <div>Loading...</div>;

//   return (
//     <ul className="space-y-4">
//       {data.map((item: { _id: string; name: string }) => (
//         <li key={item._id} className="flex items-center justify-between border p-2">
//           {editId === item._id ? (
//             <input
//               type="text"
//               value={editName}
//               onChange={(e) => setEditName(e.target.value)}
//               className="border p-1 text-black"
//             />
//           ) : (
//             <span>{item.name}</span>
//           )}

//           <div className="space-x-2">
//             {editId === item._id ? (
//               <button
//                 onClick={() => updateMutation.mutate({ id: item._id, name: editName })}
//                 className="bg-green-500 px-3 py-1 text-white rounded"
//               >
//                 Save
//               </button>
//             ) : (
//               <button
//                 onClick={() => {
//                   setEditId(item._id);
//                   setEditName(item.name);
//                 }}
//                 className="bg-blue-500 px-3 py-1 text-white rounded"
//               >
//                 Edit
//               </button>
//             )}

//             <button
//               onClick={() => deleteMutation.mutate(item._id)}
//               className="bg-red-500 px-3 py-1 text-white rounded"
//             >
//               Delete
//             </button>
//           </div>
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default ItemList;

'use client'; 
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

export default function ItemsPage() {
  const queryClient = useQueryClient();
  const [editId, setEditId] = useState<string | null>(null);
  const [editName, setEditName] = useState("");

  // Fetch Items
  const { data, error } = useQuery({
    queryKey: ['items'],
    queryFn: async () => {
      const res = await fetch('http://localhost:8000/api/items');
      return res.json();
    }
  });

  // Update Mutation
  const updateMutation = useMutation({
    mutationFn: async ({ id, name }: { id: string; name: string }) => {
      await fetch(`http://localhost:8000/api/items/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name }),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['items'] });
      setEditId(null);
    }
  });

  // Delete Mutation
  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      await fetch(`http://localhost:8000/api/items/${id}`, { method: 'DELETE' });
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['items'] }),
  });

  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Task List</h1>
      <ul className="space-y-4">
        {data.map((item: { _id: string; name: string }) => (
          <li key={item._id} className="flex justify-between border p-2">
            {editId === item._id ? (
              <input
                type="text"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                className="border p-1 text-black"
              />
            ) : (
              <span>{item.name}</span>
            )}

            <div className="space-x-2">
              {editId === item._id ? (
                <button onClick={() => updateMutation.mutate({ id: item._id, name: editName })}
                  className="bg-green-500 px-3 py-1 text-white rounded">
                  Save
                </button>
              ) : (
                <button onClick={() => { setEditId(item._id); setEditName(item.name); }}
                  className="bg-blue-500 px-3 py-1 text-white rounded">
                  UPDATE
                </button>
              )}

              <button onClick={() => deleteMutation.mutate(item._id)}
                className="bg-red-500 px-3 py-1 text-white rounded">
                DELETE
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
