import React from "react";
import Styles from "./Styles";
import { Form, Field } from "react-final-form";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const FormCreate = ({ onSubmit, initialValues }) => (
  <Styles>
    <Form
      onSubmit={onSubmit}
      initialValues={initialValues}
      render={({ handleSubmit, reset, submitting, pristine, values }) => (
        
        <form onSubmit={handleSubmit}>
          <div>
            <label>First Name</label>
            <Field
              name="firstName"
              component="input"
              type="text"
              placeholder="First Name"
            />
          </div>
          <div>
            <label>Last Name</label>
            <Field
              name="lastName"
              component="input"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div>
            <label>Email</label>
            <Field
              name="email"
              component="input"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="buttons">
            <button type="submit" disabled={submitting || pristine}>
              Submit
            </button>
          </div>
           <div>
            <label>Город</label>
            <Field name="city" component="select">
              <option value="Киев">Киев</option>
              <option value="Не Киев">Не Киев</option>
            </Field>
          </div>
          Пол:
           <label>
                <Field
                  name="sex"
                  component="input"
                  type="radio"
                  value="man"
                />{' '}
                Мужской
              </label>
               <label>
                <Field
                  name="sex"
                  component="input"
                  type="radio"
                  value="wman"
                />{' '}
                Женский
              </label>
          <pre>{JSON.stringify(values, 0, 2)}</pre>
          {console.log(values.city)}
        </form>
      )}
    />
  </Styles>
);

export default FormCreate;
