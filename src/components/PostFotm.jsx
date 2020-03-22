import React from "react";
import clssses from "./PostFotm.module.css";
import Alert from "./common/Alert";

export default class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      warn: false
    };
  }

  submitHandler = event => {
    this.setState({ warn: false });
    event.preventDefault();

    const { title } = this.state;

    if (!title.trim()) {
      return this.props.showAlert("Название поста не может быть пустым!");
    }

    const newPost = {
      title,
      id: Date.now().toString()
    };

    this.props.createPost(newPost);
    this.setState({ title: "" });
  };

  chngeInputHandler = event => {
    event.persist();
    this.setState(prev => ({
      ...prev,
      ...{
        [event.target.name]: event.target.value
      }
    }));
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div className="form-group">
          <label for="title">Заголовок поста</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={this.state.title}
            onChange={this.chngeInputHandler}
          />
        </div>
        <button className="btn btn-success" type="submit">
          Создать
        </button>
        <div className={clssses.warn}>
          {this.props.alert && <Alert text={this.props.alert} />}
        </div>
      </form>
    );
  }
}
