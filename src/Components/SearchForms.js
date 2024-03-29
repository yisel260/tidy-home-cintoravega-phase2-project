import React, {useState} from "react";



function SearchForms({
  handleNameSearch, 
  handleCategorySearch, 
  handleRoomSearch, 

  itemSearched,
  setItemSearched,
  categorySearched,
  setCategorySearched,
  roomSearched,
  setRoomSearched}) {


  return (
    <div>
      <h3>Search by Name</h3>
      <form className="form" onSubmit={(e)=>{handleNameSearch(e)}}>
        <label>
          Item Name:
          <input name="ItemName" id="itemName" value={itemSearched}   onChange={e=>setItemSearched(e.target.value)}/>
        </label>
        <button type="submit">search</button>
      </form>


      <h3>Search by Category</h3>
      <form className="form" onSubmit={(e)=>{handleCategorySearch(e)}}>
        <label>
          Item Category:
          <input name="ItemCategory" id="itemCategory" value={categorySearched}   onChange={e=>setCategorySearched(e.target.value)}/>
        </label>
        <button type="submit">search</button>
      </form>


      <h3>Search by Room</h3>
      <form className="form"onSubmit={(e)=>{handleRoomSearch(e)}}>
        <label>
          Room:
          <input name="ItemRoom" id="itemRoom" value={roomSearched}   onChange={e=>setRoomSearched(e.target.value)}/>
        </label>
        <button type="submit">search</button>
      </form>


    </div>
  );
}

export default SearchForms;