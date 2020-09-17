import React, { Component } from "react";
import Item from "./product_item";
import { Button } from "react-bootstrap";
// import CategoriesLarge from "./item_ctg_large";

const buttons = [
  { name: "All", value: "All" },
  { name: "Still Water", value: "Still Water" },
  { name: "Sparkling Water", value: "Sparkling Water" },
  // { name: "Premium Water", value: "Premium Water" },
];

class Items extends Component {
  state = {
    count: 0,
    test00: 0,
    test000: "AAA",
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

  img_properties = {
    display: "block",
    margin: "auto",
    imageUrl: "https://picsum.photos/200/?blur=1",
  };

  render() {
    // const renderAll = this.state.filterBrands.map((brands) => (
    //   <li key={brands.name}>{brands.name}</li>
    // ));

    return (
      <div className="ctg-flex">
        <div className="group-button">
          {buttons.map(({ name, value }) => (
            <Button
              className="btn btn-light btn-outline-secondary"
              // aria-pressed="false"
              // active
              key={name}
              value={value}
              onClick={this.handleClick.bind(this, name)} //filterBrands onclick
            >
              {name}
            </Button>
          ))}
          {/* <p>Coffee: {renderAll}</p> */}
          {/* <h2>{this.state.filterBrands.length}</h2> */}
        </div>

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
              dataImg={id.imageUrl}
              dataText={id.name}
              dataPrice={id.price}
              dateTest00={this.state.test00}
            />
          ))}
          {/* <ListComponent myList={myList} />, */}
          {/* <FilterNames names={names} /> */}
        </div>

        <div className="group-total">
          <span className="badge badge-secondary">
            <h6>
              Total filterBrands : <br />
              {this.state.filterBrands.length}
            </h6>
            {/* <h4>{this.props.totalCounters}</h4> */}
          </span>

          <span className="badge badge-info">
            <h6>
              totalCounters : <br />
              {this.state.brands.length}
              {/* {this.state.counters.filter((c) => c.value > 0).length} */}
            </h6>
          </span>
        </div>
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
