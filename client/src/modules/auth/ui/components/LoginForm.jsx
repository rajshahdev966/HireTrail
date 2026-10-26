import { NavLink} from "react-router";
import { Button} from "../../../../components/ui.jsx";
import { RiArrowRightLine, RiDoorOpenLine } from "@remixicon/react";
import useLoginForm from "../../hooks/useLoginForm.jsx";

export default function LoginForm() {
  const { register, handleSubmit, errors, loginFormSubmit} = useLoginForm();
  
  return (
    <>
      <div
        className="
          onboarding-symbol place-items-center [border:1px_solid_#e2daeb] bg-[white] rounded-[11px] text-[#8c79a5]
          mb-[21px] shadow-[0_3px_6px_#34234404] [&_i]:text-[21px] max-[640px]:hidden p-2 w-min
        "
      >
        <RiDoorOpenLine size={40} />
      </div>

      <span className="eyebrow text-[8px] font-bold tracking-[1.5px] text-[#90909c] block mb-[10px] max-[700px]:text-[7px] ">
        GOOD TO HAVE YOU BACK
      </span>

      <h2>Welcome back.</h2>

      <p>Sign in and pick up where you left off.</p>

      <nav
        className="
         onboarding-options flex p-[4px] bg-[#f0edf4] [border:1px_solid_#e7e1ed] rounded-[7px] my-[23px] mx-0
         [&_a]:w-[50%] [&_a]:text-center [&_a]:p-[9px] [&_a]:text-[11px] [&_a]:rounded-[5px] [&_a]:text-[#8a7a9a]
         [&_.selected]:bg-[white] [&_.selected]:shadow-[0_2px_4px_#35214808] [&_.selected]:text-[#70568d]
         [&_.selected]:font-[650] max-[640px]:my-[20px] max-[640px]:mx-0
       "
        aria-label="Account options"
      >
        <NavLink to="/auth/login" className="selected">
          Log in
        </NavLink>

        <NavLink to="/auth/" end>
          Register
        </NavLink>
      </nav>

      <form
        onSubmit={handleSubmit(loginFormSubmit, (errors) =>
          console.log(errors),
        )}
      >
        <div
          className="onboarding-fields flex flex-col gap-[17px]"
          aria-label="Sign in details"
        >
          <label
            className="
        onboarding-field flex flex-col gap-[7px] [&_>_span]:text-[10px] [&_>_span]:font-semibold
         [&_input]:w-full [&_input]:[border:1px_solid_#dfd8e6] [&_input]:rounded-[6px]
        [&_input]:bg-[#fff] [&_input]:py-[12px] [&_input]:px-[13px] [&_input]:min-h-[42px] [&_input]:text-[11px]
        [&_input]:text-[#65556f] [&_input::placeholder]:text-[#a396ac]
      "
          >
            <span className="text-[#706079]">Email</span>

            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address format",
                },
              })}
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
            />
            {errors.email && (
              <span className="text-red-600">{errors.email.message}</span>
            )}
          </label>

          <label
            className="
        onboarding-field flex flex-col gap-[7px] [&_>_span]:text-[10px] [&_>_span]:font-semibold
        [&_input]:w-full [&_input]:[border:1px_solid_#dfd8e6] [&_input]:rounded-[6px]
        [&_input]:bg-[#fff] [&_input]:py-[12px] [&_input]:px-[13px] [&_input]:min-h-[42px] [&_input]:text-[11px]
        [&_input]:text-[#65556f] [&_input::placeholder]:text-[#a396ac] mb-5
      "
          >
            <span className="text-[#706079]">Password</span>

            <input
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message:
                    "Password must contain atleast one uppercase, lowercase, number and symbol and longer than 8 character",
                },
              })}
              type="password"
              name="password"
              placeholder="Enter your valid password"
              required
            />
            {errors.password && (
              <span className="text-red-600">{errors.password.message}</span>
            )}
          </label>
        </div>

        <Button
          type="submit"
          variant="primary"
          className="
            onboarding-submit [&.btn]:w-full [&.btn]:min-h-[43px] [&.btn]:text-[11px] [&.btn]:bg-[#756098]
            [&.btn]:border-[#756098] [&.btn:hover]:bg-[#634f83] flex gap-2
          "
        >
          Sign in <RiArrowRightLine />
        </Button>
      </form>
    </>
  );
}
