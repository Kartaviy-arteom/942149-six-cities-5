import React, {PureComponent} from "react";

const withActiveItem = (Component) => {
  return class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeElement: null,
      };

      this._handleItemActive = this._handleItemActive.bind(this);
      this._clearItemActive = this._clearItemActive.bind(this);
    }

    _handleItemActive(currentElement) {
      this.setState(() => ({
        activeElement: currentElement,
      }));
    }

    _clearItemActive() {
      this.setState(() => ({
        activeElement: null,
      }));
    }

    render() {
      return (
        <Component {...this.props} activeElement={this.state.activeElement} onItemActive={this._handleItemActive} clearItemActive={this._clearItemActive}/>
      );
    }
  };
};

export {withActiveItem};
