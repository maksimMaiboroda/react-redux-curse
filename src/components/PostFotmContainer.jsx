import React from "react";
import PostFotm from "./PostFotm";
import { connect } from "react-redux";
import { createPost, showAlert, hideAlert } from "../redux/actions";

const mapStateToProps = state => ({
  alert: state.app.alert
});

export default connect(mapStateToProps, { createPost, showAlert, hideAlert })(PostFotm);
