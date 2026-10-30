import { Brand } from "../../../../shared/ui/components/Brand";
import { Button, Field } from "../../../../shared/ui/components/index";

export function ForgotPassword() {
  return (
    <div className="
      reset-page min-h-screen flex items-center justify-center flex-col gap-[40px] [&_h1]:text-[28px]
      [&_p:not(.form-notice)]:text-[11px] [&_p:not(.form-notice)]:text-[#a897b5]
      [&_p:not(.form-notice)]:[margin:15px_0_25px]
    ">
      <Brand />
      <div className="panel bg-[white] [border:1px_solid_#e6e7ed] rounded-[9px] min-w-[0] overflow-hidden ">
        <h1>A fresh start.</h1>
        <p>Enter your work email to request a password reset.</p>
        <Field label="Work email" type="email" placeholder="you@company.com" />
        <Button variant="primary" className="w-full mt-5">
          Send reset link
        </Button>
        <p className="form-notice block text-center text-[#b0a4bb] text-[8px] leading-[1.7] mt-[14px]">UI preview · No email will be sent.</p>
        <Button to="/login" className="w-full">
          Back to login
        </Button>
      </div>
    </div>
  );
}
