const QueryForm = () => {
  return (
    <div className="flex justify-center items-center ">
      <form className="w-full  space-y-4 bg-white p-6">
        <div className="flex flex-col sm:flex-row sm:space-x-4 font-lato font-normal">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Name
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>
          <div className="flex-1 mt-4 sm:mt-0">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:space-x-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Subject
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>
          <div className="flex-1 mt-4 sm:mt-0">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Order no.
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Your Query
          </label>
          <textarea
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
          ></textarea>
        </div>

        <div className="text-center font-montserrat font-bold">
          <button
            type="submit"
            className="w-full sm:w-[191px] px-6 py-2 text-white bg-[#FD2E5A] rounded-[3px] shadow-sm focus:outline-none focus:ring-2 "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default QueryForm;
