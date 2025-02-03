'use client';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const validationSchema = z.object({
  name: z.string().nonempty("Name is required"),
});

type FormData = z.infer<typeof validationSchema>;

export default function UpdateItem({ id, currentName }: { id: string; currentName: string }) {
  const queryClient = useQueryClient();

  const { handleSubmit, register, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(validationSchema),
    defaultValues: { name: currentName },
  });

  /* Mutation for updating item */
  const updateMutation = useMutation({
    mutationFn: async (data: FormData) => {
      const res = await fetch(`http://localhost:8000/api/items/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      return res.json();
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["items"] }),
  });

  return (
    <form onSubmit={handleSubmit((data) => updateMutation.mutate(data))} className="flex flex-col">
      <input
        type="text"
        {...register("name")}
        className="border p-2 text-black"
      />
      {errors.name && <span className="text-red-500">{errors.name.message}</span>}
      <button type="submit" className="mt-2 bg-green-500 text-white p-2 rounded">Update</button>
    </form>
  );
}
