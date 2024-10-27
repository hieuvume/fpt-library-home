import { userApi } from "@/api/user";
import useAuth from "@/hooks/useAuth";
import { formatDate, formatOriginDate, maskText, uploadImage } from "@/utils";
import CurrentLoans from "./CurrentLoans";
import UpdateProfileModal from "./modal/UpdateProfileModal";
import ChangePasswordModal from "./modal/ChangePasswordModal";

const Profile = () => {
  const { user } = useAuth();

  const onChangeAvatar = async (e) => {
    const file = e.target.files[0];
    console.log(e.target.files);
    if (file) {
      const url = await uploadImage(file);
      userApi.updateAvatar(url);
    }
  };

  return (
    <div className="container-fixed">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 lg:gap-7.5">
        <div className="col-span-1">
          <div className="grid gap-5 lg:gap-7.5">
            <div className="card min-w-full">
              <div className="card-header">
                <h3 className="card-title">Personal Info</h3>
              </div>
              <div className="card-table scrollable-x-auto pb-3">
                <table className="table align-middle text-sm text-gray-500">
                  <tbody>
                    <tr>
                      <td className="py-2 min-w-28 text-gray-600 font-normal">
                        Photo
                      </td>
                      <td className="py-2 text-gray700 font-normal min-w-32 text-2sm">
                        150x150px JPEG, PNG Image
                      </td>
                      <td className="py-2 text-center">
                        <div className="flex justify-center items-center">
                          <div
                            className="image-input size-16"
                            data-image-input="true"
                            id="avatar_image_input"
                          >
                            <input
                              accept=".png, .jpg, .jpeg"
                              name="avatar"
                              type="file"
                              onChange={onChangeAvatar}
                            />
                            <input name="avatar_remove" type="hidden" />
                            <div
                              className="btn btn-icon btn-icon-xs btn-light shadow-default absolute z-1 size-5 -top-0.5 -right-0.5 rounded-full"
                              data-image-input-remove=""
                              data-tooltip="#image_input_tooltip"
                              data-tooltip-trigger="hover"
                            >
                              <i className="ki-filled ki-cross"></i>
                            </div>
                            <span className="tooltip" id="image_input_tooltip">
                              Click to remove or revert
                            </span>
                            <div
                              className="image-input-placeholder rounded-full border-2 border-success image-input-empty:border-gray-300"
                              style={{
                                backgroundImage: `url('/media/avatars/blank.png')`,
                              }}
                            >
                              <div
                                className="image-input-preview rounded-full"
                                style={{
                                  backgroundImage: `url(${
                                    user?.avatar_url ||
                                    "/media/avatars/blank.png"
                                  })`,
                                }}
                              ></div>
                              <div className="flex items-center justify-center cursor-pointer h-5 left-0 right-0 bottom-0 bg-dark-clarity absolute">
                                <svg
                                  className="fill-light opacity-80"
                                  height={12}
                                  viewBox="0 0 14 12"
                                  width={14}
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M11.6665 2.64585H11.2232C11.0873 2.64749 10.9538 2.61053 10.8382 2.53928C10.7225 2.46803 10.6295 2.36541 10.5698 2.24335L10.0448 1.19918C9.91266 0.931853 9.70808 0.707007 9.45438 0.550249C9.20068 0.393491 8.90806 0.311121 8.60984 0.312517H5.38984C5.09162 0.311121 4.799 0.393491 4.5453 0.550249C4.2916 0.707007 4.08701 0.931853 3.95484 1.19918L3.42984 2.24335C3.37021 2.36541 3.27716 2.46803 3.1615 2.53928C3.04584 2.61053 2.91234 2.64749 2.7765 2.64585H2.33317C1.90772 2.64585 1.49969 2.81486 1.19885 3.1157C0.898014 3.41654 0.729004 3.82457 0.729004 4.25002V10.0834C0.729004 10.5088 0.898014 10.9168 1.19885 11.2177C1.49969 11.5185 1.90772 11.6875 2.33317 11.6875H11.6665C12.092 11.6875 12.5 11.5185 12.8008 11.2177C13.1017 10.9168 13.2707 10.5088 13.2707 10.0834V4.25002C13.2707 3.82457 13.1017 3.41654 12.8008 3.1157C12.5 2.81486 12.092 2.64585 11.6665 2.64585ZM6.99984 9.64585C6.39413 9.64585 5.80203 9.46624 5.2984 9.12973C4.79478 8.79321 4.40225 8.31492 4.17046 7.75532C3.93866 7.19572 3.87802 6.57995 3.99618 5.98589C4.11435 5.39182 4.40602 4.84613 4.83432 4.41784C5.26262 3.98954 5.80831 3.69786 6.40237 3.5797C6.99644 3.46153 7.61221 3.52218 8.1718 3.75397C8.7314 3.98576 9.2097 4.37829 9.54621 4.88192C9.88272 5.38554 10.0623 5.97765 10.0623 6.58335C10.0608 7.3951 9.73765 8.17317 9.16365 8.74716C8.58965 9.32116 7.81159 9.64431 6.99984 9.64585Z"
                                    fill=""
                                  ></path>
                                  <path
                                    d="M7 8.77087C8.20812 8.77087 9.1875 7.7915 9.1875 6.58337C9.1875 5.37525 8.20812 4.39587 7 4.39587C5.79188 4.39587 4.8125 5.37525 4.8125 6.58337C4.8125 7.7915 5.79188 8.77087 7 8.77087Z"
                                    fill=""
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 text-gray-600 font-normal">Name</td>
                      <td className="py-2 text-gray-800 font-normaltext-sm">
                        {user?.full_name}
                      </td>
                      <td className="py-2 text-center">
                        <button
                          className="btn btn-sm btn-icon btn-clear btn-primary"
                          data-modal-toggle="#update-full-name"
                        >
                          <i className="ki-filled ki-notepad-edit"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 text-gray-600 font-normal">
                        Availability
                      </td>
                      <td className="py-3 text-gray-800 font-normal">
                        <span className="badge badge-sm badge-outline badge-success">
                          Available now
                        </span>
                      </td>
                      <td className="py-3 text-center">
                        {/* <a
                          className="btn btn-sm btn-icon btn-clear btn-primary"
                          href="#"
                        >
                          <i className="ki-filled ki-notepad-edit"></i>
                        </a> */}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 text-gray-600 font-normal">
                        Birthday
                      </td>
                      <td className="py-3 text-gray-700 text-sm font-normal">
                        {formatDate(user?.date_of_birth)}
                      </td>
                      <td className="py-3 text-center">
                        <button
                          className="btn btn-sm btn-icon btn-clear btn-primary"
                          data-modal-toggle="#update-birthday"
                        >
                          <i className="ki-filled ki-notepad-edit"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 text-gray-600 font-normal">Gender</td>
                      <td className="py-3 text-gray-700 text-sm font-normal">
                        {user?.gender?.toLocaleUpperCase() || "Male"}
                      </td>
                      <td className="py-3 text-center">
                        <button
                          className="btn btn-sm btn-icon btn-clear btn-primary"
                          data-modal-toggle="#update-gender"
                        >
                          <i className="ki-filled ki-notepad-edit"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3">ID Card</td>
                      <td className="py-3 text-gray-700 text-2sm font-normal">
                        {user?.id_card
                          ? maskText(user?.id_card?.id_number, 3, 3)
                          : "You have no an ID Card yet"}
                      </td>
                      <td className="py-3 text-center">
                        {user?.id_card ? (
                          <a
                            className="btn btn-sm btn-icon btn-clear btn-primary"
                            href="#"
                          >
                            <i className="ki-filled ki-notepad-edit"></i>
                          </a>
                        ) : (
                          <a className="btn btn-link btn-sm" href="#">
                            Add
                          </a>
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="card min-w-full">
              <div className="card-header">
                <h3 className="card-title">Basic Settings</h3>
              </div>
              <div className="card-table scrollable-x-auto pb-3">
                <table className="table align-middle text-sm text-gray-500">
                  <tbody>
                    <tr>
                      <td className="py-2 min-w-36 text-gray-600 font-normal">
                        Email
                      </td>
                      <td className="py-2 min-w-60">
                        <button className="text-gray-800 font-normal text-sm hover:text-primary-active">
                          {user?.email}
                        </button>
                      </td>
                      <td className="py-2 max-w-16 text-right">
                        {/* <button
                          className="btn btn-sm btn-icon btn-clear btn-primary"
                          data-modal-toggle="#update-email"
                        >
                          <i className="ki-filled ki-notepad-edit"></i>
                        </button> */}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 min-w-36 text-gray-600 font-normal">
                        Phone
                      </td>
                      <td className="py-2 min-w-60">
                        <button className="text-gray-800 font-normal text-sm hover:text-primary-active">
                          {user?.phone_number}
                        </button>
                      </td>
                      <td className="py-2 max-w-16 text-right">
                        <button
                          className="btn btn-sm btn-icon btn-clear btn-primary"
                          data-modal-toggle="#update-phone"
                        >
                          <i className="ki-filled ki-notepad-edit"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2text-gray-600 font-normal">
                        Password
                      </td>
                      <td className="py-2 text-gray-700 font-normal">
                        {user?.password ? "********" : "You have no password"}
                      </td>
                      <td className="py-2 text-right">
                        <button
                          className="btn btn-sm btn-icon btn-clear btn-primary"
                          data-modal-toggle="#update-password"
                        >
                          <i className="ki-filled ki-notepad-edit"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3.5text-gray-600 font-normal">2FA</td>
                      <td className="py-3.5 text-gray-700 font-normal">
                        To be set
                      </td>
                      <td className="py-3 text-right">
                        <a className="btn btn-link btn-sm" href="#">
                          Setup
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="grid gap-5 lg:gap-7.5">
            <div className="card flex-col gap-5 justify-between bg-[center_top_1.3rem] bg-no-repeat pt-5 pb-5 lg:pt-10 px-5 start-now-bg bg-[length:700px]">
              <div className="text-center">
                <h3 className="text-gray-900 text-lg font-semibold leading-6 mb-1.5">
                  Become a Membership
                  <br />
                  Enjoy Exclusive Book-Borrowing Benefits
                </h3>
                <span className="text-gray-700 text-sm block mb-5">
                  Discover membership plans that unlock access to a wider
                  selection of great books and exclusive offers.
                </span>
                <a className="btn btn-dark btn-sm" href="/plans">
                  Join Now
                </a>
              </div>
              {/* <div className="text-center">
                <img
                  alt=""
                  className="dark:hidden max-h-[300px]"
                  src="/media/images/2600x1200/3.png"
                />
                <img
                  alt=""
                  className="light:hidden max-h-[300px]"
                  src="/media/images/2600x1200/3-dark.png"
                />
              </div> */}
            </div>
            <CurrentLoans />
          </div>
        </div>
      </div>
      {/* end: grid */}
      {/* <UpdateProfileModal
        modalKey="update-email"
        name="email"
        type="email"
        label="Email"
        defaultValue={user?.email}
      /> */}
      <UpdateProfileModal
        modalKey="update-full-name"
        name="full_name"
        label="Full name"
        defaultValue={user?.full_name}
      />
      <UpdateProfileModal
        modalKey="update-phone"
        name="phone_number"
        label="Phone number"
        defaultValue={user?.phone_number}
      />
      <UpdateProfileModal
        modalKey="update-address"
        name="address"
        label="Address"
        defaultValue={user?.address}
      />
      <UpdateProfileModal
        modalKey="update-birthday"
        name="date_of_birth"
        label="Date of birth"
        defaultValue={formatOriginDate(user?.date_of_birth)}
        type="date"
      />
      <UpdateProfileModal
        modalKey="update-gender"
        name="gender"
        label="Gender"
        type="select"
        options={[
          { label: "Male", value: "male" },
          { label: "Female", value: "female" },
        ]}
        defaultValue={user?.gender}
      />
      <ChangePasswordModal />
    </div>
  );
};

export default Profile;
