import { isRejectedWithValue } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

// eslint-disable-next-line no-unused-vars
export const errorMiddleware = (_api) => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    // Не показуємо помилку для refreshUser, щоб не турбувати користувача
    if (action.type === "auth/refresh/rejected") {
      return next(action);
    }

    const message = action.payload || "Something went wrong";
    toast.error(message);
  }

  return next(action);
};
