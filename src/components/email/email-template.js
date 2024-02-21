import * as React from 'react';



export const EmailTemplate = ({ Name, message, email}) => (
  <div>
    <h1>mensaje de: {Name}!</h1>

    <p>{message}</p>

    <h4>email a escribir: {email}</h4>
  </div>
);
