import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { postRegisterApi } from "../api/authApi";
import { Bounce, toast } from "react-toastify";
import { addAuth } from "../state/authSlice";

const useRegisterForm = ()=> {


    const {register, handleSubmit, formState: {errors}, reset} = useForm()

  const dispatch = useDispatch();

  const registerFormSubmit = async (data)=> {
    const res = await postRegisterApi(data);
    if (!res) {
      toast.error("Error in login Api", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }

    dispatch(addAuth({email: res.user.email, accessToken: res.accessToken}))
    toast.success("User Registered successfully");
    reset()


  }


    return {
        register, handleSubmit, errors, registerFormSubmit
    }
}

export default useRegisterForm;