import React  from 'react';

export default  function Filter({sorts,sorting,cat,filteringName}) {
    return(
    <div>
        <div className="select_filter">
            <select value={cat} onChange={filteringName}>
                <option value="">All</option>
                <option value="vegan">vegan</option>
                <option value="meat">meat</option>
                <option value="fish">fish</option>

            </select>
        </div>
            <div className="select_filter">
<select value={sorts} onChange={sorting}>
    <option value="all">All</option>
    <option value="high">High</option>
    <option value="low">Low</option>
</select>
                {sorts}
            </div>
</div>
    )

}