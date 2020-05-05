import React, { Component } from "react";

import Auxiliary from "hoc/Auxiliary/Auxiliary";
import Modal from "components/UI/Modal/Modal";

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null,
    };

    componentWillMount() {
      this.requestIntreceptor = axios.interceptors.request.use((request) => {
        this.setState({ error: null });
        return request;
      });
      this.responseInterceptor = axios.interceptors.response.use(
        (response) => response,
        (error) => {
          this.setState({ error: error });
        }
      );
    }

    componentWillUnmount() {
        axios.interceptors.request.eject(this.requestIntreceptor);
        axios.interceptors.response.eject(this.responseInterceptor);
    }

    confirmedErrorHandler = () => {
      this.setState({ error: null });
    };

    render() {
      return (
        <Auxiliary>
          <Modal
            show={this.state.error}
            closedModal={this.confirmedErrorHandler}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Auxiliary>
      );
    }
  };
};

export default withErrorHandler;
