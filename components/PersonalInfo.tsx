"use client";

const PersonalInfo = () => {
  return (
    <div>
      <h1 className="mb-2 text-[26px] font-bold text-marine-blue ">
        Personal Info
      </h1>
      <p className="mb-6 text-lg text-cool-gray">
        Please provide your name, email, address, phone number.
      </p>
      <form className="">
        <div className="mb-4">
          <label htmlFor="name" className=" block font-medium text-marine-blue">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="e.g Stephen King"
            className="h-[45px] w-full rounded border-2 border-light-gray px-3 outline-none placeholder:font-medium"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className=" block font-medium text-marine-blue"
          >
            Email Address
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="e.g stephenking@lorem.com"
            className="h-[45px] w-full rounded border-2 border-light-gray px-3 outline-none placeholder:font-medium"
          />
        </div>
        <div>
          <label
            htmlFor="phone_num"
            className=" block font-medium text-marine-blue"
          >
            Phone Number
          </label>
          <input
            type="text"
            name="tel"
            id="phone"
            placeholder="e.g +123-4567-879"
            className="h-[45px] w-full rounded border-2 border-light-gray px-3 outline-none placeholder:font-medium"
          />
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
