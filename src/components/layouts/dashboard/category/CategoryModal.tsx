import { dashboardCategoryApi } from '@/api/category';
import { CardModal } from '@/components/modal/CardModal';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Report } from 'notiflix';
import { mutate } from 'swr';
import * as Yup from 'yup';

const CategoryModal = ({ isModalOpen, closeModal, selectedCategories }) => {
    const initialValues = {
        title: '',
        description: ''
    };
    const validationSchema = Yup.object({
        title: Yup.string().required('Title is required'),
        description: Yup.string().required('Description is required')
    });

    const handleSubmit = (values) => {
        dashboardCategoryApi.updataCategory(selectedCategories, values).then(() => {
            try {
                Report.success('Success', 'Category created successfully', 'OK', () => {
                    mutate('category');
                    closeModal();

                });
            } catch (error) {
                Report.failure('Error', 'Failed to create category', 'OK', () => {
                    closeModal();
                });
            }
        });
    };
    const deleteCategory = () => {
        dashboardCategoryApi.deleteCategory(selectedCategories).then(() => {
            try {
                Report.success('Success', 'Category deleted successfully', 'OK', () => {
                    mutate('category');
                    closeModal();
                });
            } catch (error) {
                Report.failure('Error', 'Failed to delete category', 'OK', () => {
                    closeModal();
                });
            }
        });
    }

    return (
        isModalOpen ? (
            <CardModal
                modalKey="category"
                title="Category"
                isOpen={isModalOpen}
                onClose={closeModal}
            >
                <div>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form className="space-y-4 p-4">
                                <div >
                                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                                    <Field
                                        type="text"
                                        name="title"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
                                        placeholder="Enter category title"
                                    />
                                    <ErrorMessage
                                        name="title"
                                        component="div"
                                        className="text-xs text-red-500"
                                    />
                                </div>

                                <div >
                                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                                    <Field
                                        as="textarea"
                                        name="description"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="Enter category description"
                                    />
                                    <ErrorMessage
                                        name="description"
                                        component="div"
                                        className="text-xs text-red-500"
                                    />
                                </div>
                                <div className='space-x-1'>
                                    <button
                                        type="submit"
                                        className="btn btn-sm btn-info btn-outline "
                                        disabled={isSubmitting}
                                    >
                                        Submit
                                    </button>
                                    <button
                                        type="submit"
                                        className="btn btn-sm btn-danger btn-outline"
                                        onClick={deleteCategory}
                                    >
                                        Delete
                                    </button>
                                </div>

                

                            </Form>
                        )}
                    </Formik>
                </div>
            </CardModal>
        ) : null
    );
};

export default CategoryModal;
