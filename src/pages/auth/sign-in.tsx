import AuthLayout from "@/components/layouts/AuthLayout";

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center grow bg-center bg-no-repeat page-bg">
      <div className="card max-w-[370px] w-full">
        <form
          action="#"
          className="card-body flex flex-col gap-5 p-10"
          id="sign_in_form"
          method="get"
        >
          <div className="text-center mb-2.5">
            <h3 className="text-lg font-medium text-gray-900 leading-none mb-2.5">
              Sign in
            </h3>
            <div className="flex items-center justify-center font-medium">
              <span className="text-2sm text-gray-700 me-1.5">
                Need an account?
              </span>
              <a
                className="text-2sm link"
                href="/auth/sign-up"
              >
                Sign up
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2.5">
            <a className="btn btn-light btn-sm justify-center" href="#">
              <img
                alt=""
                className="size-3.5 shrink-0"
                src="/media/brand-logos/google.svg"
              />
              Sign-in with Google
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="border-t border-gray-200 w-full"></span>
            <span className="text-2xs text-gray-500 font-medium uppercase">
              Or
            </span>
            <span className="border-t border-gray-200 w-full"></span>
          </div>
          <div className="flex flex-col gap-1">
            <label className="form-label font-normal text-gray-900">
              Email
            </label>
            <input
              className="input"
              placeholder="email@email.com"
              type="text"
              defaultValue=""
            />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between gap-1">
              <label className="form-label font-normal text-gray-900">
                Password
              </label>
              <a
                className="text-2sm link shrink-0"
                href="/metronic/tailwind/demo9/authentication/classic/reset-password/enter-email/"
              >
                Forgot Password?
              </a>
            </div>
            <div className="input" data-toggle-password="true">
              <input
                name="user_password"
                placeholder="Enter Password"
                type="password"
                defaultValue=""
              />
              <button
                className="btn btn-icon"
                data-toggle-password-trigger="true"
                type="button"
              >
                <i className="ki-filled ki-eye text-gray-500 toggle-password-active:hidden"></i>
                <i className="ki-filled ki-eye-slash text-gray-500 hidden toggle-password-active:block"></i>
              </button>
            </div>
          </div>
          <label className="checkbox-group">
            <input
              className="checkbox checkbox-sm"
              name="check"
              type="checkbox"
              defaultValue={1}
            />
            <span className="checkbox-label">Remember me</span>
          </label>
          <button className="btn btn-primary flex justify-center grow">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

SignInPage.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};
