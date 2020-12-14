import React from "react";
import PropTypes from "prop-types";

function InputSelect(props) {
  return (
    <div className="form-group">
      <label htmlFor={props.id}>{props.label}</label>
      <div className="field">
        <select
          id={props.id}
          name={props.name}
          value={props.value}
          className="form-control"
          onChange={props.onChange}
        >
          <option value="" />
          {props.authors.map(author => {
            return (
              <option key={author.authorId} value={author.authorId}>
                {author.authorName}
              </option>
            );
          })}
        </select>
      </div>
      {props.error && <div className="alert alert-danger">{props.error}</div>}
    </div>
  );
}

InputSelect.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  authors: PropTypes.array.isRequired
};

export default InputSelect;
