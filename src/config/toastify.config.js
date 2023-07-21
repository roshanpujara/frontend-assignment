import { toast } from "react-toastify";
const config = {
  position: "bottom-right",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
};
export const successToast = (message) => {
  toast.success(message, config);
};
export const warningToast = (message) => {
  toast.warning(message, config);
};
export const errorToast = (message) => {
  toast.error(message, config);
};
