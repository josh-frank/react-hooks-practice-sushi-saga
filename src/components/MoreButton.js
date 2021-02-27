import React from "react";

function MoreButton( { currentPage, setPage } ) {
  return <button onClick={ () => setPage( currentPage > 24 ? 1 : currentPage + 1 ) }>More sushi!</button>;
}

export default MoreButton;
