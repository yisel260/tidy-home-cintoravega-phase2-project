import React, {useState} from "react";



function SearchByNameForm({handleNameSearch}) {

  const [itemSearched,setItemSearched]=useState("")
  const [categorySearched,setCategorySearched]=useState("")
  const [roomSearched,setRoomSearched]=useState("")
  
  return (
    <div>
      <h3>Search by Name</h3>
      <form onSubmit={(e)=>{handleNameSearch(e)}}>
        <label>
          Item Name:
          <input name="ItemName" id="itemName" value={itemSearched}   onChange={e=>setItemSearched(e.target.value)}/>
        </label>
        <button type="submit">search</button>
      </form>


      <h3>Search by category</h3>
      <form onSubmit={(e)=>{handleNameSearch(e)}}>
        <label>
          Item category:
          <input name="ItemCategory" id="itemCategory" value={categorySearched}   onChange={e=>setCategorySearched(e.target.value)}/>
        </label>
        <button type="submit">search</button>
      </form>

      <h3>Search by Room</h3>
      <form onSubmit={(e)=>{handleNameSearch(e)}}>
        <label>
          Room:
          <input name="ItemCategory" id="itemCategory" value={roomSearched}   onChange={e=>setRoomSearched(e.target.value)}/>
        </label>
        <button type="submit">search</button>
      </form>


    </div>
  );
}

export default SearchByNameForm;