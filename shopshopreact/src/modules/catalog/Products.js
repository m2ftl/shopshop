import React, { Component } from 'react';
import { connect } from "react-redux";
import '../../App.css';
import { catalogActions } from "../../store/catalog/actions";
import { getCatalog } from "../../store/catalog/selectors";
import { Link } from "react-router-dom";


class Products extends Component {

  render() {

    let listPrdsDisplay = this.props.products.map((product) => {
    return (<div class="card imgcard float-left" key={product.id}>
      <Link to={'/product/'+product.id}>
      <img class="card-img-top" alt={product.title} src={"https://www.decathlon.fr/media/"+product.image_path} />
      </Link>
      <div class="card-body">
        <h5 class="card-title">{product.title}</h5>
        <h6 class="card-title">{product.min_price}€ </h6>
        <Link to={'/product/'+product.id}>
          <button className="btn btn-link" onClick={() => this.props.getProductDetails(product.id)}>View Details</button>
        </Link>
        <button className="btn btn-success" onClick={() => this.props.AddProductToCart(product)}>Add to cart</button>
      </div>
    </div>);
  });

    console.log(listPrdsDisplay.length);
    if (listPrdsDisplay.length===0) {
    return (
      <div class="container-fluid">
        <div class="row justify-content-md-center">
          <h1 class="col-md-auto topWeekTitle">
            <span class="glyphicon glyphicon-star-empty"></span>
            OUR TOP PRODUCTS OF THE WEEK
            <span class="glyphicon glyphicon-star-empty"></span>
          </h1>
        </div>
        <div class="row mt-2">
        <div class="col-sm productsWeek">
          <Link to={'/product/00136d62-8886-45be-aa7e-8bea958762cf'}>
          <img onClick={() => this.props.getProductDetails("00136d62-8886-45be-aa7e-8bea958762cf")} src={"https://www.decathlon.fr/media/837/8371657/zoom_8ff19b016611495d8520c2bb59050d54.jpg"} className="img-thumbnail" alt={"MID WARM 100 FEMME   NOIR P"}/>
          </Link>
        </div>
        <div class="col-sm productsWeek">
          <Link to={'/product/1ee03ec3-3b62-4b15-b8d8-68f016c2d33a'}>
          <img onClick={() => this.props.getProductDetails("1ee03ec3-3b62-4b15-b8d8-68f016c2d33a")} src={"https://www.decathlon.fr/media/828/8284895/zoom_c1c750df1db34740b8e5765598d69727.jpg"} className="img-thumbnail" alt={"MID WARM 100 FEMME   NOIR P"}/>
          </Link>
        </div>
        <div class="col-sm productsWeek">
          <Link to={'/product/01a471ef-4266-4fef-8f66-a350643a5189'}>
          <img onClick={() => this.props.getProductDetails("01a471ef-4266-4fef-8f66-a350643a5189")} src={"https://www.decathlon.fr/media/837/8372610/zoom_cf542e69-f285-495a-8748-4dcc070fe8a8.jpg"} className="img-thumbnail" alt={"MID WARM 100 FEMME   NOIR P"}/>
          </Link>
        </div>
        </div>
        <div class="row mt-2">
        <div class="col-sm productsWeek">
          <Link to={'/product/df5cd43a-edf1-4c02-b237-c6c4d66a7b86'}>
          <img onClick={() => this.props.getProductDetails("df5cd43a-edf1-4c02-b237-c6c4d66a7b86")} src={"https://www.decathlon.fr/media/834/8343167/zoom_79377785093442e8bbbbc826ac1721dd.jpg"} className="img-thumbnail" alt={"MID WARM 100 FEMME   NOIR P"}/>
          </Link>
        </div>
        <div class="col-sm productsWeek">
          <Link to={'/product/177eef3f-fa1f-429a-9e2a-92057600c4f7'}>
          <img onClick={() => this.props.getProductDetails("177eef3f-fa1f-429a-9e2a-92057600c4f7")} src={"https://www.decathlon.fr/media/837/8370050/zoom_69f8c6a3-c591-42a4-812f-cb8ad101a986.jpg"} className="img-thumbnail" alt={"MID WARM 100 FEMME   NOIR P"}/>
          </Link>
        </div>
        <div class="col-sm productsWeek">
          <Link to={'/product/062a474b-4039-4178-97c9-ab2f0e735b45'}>
          <img onClick={() => this.props.getProductDetails("062a474b-4039-4178-97c9-ab2f0e735b45")} src={"https://www.decathlon.fr/media/837/8371428/zoom_b07272427c3d47a9acce38ab3d34c901.jpg"} className="img-thumbnail" alt={"MID WARM 100 FEMME   NOIR P"}/>
          </Link>
        </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="listProducts ml-3 mt-5">
        <h1>Products List</h1>
         <div className="container2">{listPrdsDisplay}
         </div>
      </div>
    );
  }
  }
}

export default connect(getCatalog, catalogActions)(Products);
