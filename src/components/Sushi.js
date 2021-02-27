import React from "react";

function Sushi( { sushi, tab, updateTab } ) {

  const { id, name, img_url: image, price } = sushi;

  function eatThisSushi() {
    if ( !tab.find( eatenSushi => eatenSushi.id === id ) && tab.reduce( ( total, plate ) => total + plate.price, 0 ) + price <= 100 ) {
      const updatedTab = [ ...tab, sushi ];
      updateTab( updatedTab );
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={ eatThisSushi }>
        {tab.find( eatenSushi => eatenSushi.id === id ) ? null : (
          <img
            src={ image }
            alt={ name }
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        { name } - ${ price }
      </h4>
    </div>
  );

}

export default Sushi;
