import React, {PureComponent} from "react";

const withTextValue = (Component) => {
  return class WithTextValue extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        text: ``,
      };
      this._handleTextChage = this._handleTextChage.bind(this);
      this._clearText = this._clearText.bind(this);
    }

    _handleTextChage(newText) {
      this.setState(() => ({text: newText}));
    }

    _clearText() {
      this.setState(() => ({
        text: ``,
      }));
    }

    render() {
      return (
        <Component {...this.props} text={this.state.text} onTextChange={this._handleTextChage} clearTextValue={this._clearText}/>
      );
    }
  };
};

export {withTextValue};
