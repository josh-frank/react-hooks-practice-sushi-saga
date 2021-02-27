import React, { useState } from "react";

function WalletForm( { wallet, updateWallet } ) {

    const [ moneyToAdd, updateMoneyToAdd ] = useState( 0 );

    function addMoney() {
        updateWallet( wallet + moneyToAdd );
        updateMoneyToAdd( 0 );
    }

    return (
        <form className="wallet-form">
            <label htmlFor="amount">Add more money! </label>
            <input type="number" name="amount" onChange={ change => updateMoneyToAdd( parseInt( change.target.value ) ) } />
            <input type="button" value="下ください" onClick={ addMoney } />
        </form>
    );

}

export default WalletForm;
