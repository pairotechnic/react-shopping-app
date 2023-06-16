import React from 'react';

function SearchBar({placeholder, data}) {
  return (
    
      <div classname ="search">
        <div className="searchInputs">
        <input type = "text" placeholder={placeholder}/>
            <button variant="text">⌕</button>
            <div className="searchIcon"></div>
</div>
<div className="dataresult"></div>

</div>

                
  );
}

export default SearchBar;
