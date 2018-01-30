// doit renvoyer un objet avec une liste de props

export function catalogActions(dispatch){
  return {
    retrieveCategories: () => {
      return fetch(
        `https://decath-product-api.herokuapp.com/categories`,
        {method: "GET"}
      )
      .then((response) => response.json())
      .then((resultCat) => {
        dispatch({
          type:"CATEGORIES",
          categories:resultCat
        })
      })
      .catch((error) => {
        console.warn(error);
      });
    },
    getProductsFromCategory: (idCat) => {
      return fetch(
        `https://decath-product-api.herokuapp.com/categories/${idCat}/products`,
        {method: "GET"}
      )
      .then((response) => response.json())
      .then((resultProds) => {
        dispatch({
          type:"PRODUCTS",
          products:resultProds
        })
      })
      .catch((error) => {
        console.warn(error);
      });
    },
    getProductDetails: (productId) => {
      console.log(productId);
      return fetch(
        `https://decath-product-api.herokuapp.com/products/${productId}`,
        {method: "GET"}
      )
      .then((response) => response.json())
      .then((resultProductDetails) => {
        dispatch({
          type:"PRODUCT_DETAILS",
          product:resultProductDetails
        })
      })
      .catch((error) => {
          console.warn(error);
        });
    },
    AddProductToCart: (product) => {
      dispatch({type:"ADD_PRODUCT",productsAddedToCart:product})
    }
  }
}
