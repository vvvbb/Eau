import React, { Component } from "react";
import Item from "./product_item";
// import Counters from "./counters";

// import { Button } from "react-bootstrap";
import GroupButtonFilter from "./product_group-btn-filter";
import GroupeTotal from "./product_group_total";
// import CategoriesLarge from "./item_ctg_large";

class Items extends Component {
  constructor(props) {
    super(props);
    this.state.unique = 0;
  }

  state = {
    count: 0,
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
        value: 1,
        // imageUrl: "https://picsum.photos/id/100/200/200/?blur=1&grayscale",
        imageUrl:
          "https://prod.isg.bruneau.media/OMM/Images_Basse_Definition/ZoomHD/70/10/52/701052.jpg?width=2000&height=2000&mode=Default&quality=85&scale=upscalecanvas",
      },
      {
        id: 1,
        name: "Volvic",
        price: "1.47€",
        category: "Still Water",
        value: 0,
        // imageUrl: "https://picsum.photos/id/101/200/?blur=1&grayscale",
        imageUrl:
          "https://www.evianchezvous.com/media/catalog/product/cache/1/image/788x/9df78eab33525d08d6e5fb8d27136e95/b/o/bottle_easy_pack_1_5l_fr_3.png",
      },
      {
        id: 2,
        name: "Badoit",
        price: "1.58€",
        category: "Sparkling Water",
        value: 2,
        imageUrl:
          "https://prod.isg.bruneau.media/OMM/Images_Basse_Definition/ZoomHD/70/10/53/701053.jpg?width=2000&height=2000&mode=Default&quality=85&scale=upscalecanvas",
      },
      {
        id: 3,
        name: "Vittel",
        price: "1.41€",
        category: "Still Water",
        value: 0,
        imageUrl:
          "https://souriredessaveurs.com/3747-medium_default/eau-vittel-bouteille-plastique-pet-15-l.jpg",
      },
      {
        id: 4,
        name: "Vichy",
        price: "1.62€",
        category: "Sparkling Water",
        value: 10,
        imageUrl:
          "https://drhmarket.com/15486-thickbox_default/bouteille-125l-eau-gazeuse-vichy-celestins.jpg",
      },
      {
        id: 5,
        name: "San Pelegrino",
        price: "1.59€",
        category: "Sparkling Water",
        value: 11,
        imageUrl:
          "https://www.staples.fr/content/images/product/41325-00H_1_xnl.jpg",
      },
      {
        id: 6,
        name: "Contrex",
        price: "1.43€",
        category: "Still Water",
        value: 12,
        imageUrl:
          "https://prod.isg.bruneau.media/OMM/Images_Basse_Definition/ZoomHD/15/55/15559.jpg?width=2000&height=2000&mode=Default&quality=85&scale=upscalecanvas",
      },
      {
        id: 7,
        name: "Mont Blanc",
        price: "1.55€",
        category: "Still Water",
        value: 13,
        imageUrl:
          "https://shop.cabf.eu/wp-content/uploads/2017/05/8024884600301_001.jpg",
      },
    ],
    // counters: [
    //   { id: 1, value: 31 },
    //   { id: 2, value: 32 },
    //   { id: 3, value: 33 },
    //   { id: 4, value: 34 },
    // ],
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

  addToCart = (counter) => {
    console.log("addToCart DONE");
    this.setState(({ unique }) => ({
      unique: unique + 1,
    }));
  };

  handleIncrement = (counter) => {
    console.log("handleIncrement DONE LAPIN POIRE");
    // console.log(counter.value);
    const counters = [...this.state.brands];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    // counters[index].value++;
    counter.value++;
    // console.log(counter.value);
    this.setState({ counters });
  };

  handleDecrease = (counter) => {
    console.log("handleDecrease DONE");
    const counters = [...this.state.brands];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counter.value--;
    this.setState({ counters });
  };

  render() {
    return (
      <div className="ctg-flex">
        <GroupButtonFilter
          carbondioxide={this.state.carbondioxide}
          onClickChild={this.handleClick}
        />

        <div className="items">
          {/* {this.state.filterBrands.map((id, brands) => (  */}
          {/* {this.state.filterBrands.map((item, key) => ( */}
          {this.state.brands.map((item, key) => (
            <Item
              key={key}
              id={key}
              test={key}
              item={item}
              dataImg={item.imageUrl}
              dataText={item.name}
              dataPrice={item.price}
              onClickaddToCart={this.addToCart}
              onIncrement={this.handleIncrement}
              onDecrease={this.handleDecrease}
              brands={this.state.brands}
            />
          ))}
          {/* <Counters
            key={this.state.counters.id}
            // counters={this.state.counters}
            onIncrement={this.state.onIncrement}
            onDecrease={this.state.onDecrease}
            // unique={this.state.unique}
            brands={this.state.brands}
          /> */}
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
