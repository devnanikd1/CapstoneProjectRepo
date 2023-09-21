export const fetchProducts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const fetchSingleProduct = async (id) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const fetchProductsLimit = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products?limit=5");
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const fetchProductsSort = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products?sort=desc");
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const fetchCategories = async () => {
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const fetchSpecificCategoryJewelery = async () => {
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products/category/jewelery"
    );
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const fetchAddNewProduct = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const fetchUpdateProduct = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products/7");
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const fetchDeleteProduct = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products/6");
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const fetchCart = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/carts");
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const fetchSingleCart = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/carts/5");
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const fetchLimitResult = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/carts?limit=5");
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const fetchSortResult = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/carts?sort=desc");
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const fetchGetCartsInDateRange = async () => {
  try {
    const response = await fetch(
      "https://fakestoreapi.com/carts?startdate=2019-12-10&enddate=2020-10-10"
    );
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const fetchGetUserCarts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/carts/user/2");
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const fetchAddNewProductToTheCart = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/carts");
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const fetchUpdateProductInTheCart = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/carts/7");
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const fetchDeleteProductInTheCart = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/carts/6");
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const fetchGetAllUsers = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/users");
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const fetchGetSinglelUser = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/users/1");
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const fetchGetUsersLimit = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/users?limit=5");
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const fetchGetUsersSort = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/users?sort=desc");
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const fetchGetAddNewUser = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/users");
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const fetchPutUpdateNewUser = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/users/7");
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const fetchDeleteUser = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/users/7");
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};
