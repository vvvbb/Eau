import React from "react";

class TextArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      focus: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  onFocus = () => {
    this.setState({ focus: true });
  };
  onBlur = () => {
    this.setState({ focus: false });
  };

  render() {
    return (
      <div
        className={
          "form formTextArea " +
          (this.state.focus || this.state.value !== "" ? "form-focus" : "")
        }
      >
        <textarea
          id={this.props.id}
          type="textarea"
          name={this.props.name}
          value={this.state.value}
          onChange={this.handleChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          maxLength={256}
        />
        <label
          className="label-name"
          // className={"label-name " +(this.state.focus || this.state.value !== "" ? "label-name-focus" : "")}
        >
          <span
            className={
              "content-name " +
              (this.state.focus || this.state.value !== ""
                ? "content-name-focus formTextArea-focus"
                : "")
            }
          >
            {this.props.label}
          </span>
        </label>
      </div>
    );
  }
}

export default TextArea;
