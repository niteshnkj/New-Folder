const QueryForm = () => {
  return (
    <div className="flex justify-center items-center">
      <form className="w-[80%]  space-y-4 bg-white p-6">
        <div className="flex space-x-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Name
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>
        </div>

        <div className="flex space-x-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Subject
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Order no.
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Your Query
          </label>
          <textarea
            rows="4"
            className="w-full px-3 py-2 border-2 border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-2 text-white bg-pink-500 rounded-md shadow-sm hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default QueryForm;
