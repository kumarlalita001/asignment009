import Swal from "sweetalert2";

export const errorToast = (message) => {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: message,
  });
};
