import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer( { sushi, currentPage, setPage, tab, updateTab } ) {
  
  const sushiList = sushi.map( sushi => <Sushi key={ sushi.id } sushi={ sushi } tab={ tab } updateTab={ updateTab } /> );

  return (
    <div className="belt">
      { sushiList }
      <MoreButton currentPage={ currentPage } setPage={ setPage } />
    </div>
  );

}

export default SushiContainer;
