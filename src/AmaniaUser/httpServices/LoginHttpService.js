import appHttpService from "../adminHttpService";
import Swal from "sweetalert2";

export async function userLogin(formData) {


  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}user/user-login`,
      formData
    );
    console.log(data);

    if (!data.error) {
      await localStorage.removeItem("token-user");
      await localStorage.setItem("token-user", data.results.token);
      await localStorage.setItem("user_id", data.results.verifyUser?._id);
      await localStorage.setItem(
        "token-user-data",
        JSON.stringify(data.results.verify)
      );
      Swal.fire({
        title: data?.message,
        icon: "success",
        confirmButtonColor: "#e25829",

        confirmButtonText: "Ok",
      });
    } else {
      Swal.fire({
        title: data?.message,
        icon: "error",
        confirmButtonText: "Ok",
        confirmButtonColor: "#e25829",
      });
    }

    return { data };
  } catch (error) {
    if (error.response) { 
          
      
      console.log(error?.response);
      Swal.fire({
        title: error.response.data.message,
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { error };
  }
}
export async function userRegisteration(formData) {


  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}user/register-user`,
      formData
    );
    console.log(data);

    if (!data.error) {
      await localStorage.removeItem("token-user");
      await localStorage.setItem("token-user", data.results.token);
      await localStorage.setItem(
        "token-user-data",
        JSON.stringify(data.results.verify)
      );
      Swal.fire({
        title: data?.message,
        icon: "success",
        confirmButtonColor: "#e25829",

        confirmButtonText: "Ok",
      });
    } else {
      Swal.fire({
        title: data?.message,
        icon: "error",
        confirmButtonText: "Ok",
        confirmButtonColor: "#e25829",
      });
    }

    return { data };
  } catch (error) {
    if (error.response) { 
          
      
      console.log(error?.response);
      Swal.fire({
        title: error.response.data.message,
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { error };
  }
}
export async function userForgotPass(formData) {
  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}user/send-Email`,
      formData
    );
    console.log(data);
    if (!data.error) {
      Swal.fire({
        title: data?.message,
        icon: "success",
        confirmButtonText: "Ok",
        confirmButtonColor: "#e25829",
      });
    } else {
      Swal.fire({
        title: data?.message,
        icon: "error",
        confirmButtonText: "Ok",
        confirmButtonColor: "#e25829",
      });
    }

    return { data };
  } catch (error) {
    if (error.response) {
      console.log(error?.response);
      Swal.fire({
        title: "Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Ok",
        confirmButtonColor: "#e25829",
      });
    }
    return { error };
  }
}
export async function userVerifyOtp(formData) {
  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}user/verify-otp`,
      formData
    );
    console.log(data);
    if (!data.error) {
      Swal.fire({
        title: data?.message,
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#e25829",
      });
    } else {
      Swal.fire({
        title: data?.message,
        icon: "error",
        confirmButtonText: "Ok",
        confirmButtonColor: "#e25829",
      });
    }

    return { data };
  } catch (error) {
    if (error.response) {
      console.log(error?.response);
      Swal.fire({
        title: "Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Ok",
        confirmButtonColor: "#e25829",
      });
    }
    return { error };
  }
}