export const retrieveProductsCat = () => {
  return dispatch => {
    return fetch(
      `https://decath-product-api.herokuapp.com/categories`,
      {method: "GET"}
    )
    .then((response) => response.json())
    .then((resultCat) => {
      console.log(resultCat);
      dispatch({
        type:"CATEGORIES",
        categories:resultCat
      })
    })
    .catch((error) => {
      console.warn(error);
    });
  }
}
