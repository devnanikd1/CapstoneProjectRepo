
export const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const result = await response.json();
      console.log(result);
      return result;
    } catch (err) {
      console.error(err);
    }
  };
  
export const fetchSingleProduct = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products/1');
      const result = await response.json();
      console.log(result);
      return result;
    } catch (err) {
      console.error(err);
    }
  }; 