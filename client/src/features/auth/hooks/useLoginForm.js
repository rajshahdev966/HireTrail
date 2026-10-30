import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { postLoginApi } from "../api/authApi";
import { Bounce, toast } from "react-toastify";
import { addAuth } from "../state/authSlice";

const useLoginForm = ()=> {
    const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
  });


  const dispatch = useDispatch();

  const loginFormSubmit = async (data) => {
    const res = await postLoginApi(data);
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
    toast.success("User Logged In successfully")
    dispatch(addAuth({accessToken: res.accessToken, email: res.user.email}))
    reset();
  };


    return {
        register, handleSubmit, errors, loginFormSubmit
    }
}


export default useLoginForm;