import React from "react";
import { toast } from "react-hot-toast";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";

import css from "./SearchBar.module.css";

interface SearchBarProps {
  onsearchQuery: (searchTerm: string) => void;
}

const initialValues = { searchTerm: "" };

const SearchBar: React.FC<SearchBarProps> = ({ onsearchQuery }) => {
  const handleSubmit = (
    values: typeof initialValues,
    { setSubmitting }: FormikHelpers<typeof initialValues>
  ) => {
    if (!values.searchTerm) {
      toast.error("Please enter a search term");
      return;
    }
    onsearchQuery(values.searchTerm);
    setSubmitting(false);
  };

  return (
    <header className={css.header}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <Field
            className={css.field}
            type="text"
            name="searchTerm"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <ErrorMessage
            className={css.error}
            name="searchTerm"
            component="span"
          />

          <button className={css.submitBtn} type="submit" aria-label="Search">
            🔍
          </button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
