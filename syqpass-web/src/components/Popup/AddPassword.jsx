import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPassword } from "../../slices/PasswordSlice";

const AddPassword = ({ onClose }) => {
  const [formData, setFormData] = useState({
    title: "",
    ip: "",
    fqdn: "",
    username: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPassword(formData))
      .unwrap()
      .then((originalPromiseResult) => {
        console.log(originalPromiseResult)
      })
      .catch((rejectedValueOrSerializedError) => {
        console.log(rejectedValueOrSerializedError)
      })
    //onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-10">
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="bg-white p-4 rounded-lg shadow-md z-20 shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="space-x-6 space-y-4 mr-4 ml-4 mt-4 mb-4">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Added Password
              </h3>
            </div>
            <div className="p-7">
              <form onSubmit={handleSubmit}>
                <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                  <div className="w-full sm:w-1/2">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="title"
                    >
                      Title
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      name="title"
                      id="title"
                      onChange={handleChange}
                      value={formData.title}
                    />
                  </div>

                  <div className="w-full sm:w-1/2">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="ip"
                    >
                      Ip
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      name="ip"
                      id="ip"
                      onChange={handleChange}
                      value={formData.ip}
                    />
                  </div>
                </div>

                <div className="mb-5.5">
                  <label
                    className="mb-3 block text-sm font-medium text-black dark:text-white"
                    htmlFor="fqdn"
                  >
                    FQDN
                  </label>
                  <input
                    className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                    type="text"
                    name="fqdn"
                    id="fqdn"
                    onChange={handleChange}
                    value={formData.fqdn}
                  />
                </div>

                <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                  <div className="w-full sm:w-1/2">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="username"
                    >
                      Username
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      name="username"
                      id="username"
                      onChange={handleChange}
                      value={formData.username}
                    />
                  </div>

                  <div className="w-full sm:w-1/2">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="password"
                      name="password"
                      id="password"
                      onChange={handleChange}
                      value={formData.password}
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-4.5">
                  <button
                    className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
                    onClick={onClose}
                  >
                    Cancel
                  </button>
                  <button
                    className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:shadow-1"
                    type="submit"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPassword;
