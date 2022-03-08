import React, { useState, useEffect } from "react";

const INITALFORMVALUE = { fullname: "", phone_number: "" };

function Form({ addContacts, contacts }) {
  const [form, setForm] = useState(INITALFORMVALUE);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setForm(INITALFORMVALUE);
  }, [contacts]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.fullname === "" || form.phone_number === "") {
      return false;
    }

    addContacts([...contacts, form]);
  };

  return (
    <form onSubmit={onSubmit}>
      <p className="title">Add new Contact</p>
      <div>
        <input
          name="fullname"
          type="text"
          placeholder="Full Name"
          value={form.fullname}
          onChange={onChangeInput}
        />
      </div>

      <div>
        <input
          name="phone_number"
          type="text"
          placeholder="Phone Number"
          value={form.phone_number}
          onChange={onChangeInput}
        />
      </div>
      <div className="btn">
        <button >Add</button>
      </div>
    </form>
  );
}

export default Form;
