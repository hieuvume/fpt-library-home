import FourStepBorrow from "@/components/home/4StepBorrow";
import BestOfTheMonth from "@/components/home/BestOfTheMonth";
import FullWidthLayout from "@/components/layouts/FullWidthLayout";
import {  BorrowRecordHistoryWrapper } from "@/components/layouts/home/histories/BorrowRecordHistory";
import SearchBar from "@/components/layouts/home/SearchBar";

export default function Home() {
  return (
    <>
      <div className="mb-5">
        <SearchBar />
      </div>
      <BestOfTheMonth />
      <FourStepBorrow />

      {/* <BorrowRecordHistoryWrapper/> */}
      
      <section
        id="free-chapters"
        aria-label="Free preview"
        className="scroll-mt-14 bg-neutral-600 sm:scroll-mt-32"
      >
        <div className="overflow-hidden lg:relative">
          <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-5xl lg:px-8 relative grid grid-cols-1 items-end gap-y-12 py-20 lg:static lg:grid-cols-2 lg:py-28 xl:py-26">
            <svg
              aria-hidden="true"
              width={432}
              height={184}
              className="absolute -top-32 left-0 w-full sm:-top-5 sm:left-3/4 sm:ml-8 sm:w-auto md:left-2/3 lg:left-auto lg:right-2 lg:ml-0 xl:left-2/3 xl:right-auto"
            >
              <defs>
                <symbol id=":S4:-0" width={40} height={40}>
                  <rect className="fill-neutral-500" width={40} height={40} />
                  <circle className="fill-neutral-600" cx={20} cy={20} r={13} />
                </symbol>
                <symbol id=":S4:-1" width={40} height={40}>
                  <circle className="fill-neutral-300" cx={20} cy={20} r={20} />
                  <rect
                    className="fill-neutral-600"
                    width={20}
                    height={20}
                    x={10}
                    y={10}
                  />
                </symbol>
              </defs>
              <use href="#:S4:-0" x={0} y={0} />
              <use href="#:S4:-1" x={56} y={0} />
              <use href="#:S4:-0" x={112} y={0} />
              <use href="#:S4:-1" x={168} y={0} />
              <use href="#:S4:-1" x={224} y={0} />
              <use href="#:S4:-0" x={280} y={0} />
              <use href="#:S4:-1" x={336} y={0} />
              <use href="#:S4:-0" x={392} y={0} />
              <use href="#:S4:-1" x={0} y={48} />
              <use href="#:S4:-0" x={56} y={48} />
              <use href="#:S4:-1" x={112} y={48} />
              <use href="#:S4:-1" x={168} y={48} />
              <use href="#:S4:-0" x={224} y={48} />
              <use href="#:S4:-0" x={280} y={48} />
              <use href="#:S4:-0" x={336} y={48} />
              <use href="#:S4:-1" x={392} y={48} />
              <use href="#:S4:-0" x={0} y={96} />
              <use href="#:S4:-1" x={56} y={96} />
              <use href="#:S4:-0" x={112} y={96} />
              <use href="#:S4:-1" x={168} y={96} />
              <use href="#:S4:-1" x={224} y={96} />
              <use href="#:S4:-0" x={280} y={96} />
              <use href="#:S4:-1" x={336} y={96} />
              <use href="#:S4:-0" x={392} y={96} />
              <use href="#:S4:-1" x={0} y={144} />
              <use href="#:S4:-0" x={56} y={144} />
              <use href="#:S4:-1" x={112} y={144} />
              <use href="#:S4:-1" x={168} y={144} />
              <use href="#:S4:-0" x={224} y={144} />
              <use href="#:S4:-0" x={280} y={144} />
              <use href="#:S4:-0" x={336} y={144} />
              <use href="#:S4:-1" x={392} y={144} />
            </svg>
            <div>
              <span className="font-display text-3xl font-extrabold tracking-tight text-white sm:w-3/4 sm:text-4xl md:w-2/3 lg:w-auto">
                Get the free sample chapters
              </span>
              <p className="mt-4 text-lg tracking-tight text-neutral-200">
                Enter your email address and I’ll send you a sample from the
                book containing two of my favorite chapters.
              </p>
            </div>
            <form className="lg:pl-16">
              <h3 className="text-base font-medium tracking-tight text-white">
                Get two free chapters straight to your inbox{/* */}{" "}
                <span aria-hidden="true">→</span>
              </h3>
              <div className="mt-4 sm:relative sm:flex sm:items-center sm:py-0.5 sm:pr-2.5">
                <div className="relative sm:static sm:flex-auto">
                  <input
                    type="email"
                    id="email-address"
                    required
                    aria-label="Email address"
                    placeholder="Email address"
                    className="peer relative z-10 w-full appearance-none bg-transparent px-4 py-2 text-base text-white placeholder:text-white/70 focus:outline-none sm:py-3"
                  />
                  <div className="absolute inset-0 rounded-md border border-white/20 peer-focus:border-neutral-300 peer-focus:bg-neutral-500 peer-focus:ring-1 peer-focus:ring-neutral-300 sm:rounded-xl" />
                </div>
                <button
                  className="inline-flex justify-center rounded-md py-1 px-4 text-base font-semibold tracking-tight shadow-sm focus:outline-none bg-white text-neutral-600 hover:text-neutral-700 focus-visible:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:bg-neutral-50 active:text-neutral-900/80 disabled:opacity-40 disabled:hover:text-neutral-600 mt-4 w-full sm:relative sm:z-10 sm:mt-0 sm:w-auto sm:flex-none"
                  type="submit"
                  color="white"
                >
                  Get free chapters
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <FullWidthLayout>{page}</FullWidthLayout>;
};
