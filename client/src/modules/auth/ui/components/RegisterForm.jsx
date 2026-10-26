import { NavLink } from "react-router";
import { Button, Icon } from "../../../../components/ui.jsx";
import { RiArrowRightLine, RiUserAddLine } from "@remixicon/react";
import useRegisterForm from "../../hooks/useRegisterForm.jsx";

export default function RegisterForm() {
  const {register, errors, registerFormSubmit, handleSubmit } = useRegisterForm()
  return (
    <>
      <div
        className="
          onboarding-symbol place-items-center [border:1px_solid_#e2daeb] bg-[white] rounded-[11px] text-[#8c79a5]
          mb-[21px] shadow-[0_3px_6px_#34234404] [&_i]:text-[21px] max-[640px]:hidden p-2 w-min
        "
      >
        <RiUserAddLine size={40} />
      </div>

      <span className="eyebrow text-[8px] font-bold tracking-[1.5px] text-[#90909c] block mb-[10px] max-[700px]:text-[7px] ">LET’S START WITH YOU</span>

      <h2>A fresh start, right here.</h2>

      <p>
        A few details. A little introduction. Your next possibility.
      </p>

      <nav className="
        onboarding-options flex p-[4px] bg-[#f0edf4] [border:1px_solid_#e7e1ed] rounded-[7px] my-[23px] mx-0
        [&_a]:w-[50%] [&_a]:text-center [&_a]:p-[9px] [&_a]:text-[11px] [&_a]:rounded-[5px] [&_a]:text-[#8a7a9a]
        [&_.selected]:bg-[white] [&_.selected]:shadow-[0_2px_4px_#35214808] [&_.selected]:text-[#70568d]
        [&_.selected]:font-[650] max-[640px]:my-[20px] max-[640px]:mx-0
      " aria-label="Account options">
        <NavLink to="/auth/login">
          Log in
        </NavLink>

        <NavLink
          to="/auth/"
          end
          className="selected"
        >
          Register
        </NavLink>
      </nav>

      <form onSubmit={handleSubmit(registerFormSubmit)}>
        <div
          className="onboarding-fields flex flex-col gap-[17px] mb-5"
          aria-label="Registration details"
        >
          <label
            className="
        onboarding-field flex flex-col gap-[7px] [&_>_span]:text-[10px] [&_>_span]:font-semibold
        [&_input]:w-full [&_input]:[border:1px_solid_#dfd8e6] [&_input]:rounded-[6px]
        [&_input]:bg-[#fff] [&_input]:py-[12px] [&_input]:px-[13px] [&_input]:min-h-[42px] [&_input]:text-[11px]
        [&_input]:text-[#65556f] [&_input::placeholder]:text-[#a396ac]
      "
          >
            <span className="text-[#706079]">Full name</span>

            <input
            {...register("name", {
              required: "Full name is required",
            })}
              type="name"
              name="name"
              placeholder="Your Full Name"
              required
            />
            {errors.name && <span className="text-red-600">{errors.name.message}</span>}
          </label>

          <label
            className="
        onboarding-field flex flex-col gap-[7px] [&_>_span]:text-[10px] [&_>_span]:font-semibold
        [&_input]:w-full [&_input]:[border:1px_solid_#dfd8e6] [&_input]:rounded-[6px]
        [&_input]:bg-[#fff] [&_input]:py-[12px] [&_input]:px-[13px] [&_input]:min-h-[42px] [&_input]:text-[11px]
        [&_input]:text-[#65556f] [&_input::placeholder]:text-[#a396ac]
      "
          >
            <span className="text-[#706079]">Email address</span>

            <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: "enter valid email address"
              }
            })}
              type="email"
              name="email"
              placeholder="you@example.com"
              required
            />
            {errors.email && <span className="text-red-600">{errors.email.message}</span>}
          </label>

          <label
            className="
        onboarding-field flex flex-col gap-[7px] [&_>_span]:text-[10px] [&_>_span]:font-semibold
        [&_input]:w-full [&_input]:[border:1px_solid_#dfd8e6] [&_input]:rounded-[6px]
        [&_input]:bg-[#fff] [&_input]:py-[12px] [&_input]:px-[13px] [&_input]:min-h-[42px] [&_input]:text-[11px]
        [&_input]:text-[#65556f] [&_input::placeholder]:text-[#a396ac]
      "
          >
            <span className="text-[#706079]">Phone number</span>

            <input
            {...register("phoneNumber", {
              required: "Phone number is required",
              pattern: {
                value: /^[6-9]\d{9}$/,
                message: "Enter valid indian number"
              }
            })}
              type="number"
              name="phoneNumber"
              placeholder="9876543210"
              required
            />
            {errors.phoneNumber && <span className="text-red-600">{errors.phoneNumber.message}</span>}
          </label>
          <label
            className="
        onboarding-field flex flex-col gap-[7px] [&_>_span]:text-[10px] [&_>_span]:font-semibold
        [&_input]:w-full [&_input]:[border:1px_solid_#dfd8e6] [&_input]:rounded-[6px]
        [&_input]:bg-[#fff] [&_input]:py-[12px] [&_input]:px-[13px] [&_input]:min-h-[42px] [&_input]:text-[11px]
        [&_input]:text-[#65556f] [&_input::placeholder]:text-[#a396ac]
      "
          >
            <span className="text-[#706079]">Password</span>

            <input
            {...register("password", {
              required: "Password is required",
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message: "Password must contain atleast one uppercase, lowercase, number and symbol and longer than 8 character"
              }
            })}
              type="password"
              name="password"
              placeholder="Create a password"
              required
            />
            {errors.password && <span className="text-red-600">{errors.password.message}</span>}
          </label>



         
        </div>

        <Button
          type="submit"
          variant="primary"
          className="
            onboarding-submit [&.btn]:w-full [&.btn]:min-h-[43px] [&.btn]:text-[11px] [&.btn]:bg-[#756098]
            [&.btn]:border-[#756098] [&.btn:hover]:bg-[#634f83]
          "
        >
          Create account <RiArrowRightLine />
        </Button>
      </form>
    </>
  );
}