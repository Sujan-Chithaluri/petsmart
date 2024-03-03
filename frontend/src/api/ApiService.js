import axios from "axios";

export const loginUser = (user) =>
  axios.post("http://localhost:3001/loginUser", user);

export const registerUser = (user) =>
  axios.post("http://localhost:3001/registerUser", user);

export const saveOrder = (orderDetail) =>
  axios.post("http://localhost:3001/saveOrder", orderDetail);

export const getAllOrdersForUser = (id) =>
  axios.get(`http://localhost:3001/getOrders/${id}`);

export const saveAppointment = (appointmentDetail) =>
  axios.post("http://localhost:3001/saveAppointment", appointmentDetail);

export const getAllAppointments = (id) =>
  axios.get(`http://localhost:3001/getAppointments/${id}`);

export const saveCart = (cart) =>
  axios.post("http://localhost:3001/saveCart", cart);

export const getCart = (userId) =>
  axios.get(`http://localhost:3001/getCart/${userId}`);

export const updatePassword = (user) =>
  axios.post("http://localhost:3001/updatePassword", user);

export const sendOtp = (email) =>
  axios.get(`http://localhost:3001/sendOtp/${email}`);
