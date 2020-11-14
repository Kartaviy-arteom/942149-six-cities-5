import React, {PureComponent} from "react";

const withTextValue = (Component) => {
  return class WithTextValue extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        text: ``,
      };
      this._handleTextChage = this._handleTextChage.bind(this);
    }

    _handleTextChage(newText) {
      this.setState(() => ({text: newText}));
    }

    render() {
      return (
        <Component {...this.props} text={this.state.text} onTextChange={this._handleTextChage}/>
      );
    }
  };
};

export {withTextValue};
