// Component for custom cursor
const Cursor = () => {
  return (
    <div className="hidden w-[30px] h-[30px] rounded-full border border-bg_dark dark:border-white lg:flex justify-center items-center absolute top-0 lg:right-[30%] right-[10%]">
      <span className="block h-[14px] w-[14px] rounded-full bg-bg_dark dark:bg-white"></span>
    </div>
  );
};

export default Cursor;
