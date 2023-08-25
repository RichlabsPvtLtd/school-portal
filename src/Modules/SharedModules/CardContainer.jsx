import React from 'react'

export default function CardContainer() {
  return (
    <div>
      <h1>CardContainer</h1>
      <h2>
        This component should take props as object with properties namely :
        <br />
        1. number of cards <br /> 2. icons for the cards <br />
        3. heading(and/or description)
        <br />{" "}
              4. Optional (Router link i.e /settings) </h2>
          <h3> This compnent will return a div that would loop through the numberOfCards property and the parent div would be a flexbox with only one ClassName and css rule for that div.
          The card would be a prime component and no other css has to be done until this point. </h3>
    </div>
  );
}
