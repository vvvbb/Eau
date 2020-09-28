import React, { Component } from "react";
import Item from "./product_item";
// import Counters from "./counters";

// import { Button } from "react-bootstrap";
import GroupButtonFilter from "./product_group-btn-filter";
import GroupeTotal from "./product_group_total";
// import CategoriesLarge from "./item_ctg_large";

class Items extends Component {
  state = {
    carbondioxide: [
      { id: 90, name: "All", value: "All" },
      { id: 91, name: "Still Water", value: "Still Water" },
      { id: 92, name: "Sparkling Water", value: "Sparkling Water" },
    ],
    brands: [
      {
        id: 0,
        name: "Evian",
        catchphrase: "Déclarée source de jeunesse par votre corps",
        description:
          "Une eau filtrée au sein des roches glaciaires pendant 15 ans, et acquiert sa composition minérale unique avant d'atteindre sa source.",
        year: "",
        price: "1.53€",
        category: "Still Water",
        value: 0,
        // imageUrl: "https://picsum.photos/id/100/200/200/?blur=1&grayscale",
        imageUrl:
          "https://prod.isg.bruneau.media/OMM/Images_Basse_Definition/ZoomHD/70/10/52/701052.jpg?width=2000&height=2000&mode=Default&quality=85&scale=upscalecanvas",
      },
      {
        id: 1,
        name: "Volvic",
        catchphrase: "Une eau qui prend sa source au coeur des volcans.",
        description:
          "Ce sont la nature et le temps qui donnent à Volvic son goût volcanique incomparable. Pendant près de cinq ans, l’eau s’infiltre progressivement à travers six couches de roches volcaniques : c’est ce qui lui donne sa composition minérale si particulière.",
        year: "",
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
        catchphrase: "Créée par la Nature, protégée par l'Homme.",
        description:
          "Naturellement gazeuse adaptée à la consommation quotidienne. Originaire du terroir de Saint-Galmier, dans le Massif Central. C’est une eau gazeuse moyennement minéralisée, calcique, magnésienne et bicarbonatée.",
        year: "",
        price: "1.58€",
        category: "Sparkling Water",
        value: 0,
        imageUrl:
          "https://prod.isg.bruneau.media/OMM/Images_Basse_Definition/ZoomHD/70/10/53/701053.jpg?width=2000&height=2000&mode=Default&quality=85&scale=upscalecanvas",
      },
      {
        id: 3,
        name: "Vittel",
        catchphrase: "Peut-on boire autre chose que Vittel ?",
        description:
          "Vittel est une eau minérale naturelle sulfatée calcique adaptée à la consommation quotidienne et originaire des Vosges.",
        year: "1854",
        price: "1.41€",
        category: "Still Water",
        value: 0,
        imageUrl:
          "https://souriredessaveurs.com/3747-medium_default/eau-vittel-bouteille-plastique-pet-15-l.jpg",
      },
      {
        id: 4,
        name: "Vichy",
        catchphrase: "Pour un repas festif.",
        description:
          "Elle prend sa source dans la chaîne des Puys en Auvergne. Vichy Célestins est une eau gazeuse fortement minéralisée, avec un apport en sels minéraux et particulièrement riche en bicarbonate. A ce titre, elle est efficace pour soulager les brûlures gastriques.",
        year: "",
        price: "1.62€",
        category: "Sparkling Water",
        value: 0,
        imageUrl:
          "https://drhmarket.com/15486-thickbox_default/bouteille-125l-eau-gazeuse-vichy-celestins.jpg",
      },
      {
        id: 5,
        name: "San Pelegrino",
        catchphrase: "Explore Itineraries of Taste.",
        description:
          "Sa source jaillit au cœur des Alpes italiennes. San Pellegrino est une eau minérale gazeuse. Elle peut être qualifiée de moyennement minéralisée, avec un apport en sels minéraux de 915 mg/L. San Pellegrino est calcique, magnésienne et sulfatée.",
        year: "",
        price: "1.59€",
        category: "Sparkling Water",
        value: 0,
        imageUrl:
          "https://www.staples.fr/content/images/product/41325-00H_1_xnl.jpg",
      },
      {
        id: 6,
        name: "Contrex",
        catchphrase: "Pour le calcium et le magnésium.",
        description:
          "Sa source se trouve à Contrexéville, dans le bassin des Vosges. Contrex compte parmi les eaux plates fortement minéralisées. Elle est dite calcique, magnésienne et sulfatée, elle est en revanche pauvre en sodium.",
        year: "",
        price: "1.43€",
        category: "Still Water",
        value: 0,
        imageUrl:
          "https://prod.isg.bruneau.media/OMM/Images_Basse_Definition/ZoomHD/15/55/15559.jpg?width=2000&height=2000&mode=Default&quality=85&scale=upscalecanvas",
      },
      {
        id: 7,
        name: "Mont Blanc",
        catchphrase: "L'eau prend sa source, au coeur des neiges éternelles.",
        description:
          "Parce qu'elle est filtrée naturellement par les roches vierges du massif cristallin qu'elle traverse, l'eau Mont Blanc est exceptionnelle de pureté. Equilibrée en oligo-éléments essentiels, l'eau minérale naturelle Mont Blanc figure parmi les eaux les plus faiblement minéralisées qui existent.",
        year: "",
        price: "1.55€",
        category: "Still Water",
        value: 0,
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
          {this.state.filterBrands.map((item, key) => (
            // {this.state.brands.map((item, key) => (
            <Item
              key={key}
              item={item}
              id={key}
              brands={this.state.brands}
              dataImg={item.imageUrl}
              dataText={item.name}
              dataDesc={item.description}
              dataPrice={item.price}
              onClickaddToCart={this.addToCart}
              onIncrement={this.handleIncrement}
              onDecrease={this.handleDecrease}
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
