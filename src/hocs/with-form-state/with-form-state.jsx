import React, {PureComponent} from "react";

const withFormState = (Component) => {
  return class WithFormState extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPosting: false,
        isError: false,
      };
      this._handleChangePostStatus = this._handleChangePostStatus.bind(this);
      this._handleError = this._handleError.bind(this);
    }

    _handleChangePostStatus(isFormPosting) {
      this.setState(() => ({isPosting: isFormPosting}));
    }

    _handleError(isErr) {
      this.setState(() => ({
        isError: isErr,
      }));
    }

    render() {
      return (
        <Component {...this.props} isError={this.state.isError} isPosting={this.state.isPosting} changePostStatus={this._handleChangePostStatus} changeErrorStatus={this._handleError}/>
      );
    }
  };
};

export {withFormState};
