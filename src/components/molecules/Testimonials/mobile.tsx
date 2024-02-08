import { TestimonialsProps } from ".";

export const TestimonialsMobile: React.FC<TestimonialsProps> = (props) => {
  return (
    <div className="flex flex-col items-stretch px-5 py-8">
      <div className="w-full text-6xl font-bold tracking-tighter leading-[52px]">
        Some words
        <br />
        about <span className="text-zinc-500">Our Work</span>
        <br />
        written down by
        <br />
        <span className="text-rose-800">Our Friends</span>
      </div>
      <div className="mt-24 w-full text-xl leading-7 text-black">
        <span className="text-rose-800">”</span>Lorem ipsum dolor sit amet,
        consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
        laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
        veniam, quis nostrud exerci tation ullamcorper suscipit lobortis ea
        commodo consequat.<span className="text-rose-800">”</span>
        <br />
      </div>
      <div className="flex items-center justify-end gap-3 mt-[70px]">
        <div className="h-[2px] bg-rose-800 w-28"></div>
        <span className="shrink-0 font-bold leading-9 text-xl">
          {props.name}
        </span>
      </div>
      <div className="flex justify-center gap-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="152"
          height="152"
          viewBox="0 0 152 152"
          fill="none"
        >
          <path
            d="M0.999998 140.986L11.0135 151L136.837 25.1795L136.837 101.804L151 101.804L151 0.999998L50.1959 0.999961L50.1959 15.1625L126.82 15.1625L0.999998 140.986Z"
            stroke="#828282"
            strokeMiterlimit="10"
          />
        </svg>
        <div className="flex justify-start items-start gap-6">
          <button>
            <svg
              className="w-[80px] h-[80px]"
              xmlns="http://www.w3.org/2000/svg"
              width="102"
              height="102"
              viewBox="0 0 102 102"
              fill="none"
            >
              <path
                d="M51 101C78.6142 101 101 78.6142 101 51C101 23.3858 78.6142 1 51 1C23.3858 1 1 23.3858 1 51C1 78.6142 23.3858 101 51 101Z"
                stroke="black"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
              <path
                d="M43.07 67.8099L26.27 50.9999L43.07 34.1899"
                stroke="black"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
              <path
                d="M75.73 51H26.27"
                stroke="black"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
            </svg>
          </button>
          <button>
            <svg
              className="w-[80px] h-[80px]"
              xmlns="http://www.w3.org/2000/svg"
              width="102"
              height="102"
              viewBox="0 0 102 102"
              fill="none"
            >
              <path
                d="M51 0.999996C23.3858 0.999993 1.00001 23.3858 1 51C1 78.6142 23.3858 101 51 101C78.6142 101 101 78.6142 101 51C101 23.3858 78.6142 0.999998 51 0.999996Z"
                stroke="#A5002F"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
              <path
                d="M58.93 34.1901L75.73 51.0001L58.93 67.8101"
                stroke="#A5002F"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
              <path
                d="M26.27 51L75.73 51"
                stroke="#A5002F"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
