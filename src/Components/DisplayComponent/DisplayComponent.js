import { connect } from "react-redux";

import React from "react";

class DisplayComponent extends React.Component {

  render(props) {

    return(
      <>
        <p>Display Component</p>
        <p>{`Input: ${this.props.input}`}</p>
      </>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    input: state.input
  }
}

export default connect(mapStateToProps)(DisplayComponent);