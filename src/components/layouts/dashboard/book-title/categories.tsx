import useSWR from "swr";
import { useState } from "react";
import { Report } from "notiflix";
import { dashboardCategoryApi } from "@/api/category";
import { bookTitleDashboardApi } from "@/api/book-title";


export default function Category({ bookId }) { 
  const { data, isLoading, error, mutate } = useSWR(
    "/category-dashboard/get-all",
    () => dashboardCategoryApi.getAllCategories() 
  );

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = async (event) => {
    const categoryId = event.target.value;
    setSelectedCategory(categoryId);

    try {
      await bookTitleDashboardApi.updateCategory(bookId, [categoryId ]);
      Report.success("Success", "Category updated successfully", "OK");
        window.location.reload();
    } catch (error) {
      console.error(error);
      Report.failure("Error", "Failed to update category", "OK");
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading categories.</div>;

  return (
    <div className="container-fixed">
      <h1>Category</h1>
      <div className="mt-4">
        <label htmlFor="category-select" className="block text-gray-700 font-medium mb-2">
          Select Category
        </label>
        <select
          id="category-select"
          className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">-- Select Category --</option>
          {data?.map((category) => (
            <option key={category._id} value={category._id}>
              {category.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
