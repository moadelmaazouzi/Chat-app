import React from 'react';
import '../style.scss';

const Search = () => {
    return (
        <div className='search'>
            <div className="searchForm">
                 <input type="search" name="" id="" placeholder='find a user'/>
                 <div className="userchat">
                    <img src="images.jpg" alt="" />
                    <div className="userchatinfo"><span>displa name</span></div>
                 </div>
            </div>
            
        </div>
    );
}

export default Search;
