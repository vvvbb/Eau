import React, { Component } from "react";
import Item from "./product_item";

class Items extends Component {
  state = {
    count: 0,
    tags: ["0Evian", "0Badoit", "0Volvic", "0Vichy"],
    brands: [
      {
        id: 0,
        name: "Evian",
        imageUrl: "https://picsum.photos/id/100/200/?blur=1&grayscale",
      },
      {
        id: 1,
        name: "Volvic",
        imageUrl: "https://picsum.photos/id/101/200/?blur=1&grayscale",
      },
      {
        id: 2,
        name: "Badoit",
        imageUrl: "https://picsum.photos/id/102/200/?blur=1&grayscale",
      },
      {
        id: 3,
        name: "Coca",
        imageUrl: "https://picsum.photos/id/103/200/?blur=1&grayscale",
      },
      {
        id: 4,
        name: "Vichy",
        imageUrl: "https://picsum.photos/id/104/200/?blur=1&grayscale",
      },
      {
        id: 5,
        name: "San Pelegrino",
        imageUrl: "https://picsum.photos/id/299/200/?blur=1&grayscale",
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
      <div className="items">
        {this.state.brands.map((id) => (
          <Item dataImg={id.imageUrl} dataText={id.name} />
        ))}
        <ListComponent myList={myList} />,
      </div>
    );
  }
}

export default Items;

///////////
const myList = ["apple", "orange", "strawberry", "blueberry", "avocado"];

function ListComponent(props) {
  const listItems = myList.map((item) => <li>{item}</li>);
  return <ul>{listItems}</ul>;
}
