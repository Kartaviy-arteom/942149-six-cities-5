import React, {PureComponent} from "react";

const withActiveItem = (Component) => {
  return class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeElement: null,
      };

      this._handleItemActive = this._handleItemActive.bind(this);
    }

    _handleItemActive(currentElement) {
      this.setState(() => ({
        activeElement: currentElement,
      }));
    }

    render() {
      return (
        <Component {...this.props} activeElement={this.state.activeElement} onItemActive={this._handleItemActive}/>
      );
    }
  };
};

export {withActiveItem};
