import { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
import WalletForm from "./WalletForm";

const API = "http://localhost:3001/sushis?_limit=4&_page=";

function App() {
  
  function fetchSushi( page ) {
    return fetch( API + page ).then( response => response.json() );
  }

  const [ currentSushiPage, setSushiPage ] = useState( 1 );
  const [ currentSushi, setSushi ] = useState( [] );
  const [ sushiTab, updateSushiTab ] = useState( [] );
  const [ sushiWallet, updateSushiWallet ] = useState( 200 );

  useEffect( () => {
    fetchSushi( currentSushiPage ).then( setSushi );
  }, [ currentSushiPage ] );
  
  return (
    <div className="app">
      <SushiContainer sushi={ currentSushi } currentPage={ currentSushiPage } setPage={ setSushiPage } tab={ sushiTab } updateTab={ updateSushiTab } />
      <Table plates={ sushiTab } wallet={ sushiWallet } />
      <WalletForm wallet={ sushiWallet } updateWallet={ updateSushiWallet } />
    </div>
  );

}

export default App;
