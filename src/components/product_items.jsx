import React, { Component } from "react";
import Item from "./product_item";
// import { Button } from "react-bootstrap";
import GroupButtonFilter from "./product_group-btn-filter";
import GroupeTotal from "./product_group_total";
// import CategoriesLarge from "./item_ctg_large";

class Items extends Component {
  state = {
    count: 0,
    test00: 0,
    test000: "AAA",
    carbondioxide: [
      { id: 90, name: "All", value: "All" },
      { id: 91, name: "Still Water", value: "Still Water" },
      { id: 92, name: "Sparkling Water", value: "Sparkling Water" },
    ],
    brands: [
      {
        id: 0,
        name: "Evian",
        price: "1.53€",
        category: "Still Water",
        // imageUrl: "https://picsum.photos/id/100/200/200/?blur=1&grayscale",
        imageUrl:
          "https://prod.isg.bruneau.media/OMM/Images_Basse_Definition/ZoomHD/70/10/52/701052.jpg?width=2000&height=2000&mode=Default&quality=85&scale=upscalecanvas",
      },
      {
        id: 1,
        name: "Volvic",
        price: "1.47€",
        category: "Still Water",
        // imageUrl: "https://picsum.photos/id/101/200/?blur=1&grayscale",
        imageUrl:
          "https://www.evianchezvous.com/media/catalog/product/cache/1/image/788x/9df78eab33525d08d6e5fb8d27136e95/b/o/bottle_easy_pack_1_5l_fr_3.png",
      },
      {
        id: 2,
        name: "Badoit",
        price: "1.58€",
        category: "Sparkling Water",
        imageUrl:
          "https://prod.isg.bruneau.media/OMM/Images_Basse_Definition/ZoomHD/70/10/53/701053.jpg?width=2000&height=2000&mode=Default&quality=85&scale=upscalecanvas",
      },
      {
        id: 3,
        name: "Vittel",
        price: "1.41€",
        category: "Still Water",
        imageUrl:
          "https://souriredessaveurs.com/3747-medium_default/eau-vittel-bouteille-plastique-pet-15-l.jpg",
      },
      {
        id: 4,
        name: "Vichy",
        price: "1.62€",
        category: "Sparkling Water",
        imageUrl:
          "https://drhmarket.com/15486-thickbox_default/bouteille-125l-eau-gazeuse-vichy-celestins.jpg",
      },
      {
        id: 5,
        name: "San Pelegrino",
        category: "Sparkling Water",
        price: "1.59€",
        imageUrl:
          "https://www.staples.fr/content/images/product/41325-00H_1_xnl.jpg",
      },
      {
        id: 6,
        name: "Contrex",
        price: "1.43€",
        category: "Still Water",
        imageUrl:
          "https://prod.isg.bruneau.media/OMM/Images_Basse_Definition/ZoomHD/15/55/15559.jpg?width=2000&height=2000&mode=Default&quality=85&scale=upscalecanvas",
      },
      {
        id: 7,
        name: "Mont Blanc",
        price: "1.55€",
        category: "Still Water",
        imageUrl:
          "https://shop.cabf.eu/wp-content/uploads/2017/05/8024884600301_001.jpg",
      },
    ],
    filterBrands: [],
  };

  componentDidMount() {
    this.setState({
      filterBrands: this.state.brands,
    });
  }

  handleClick = (name) => {
    let filterBrands = [];
    if (name === "All") {
      filterBrands = this.state.brands;
    } else {
      filterBrands = this.state.brands.filter(
        (brands) => brands.category === name
      );
    }
    this.setState({ filterBrands });
  };

  render() {
    return (
      <div className="ctg-flex">
        <GroupButtonFilter
          carbondioxide={this.state.carbondioxide}
          onClickChild={this.handleClick}
        />

        <div className="items">
          {this.state.filterBrands.map((id, brands) => (
            <Item
              // key={id.key}
              key={brands}
              dataImg={id.imageUrl}
              dataText={id.name}
              dataPrice={id.price}
              dateTest00={this.state.test00}
            />
          ))}
        </div>

        <GroupeTotal
          filterBrands={this.state.filterBrands}
          brands={this.state.brands}
        />
      </div>
    );
  }
}

export default Items;
