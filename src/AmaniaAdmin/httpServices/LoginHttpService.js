import appHttpService from "../adminHttpService";
import Swal from "sweetalert2";

export async function adminLogin(formData) {
  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}admin/admin-login`,
      formData
    );
    console.log(data);

    if (!data.error) {
      await localStorage.removeItem("token-admin");
      await localStorage.setItem("token-admin", data.results.token);
      await localStorage.setItem(
        "token-admin-data",
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
export async function adminForgotPass(formData) {
  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}admin/send-mail`,
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
export async function adminVerifyOtp(formData) {
  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}admin/otp-verify`,
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
export async function adminResetPassword(formData) {
  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}admin/admin-resetPassword`,
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

export async function adminUpdatePassword(formData) {
  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/changePassword`,
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
