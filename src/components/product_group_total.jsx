import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

class GroupeTotal extends Component {
  render() {
    const totalItem = this.props.brands.reduce(
      (accumulator, pilot) => accumulator + pilot.value,
      0
    );
    return (
      <Card className="mr-2 d-none d-md-block">
        <Card.Body className="text-center">
          <Card.Title className="text-nowrap">My Cart</Card.Title>
          <Card.Text className="">
            <hr />
            <h6>this.props.filterBrands.length</h6>
            <Badge variant="dark">{this.props.filterBrands.length}</Badge>
            <hr />
            <h6>brands.length</h6>
            <Badge variant="dark"> {this.props.brands.length}</Badge>
            {/* // this.state.counters.filter((c) => c.value > 0).length */}
            <hr />
            <h6>totalItem</h6>
            <Badge variant="dark">{totalItem}</Badge>
            <hr />
            <div className="">
              {this.props.filterBrands.map((id, brands) => (
                <div>
                  <h6 key={brands}>brands ID : {brands}</h6>
                  <Badge pill variant="dark">
                    {this.props.brands[brands].name} :{" "}
                    {this.props.brands[brands].value}
                  </Badge>
                  <br />
                </div>
              ))}
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
      /* <div className="group-total">
        <h3>My Cart</h3>
        <span className="badge badge-secondary">
          <h6>
            filterBrands.length : <br />
            {this.props.filterBrands.length}
          </h6>
        </span>
        <span className="badge badge-info">
          <h6>
            brands.length : <br />
            {this.props.brands.length}
            {
              // this.state.counters.filter((c) => c.value > 0).length
            }
          </h6>
        </span>
        <span className="badge badge-danger">
          <h6>
            totalItem : <br />
            {totalItem}
          </h6>
        </span>
        <span className="badge badge-warning">
          {this.props.filterBrands.map((id, brands) => (
            <h6 key={brands}>
              brands ID: {brands}
              <br />
              {this.props.brands[brands].name} :{" "}
              {this.props.brands[brands].value}
              <br />
              <hr />
            </h6>
          ))}
        </span>
      </div>*/
    );
  }
}

export default GroupeTotal;
