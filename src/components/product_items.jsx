import React, { Component } from "react";
import Item from "./product_item";
import { Button } from "react-bootstrap";
import GroupButtonFilter from "./product_group-btn-filter";
import GroupeTotal from "./product_group_total";
// import CategoriesLarge from "./item_ctg_large";

class Items extends Component {
  state = {
    count: 0,
    test00: 0,
    test000: "AAA",
    carbondioxide: [
      { key: 90, name: "All", value: "All" },
      { key: 91, name: "Still Water", value: "Still Water" },
      { key: 92, name: "Sparkling Water", value: "Sparkling Water" },
    ],
    brands: [
      {
        key: 0,
        name: "Evian",
        price: "1.53€",
        category: "Still Water",
        // imageUrl: "https://picsum.photos/id/100/200/200/?blur=1&grayscale",
        imageUrl:
          "https://prod.isg.bruneau.media/OMM/Images_Basse_Definition/ZoomHD/70/10/52/701052.jpg?width=2000&height=2000&mode=Default&quality=85&scale=upscalecanvas",
      },
      {
        key: 1,
        name: "Volvic",
        price: "1.47€",
        category: "Still Water",
        // imageUrl: "https://picsum.photos/id/101/200/?blur=1&grayscale",
        imageUrl:
          "https://www.evianchezvous.com/media/catalog/product/cache/1/image/788x/9df78eab33525d08d6e5fb8d27136e95/b/o/bottle_easy_pack_1_5l_fr_3.png",
      },
      {
        key: 2,
        name: "Badoit",
        price: "1.58€",
        category: "Sparkling Water",
        imageUrl:
          "https://prod.isg.bruneau.media/OMM/Images_Basse_Definition/ZoomHD/70/10/53/701053.jpg?width=2000&height=2000&mode=Default&quality=85&scale=upscalecanvas",
      },
      {
        key: 3,
        name: "Vittel",
        price: "1.41€",
        category: "Still Water",
        imageUrl:
          "https://souriredessaveurs.com/3747-medium_default/eau-vittel-bouteille-plastique-pet-15-l.jpg",
      },
      {
        key: 4,
        name: "Vichy",
        price: "1.62€",
        category: "Sparkling Water",
        imageUrl:
          "https://drhmarket.com/15486-thickbox_default/bouteille-125l-eau-gazeuse-vichy-celestins.jpg",
      },
      {
        key: 5,
        name: "San Pelegrino",
        category: "Sparkling Water",
        price: "1.59€",
        imageUrl:
          "https://www.staples.fr/content/images/product/41325-00H_1_xnl.jpg",
      },
      {
        key: 6,
        name: "Contrex",
        price: "1.43€",
        category: "Still Water",
        imageUrl:
          "https://prod.isg.bruneau.media/OMM/Images_Basse_Definition/ZoomHD/15/55/15559.jpg?width=2000&height=2000&mode=Default&quality=85&scale=upscalecanvas",
      },
      {
        key: 7,
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
        {/* <CategoriesLarge /> */}
        <div className="items">
          {/* {this.state.brands.map((id) => (
            <Item
              dataImg={id.imageUrl}
              dataText={id.name}
              dataPrice={id.price}
            />
          ))} */}
          {this.state.filterBrands.map((id, brands) => (
            <Item
              key={id.key}
              dataImg={id.imageUrl}
              dataText={id.name}
              dataPrice={id.price}
              dateTest00={this.state.test00}
            />
          ))}
          {/* <ListComponent myList={myList} />, */}
          {/* <FilterNames names={names} /> */}
        </div>

        <GroupeTotal
          filterBrands={this.state.filterBrands}
          test00={this.state.test00}
          brands={this.state.brands}
        />
      </div>
    );
  }
}

export default Items;

/////////
// const myList = ["apple", "orange", "strawberry", "blueberry", "avocado"];

// function ListComponent(props) {
//   const listItems = myList.map((item) => <li>{item}</li>);
//   return <ul>{listItems}</ul>;
// }

////////
// const names = ["James", "John", "Paul", "Ringo", "George"];

// function FilterNames(props) {
//   const test = names.filter((name) => name.includes("J"));
//   // .map((filteredName) => <li>{filteredName}</li>);
//   // console.log(test);
//   return <h1>{test}</h1>;
// }
