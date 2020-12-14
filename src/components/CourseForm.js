import React from "react";
import InputText from "./common/InputText";
import InputSelect from "./common/InputSelect";

function CourseForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <InputText
        id="title"
        label="Title"
        name="title"
        value={props.course.title}
        onChange={props.onChange}
        error={props.errors.title}
      />

      <InputSelect
        id="author"
        name="authorId"
        label="Author"
        value={props.course.authorId || ""}
        onChange={props.onChange}
        authors={[
          { authorId: 1, authorName: "Cory House" },
          { authorId: 2, authorName: "Scott Allen" }
        ]}
        error={props.errors.authorId}
      />

      <InputText
        id="category"
        label="Category"
        name="category"
        value={props.course.category}
        onChange={props.onChange}
        error={props.errors.category}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

export default CourseForm;
