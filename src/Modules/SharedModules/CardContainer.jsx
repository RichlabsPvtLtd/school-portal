import React from 'react';

const CardContainer = ({ Cards }) => {
  return (
    <div className="hp-sub-container-2-card-container">
      {Cards.map((item, index) => (
        <div key={index} className={item.className}>
          {item.src && (
            <img
              className="hp-container2-About-school img"
              src={item.src}
              alt={item.alt}
            />
          )}
          <h3 className="hp-container2-About-school-font">{item.text}</h3>
        </div>
      ))}
       <div className="hp-container2-About-school hp-container2-About-quick-link expanded">
        <h3 className="hp-container2-About-school-font-quick-link">Quick Link</h3>
        <div>
          <p className="quick-link-list quick-link-list-1 ">Create Test</p>
        </div>
        <div>
          <p  className="quick-link-list">Add Students </p>
        </div>
        <div>
          <p className="quick-link-list">Add Questions </p>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;

