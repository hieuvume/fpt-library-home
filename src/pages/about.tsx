import FullWidthLayout from "@/components/layouts/FullWidthLayout";

export default function AboutPage() {
  return (
    <>
      <section className="py-14 lg:py-24 relative z-0 bg-gray-50 lg:mt-[-2.5rem]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
          <h1 className="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl text-gray-900 mb-5 md:text-5xl md:leading-normal">
            Discover Your Next Favorite Book with{" "}
            <span className="text-indigo-600">Readora</span>
          </h1>
          <p className="max-w-sm mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-9">
            A seamless way to explore, reserve, and borrow books from a diverse
            library collection, tailored just for you.
          </p>
        </div>
      </section>
      
      <section className="py-14 lg:py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
            <div className="img-box">
              <img
                src="https://pagedone.io/asset/uploads/1702034769.png"
                alt="About Us Readora"
                className="max-lg:mx-auto object-cover"
              />
            </div>
            <div className="lg:pl-[100px] flex items-center">
              <div className="data w-full">
                <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center relative">
                  About Us
                </h2>
                <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                  At Readora, we're passionate about making reading accessible
                  and enjoyable for everyone. Our mission is to provide a
                  comprehensive online book borrowing service that allows you to
                  explore new books, reserve them with ease, and enjoy seamless
                  access to an expansive library collection anytime, anywhere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-manrope text-4xl text-center text-gray-900 font-bold mb-14">
            Our Impact in Numbers
          </h2>
          <div className="flex flex-col gap-5 xl:gap-8 lg:flex-row lg:justify-between">
            <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
              <div className="flex gap-5">
                <div className="font-manrope text-2xl font-bold text-indigo-600">
                  5,000+
                </div>
                <div className="flex-1">
                  <h4 className="text-xl text-gray-900 font-semibold mb-2">
                    Books Available
                  </h4>
                  <p className="text-xs text-gray-500 leading-5">
                    From timeless classics to modern favorites, explore our
                    extensive library and discover new titles every day.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
              <div className="flex gap-5">
                <div className="font-manrope text-2xl font-bold text-indigo-600">
                  1,200+
                </div>
                <div className="flex-1">
                  <h4 className="text-xl text-gray-900 font-semibold mb-2">
                    Active Members
                  </h4>
                  <p className="text-xs text-gray-500 leading-5">
                    Join our growing community of readers who enjoy convenient
                    access to a wide range of books from the comfort of their
                    homes.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
              <div className="flex gap-5">
                <div className="font-manrope text-2xl font-bold text-indigo-600">
                  98%
                </div>
                <div className="flex-1">
                  <h4 className="text-xl text-gray-900 font-semibold mb-2">
                    Satisfaction Rate
                  </h4>
                  <p className="text-xs text-gray-500 leading-5">
                    Our members love Readora for its easy access, intuitive
                    interface, and commitment to providing an exceptional
                    borrowing experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

AboutPage.getLayout = function getLayout(page) {
  return <FullWidthLayout>{page}</FullWidthLayout>;
};