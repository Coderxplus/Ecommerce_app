import API from "./axiosSetup.js";


export const getProducts = () => API.get("/products/");
export const getProduct = (id) => API.get(`/products/${id}/`);





// getProducts().then(res => {
//   console.log(res.data);
// });