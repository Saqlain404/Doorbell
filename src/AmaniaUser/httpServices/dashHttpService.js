import appHttpService from "../adminHttpService";
import Swal from "sweetalert2";

export async function ProductList() {
  try {
    
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}user/product-list`
    );
    console.log(data);
    if (data?.error) {
      Swal.fire({
        title: data?.message,
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#014a7f",
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
        confirmButtonText: "Okay",
        confirmButtonColor: "#014a7f",
      });
    }
    return { error };
  }
}
export async function AddToCart(formData) {
  try {
    
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}user/add-to-carts`,formData
    );
    console.log(data);
    if (data?.error) {
      await localStorage.setItem("product_Id", data.results )
      Swal.fire({
        title: data?.message,
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#014a7f",
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
        confirmButtonText: "Okay",
        confirmButtonColor: "#014a7f",
      });
    }
    return { error };
  }
}
export async function RemoveCart(formData) {
  try {
    
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}user/remove-carts`,formData
    );
    console.log(data);
    if (data?.error) {
      Swal.fire({
        title: data?.message,
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#014a7f",
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
        confirmButtonText: "Okay",
        confirmButtonColor: "#014a7f",
      });
    }
    return { error };
  }
}
export async function CartList(formData) {
  try {
    
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}user/carts-list/${formData}`
    );
    console.log(data);
    if (data?.error) {
      Swal.fire({
        title: data?.message,
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#014a7f",
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
        confirmButtonText: "Okay",
        confirmButtonColor: "#014a7f",
      });
    }
    return { error };
  }
}
export async function CreateOrder(formData) {
  try {
    
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}user/create-order`,formData
    );
    console.log(data);
    if (!data?.error) {
      Swal.fire({
        title: "Order Created",
        icon: "success",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    if (data?.error) {
      Swal.fire({
        title: data?.message,
        icon: "error",
        confirmButtonText: "Okay",
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
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { error };
  }
}
export async function AddressList(formData) {
  try {
    
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}user/address-list/${formData}`
    );
    console.log(data);
    if (data?.error) {
      Swal.fire({
        title: data?.message,
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#014a7f",
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
        confirmButtonText: "Okay",
        confirmButtonColor: "#014a7f",
      });
    }
    return { error };
  }
}
