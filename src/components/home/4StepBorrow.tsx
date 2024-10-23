const FourStepBorrow = () => {
  return (
    <div className="relative w-full bg-neutral-200">
      <div className="container-fixed py-10 sm:py-12 lg:py-16">
        <div className="md:max-w-2xl lg:max-w-4xl">
          <p className="font-display text-3xl font-bold tracking-tight text-slate-900">
            4 Steps to Borrow Books Online
          </p>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Learn how to borrow books online in four simple steps, from browsing
            the catalog to reserving and collecting your favorite titles, all
            from the comfort of your home
          </p>
        </div>
        <div className="md:max-w-2xl lg:max-w-7xl mt-8">
          <ol
            role="list"
            className="grid grid-cols-1 gap-x-8 gap-y-10 [counter-reset:video] sm:grid-cols-2 lg:grid-cols-4"
          >
            <li className="[counter-increment:video]">
              <div
                className="relative flex h-44 items-center justify-center rounded-2xl shadow-lg"
                style={{
                  backgroundImage:
                    "conic-gradient(from -49.8deg at 50% 50%, #1a1a1a 0deg, #333333 59.07deg, #2b2b2b 185.61deg, #4d4d4d 284.23deg, #1c1c1c 329.41deg, #000000 360deg)",
                }}
              >
                <div className="flex overflow-hidden rounded shadow-sm">
                  <img
                    alt=""
                    loading="lazy"
                    width={200}
                    height={108}
                    decoding="async"
                    data-nimg={1}
                    style={{ color: "transparent" }}
                    src="https://primer.tailwindui.com/_next/static/media/setup.5831258d.svg"
                  />
                </div>
                <div className="absolute bottom-2 left-2 flex items-center rounded-lg bg-black/30 px-1.5 py-0.5 text-sm text-white [@supports(backdrop-filter:blur(0))]:bg-white/10 [@supports(backdrop-filter:blur(0))]:backdrop-blur">
                  <svg
                    aria-hidden="true"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 16 16"
                    className="h-4 w-4 fill-current stroke-current"
                  >
                    <path d="M6.75 10.25v-4.5L10.25 8l-3.5 2.25Z" />
                    <circle cx={8} cy={8} r="6.25" fill="none" />
                  </svg>
                  <time dateTime="16m 54s" className="ml-2">
                    16:54
                  </time>
                </div>
              </div>
              <h3 className="mt-8 text-base font-medium tracking-tight text-slate-900 before:mb-2 before:block before:font-mono before:text-sm before:text-slate-500 before:content-[counter(video,decimal-leading-zero)]">
                Create an Account
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Sign up quickly by entering your basic information. Get
                immediate access to our online library
              </p>
            </li>
            <li className="[counter-increment:video]">
              <div
                className="relative flex h-44 items-center justify-center rounded-2xl shadow-lg"
                style={{
                  backgroundImage:
                    "conic-gradient(from -49.8deg at 50% 50%, #1a1a1a 0deg, #333333 59.07deg, #2b2b2b 185.61deg, #4d4d4d 284.23deg, #1c1c1c 329.41deg, #000000 360deg)",
                }}
              >
                <div className="flex overflow-hidden rounded shadow-sm">
                  <img
                    alt=""
                    loading="lazy"
                    width={200}
                    height={108}
                    decoding="async"
                    data-nimg={1}
                    style={{ color: "transparent" }}
                    src="https://primer.tailwindui.com/_next/static/media/grids.8de62b9c.svg"
                  />
                </div>
                <div className="absolute bottom-2 left-2 flex items-center rounded-lg bg-black/30 px-1.5 py-0.5 text-sm text-white [@supports(backdrop-filter:blur(0))]:bg-white/10 [@supports(backdrop-filter:blur(0))]:backdrop-blur">
                  <svg
                    aria-hidden="true"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 16 16"
                    className="h-4 w-4 fill-current stroke-current"
                  >
                    <path d="M6.75 10.25v-4.5L10.25 8l-3.5 2.25Z" />
                    <circle cx={8} cy={8} r="6.25" fill="none" />
                  </svg>
                  <time dateTime="9m 12s" className="ml-2">
                    9:12
                  </time>
                </div>
              </div>
              <h3 className="mt-8 text-base font-medium tracking-tight text-slate-900 before:mb-2 before:block before:font-mono before:text-sm before:text-slate-500 before:content-[counter(video,decimal-leading-zero)]">
                Upgrade Your Account
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Unlock exclusive features by upgrading to a premium membership
                and access to special titles
              </p>
            </li>
            <li className="[counter-increment:video]">
              <div
                className="relative flex h-44 items-center justify-center rounded-2xl shadow-lg"
                style={{
                  backgroundImage:
                    "conic-gradient(from -49.8deg at 50% 50%, #1a1a1a 0deg, #333333 59.07deg, #2b2b2b 185.61deg, #4d4d4d 284.23deg, #1c1c1c 329.41deg, #000000 360deg)",
                }}
              >
                <div className="flex overflow-hidden rounded shadow-sm">
                  <img
                    alt=""
                    loading="lazy"
                    width={200}
                    height={108}
                    decoding="async"
                    data-nimg={1}
                    style={{ color: "transparent" }}
                    src="https://primer.tailwindui.com/_next/static/media/strokes.4d47a8e4.svg"
                  />
                </div>
                <div className="absolute bottom-2 left-2 flex items-center rounded-lg bg-black/30 px-1.5 py-0.5 text-sm text-white [@supports(backdrop-filter:blur(0))]:bg-white/10 [@supports(backdrop-filter:blur(0))]:backdrop-blur">
                  <svg
                    aria-hidden="true"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 16 16"
                    className="h-4 w-4 fill-current stroke-current"
                  >
                    <path d="M6.75 10.25v-4.5L10.25 8l-3.5 2.25Z" />
                    <circle cx={8} cy={8} r="6.25" fill="none" />
                  </svg>
                  <time dateTime="23m 25s" className="ml-2">
                    23:25
                  </time>
                </div>
              </div>
              <h3 className="mt-8 text-base font-medium tracking-tight text-slate-900 before:mb-2 before:block before:font-mono before:text-sm before:text-slate-500 before:content-[counter(video,decimal-leading-zero)]">
                Reserve Your Books
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Browse our catalog, select your preferred titles, and place a
                reservation with just a few clicks
              </p>
            </li>
            <li className="[counter-increment:video]">
              <div
                className="relative flex h-44 items-center justify-center rounded-2xl shadow-lg"
                style={{
                  backgroundImage:
                    "conic-gradient(from -49.8deg at 50% 50%, #1a1a1a 0deg, #333333 59.07deg, #2b2b2b 185.61deg, #4d4d4d 284.23deg, #1c1c1c 329.41deg, #000000 360deg)",
                }}
              >
                <div className="flex overflow-hidden rounded shadow-sm">
                  <img
                    alt=""
                    loading="lazy"
                    width={200}
                    height={108}
                    decoding="async"
                    data-nimg={1}
                    style={{ color: "transparent" }}
                    src="https://primer.tailwindui.com/_next/static/media/duotone.5f204d45.svg"
                  />
                </div>
                <div className="absolute bottom-2 left-2 flex items-center rounded-lg bg-black/30 px-1.5 py-0.5 text-sm text-white [@supports(backdrop-filter:blur(0))]:bg-white/10 [@supports(backdrop-filter:blur(0))]:backdrop-blur">
                  <svg
                    aria-hidden="true"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 16 16"
                    className="h-4 w-4 fill-current stroke-current"
                  >
                    <path d="M6.75 10.25v-4.5L10.25 8l-3.5 2.25Z" />
                    <circle cx={8} cy={8} r="6.25" fill="none" />
                  </svg>
                  <time dateTime="28m 44s" className="ml-2">
                    28:44
                  </time>
                </div>
              </div>
              <h3 className="mt-8 text-base font-medium tracking-tight text-slate-900 before:mb-2 before:block before:font-mono before:text-sm before:text-slate-500 before:content-[counter(video,decimal-leading-zero)]">
                Pick Up Your Books
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Go to the library at the scheduled time and collect your
                reserved books with ease
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default FourStepBorrow;
