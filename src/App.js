import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as TodoActions } from "./store/ducks/todos";
import styles from "./styles.module.css";

class App extends React.Component {
  state = {
    text: "",
  };

  onAdd = (e) => {
    e.preventDefault();
    const { text } = this.state;
    this.props.addTodo(text);
    this.setState({ text: "" });
  };

  onToggle = (_, id) => {
    this.props.toggleTodo(id);
  };

  onRemove = (e, id) => {
    e.stopPropagation();
    this.props.removeTodo(id);
  };

  render() {
    const { text } = this.state;
    const { onAdd, onToggle, onRemove } = this;

    return (
      <form className="App" onSubmit={onAdd}>
        <input autoFocus type="text" value={text} onChange={(e) => this.setState({ text: e.target.value })} />
        <button type="submit">Save</button>

        <ul>
          {this.props.todos.length ? (
            this.props.todos.map((i, x) => (
              <li onClick={(e) => onToggle(e, i.id)} className={i.completed ? styles.checked : ""} key={i.id}>
                {i.text}
                <span role="button" onClick={(e) => onRemove(e, i.id)} className={styles.btnRemove}>
                  &times;
                </span>
              </li>
            ))
          ) : (
            <li>no tasks</li>
          )}
        </ul>
      </form>
    );
  }
}

// state have todos property from combineReducers
const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => bindActionCreators(TodoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
