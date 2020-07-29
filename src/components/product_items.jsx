import React, { Component } from "react";
import Item from "./product_item";
import CategoriesLarge from "./item_ctg_large";

class Items extends Component {
  state = {
    count: 0,
    tags: ["0Evian", "0Badoit", "0Volvic", "0Vichy"],
    brands: [
      {
        id: 0,
        name: "Evian",
        price: "1.53€",
        // imageUrl: "https://picsum.photos/id/100/200/200/?blur=1&grayscale",
        imageUrl:
          "https://prod.isg.bruneau.media/OMM/Images_Basse_Definition/ZoomHD/70/10/52/701052.jpg?width=2000&height=2000&mode=Default&quality=85&scale=upscalecanvas",
      },
      {
        id: 1,
        name: "Volvic",
        price: "1.47€",
        // imageUrl: "https://picsum.photos/id/101/200/?blur=1&grayscale",
        imageUrl:
          "https://www.evianchezvous.com/media/catalog/product/cache/1/image/788x/9df78eab33525d08d6e5fb8d27136e95/b/o/bottle_easy_pack_1_5l_fr_3.png",
      },
      {
        id: 2,
        name: "Badoit",
        price: "1.58€",
        imageUrl:
          "https://prod.isg.bruneau.media/OMM/Images_Basse_Definition/ZoomHD/70/10/53/701053.jpg?width=2000&height=2000&mode=Default&quality=85&scale=upscalecanvas",
      },
      {
        id: 3,
        name: "Vittel",
        price: "1.41€",
        imageUrl:
          "https://souriredessaveurs.com/3747-medium_default/eau-vittel-bouteille-plastique-pet-15-l.jpg",
      },
      {
        id: 4,
        name: "Vichy",
        price: "1.62€",
        imageUrl:
          "https://drhmarket.com/15486-thickbox_default/bouteille-125l-eau-gazeuse-vichy-celestins.jpg",
      },
      {
        id: 5,
        name: "San Pelegrino",
        price: "1.59€",
        imageUrl:
          "https://www.staples.fr/content/images/product/41325-00H_1_xnl.jpg",
      },
      {
        id: 6,
        name: "Contrex",
        price: "1.43€",
        imageUrl:
          "https://prod.isg.bruneau.media/OMM/Images_Basse_Definition/ZoomHD/15/55/15559.jpg?width=2000&height=2000&mode=Default&quality=85&scale=upscalecanvas",
      },
      {
        id: 7,
        name: "Mont Blanc",
        price: "1.55€",
        imageUrl:
          "https://shop.cabf.eu/wp-content/uploads/2017/05/8024884600301_001.jpg",
      },
    ],
  };

  img_properties = {
    // border: "1px dashed #89A894",
    display: "block",
    margin: "auto",
    imageUrl: "https://picsum.photos/200/?blur=1",
  };

  render() {
    return (
      <div className="ctg_flex">
        <CategoriesLarge></CategoriesLarge>
        <div className="items">
          {this.state.brands.map((id) => (
            <Item
              dataImg={id.imageUrl}
              dataText={id.name}
              dataPrice={id.price}
            />
          ))}
          {/* <ListComponent myList={myList} />, */}
        </div>
      </div>
    );
  }
}

export default Items;

///////////
// const myList = ["apple", "orange", "strawberry", "blueberry", "avocado"];

// function ListComponent(props) {
//   const listItems = myList.map((item) => <li>{item}</li>);
//   return <ul>{listItems}</ul>;
// }
