const QueryForm = () => {
  return (
    <div className="flex justify-center items-center ">
      <form className="flex flex-col gap-6 md:gap-10 bg-white p-6">
        <div className="flex flex-col md:flex-row  gap-6 md:gap-0 justify-between font-lato font-normal text-xs tracking-wide leading-[14px]">
          <div className="">
            <label className="block text-sm font-medium text-gray-600 mb-1 ">
              Name
            </label>
            <input
              type="text"
              className="w-[291px] md:w-[294px] h-8 px-3 py-2 border-[2px] rounded-[4px] bg-[#F7F7F7]"
            />
          </div>
          <div className="">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-[291px] md:w-[294px] h-8 px-3 py-2 border-[2px] rounded-[4px] bg-[#F7F7F7]"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-0  justify-between">
          <div className="">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Subject
            </label>
            <input
              type="text"
              className="w-[291px] md:w-[294px] h-8 px-3 py-2 border-[2px] rounded-[4px] bg-[#F7F7F7] text-gray-600"
            />
          </div>
          <div className="">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Order no.
            </label>
            <input
              type="text"
              className="w-[291px] md:w-[294px] h-8 px-3 py-2 border-[2px] rounded-[4px] bg-[#F7F7F7]"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Your Query
          </label>
          <textarea
            rows="4"
            className="w-[291px] md:w-[617px] h-[72px] px-3 py-2 border-[2px] rounded-[4px] bg-[#F7F7F7]"
          ></textarea>
        </div>

        <div className="text-center font-montserrat font-bold flex justify-center">
          <button
            type="submit"
            className="font-montserrat w-[171px] md:w-[191px] h-[33px] flex items-center justify-center text-white bg-[#FD2E5A] rounded-[3px] text-[11px] md:text-[16px]"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default QueryForm;
