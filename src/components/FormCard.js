import React from "react";

const FormCard = props => {
  return (
    <div>
      {props.users.map(data => (
        <div className="person" key={data.id}>
          <h2>
            User: {data.fname} {data.lname}
          </h2>
          <h3>Email: {data.email}</h3>
          <h3>Password: {data.password}</h3>
        </div>
      ))}
    </div>
  );
};

export default FormCard;
