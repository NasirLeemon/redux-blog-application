import React from "react";
import {
  statusSelected,
  sortChanged,
} from "../../features/filters/filterSlice";
import { useDispatch, useSelector } from "react-redux";

function Sidebar() {
  const dispatch = useDispatch();
  const { sort, status } = useSelector((state) => state.filter);

  return (
    <aside>
      <div className="sidebar-items">
        <div className="sidebar-content">
          <h4>Sort</h4>
          <select
            name="sort"
            id="lws-sort"
            className="w-full max-w-[150px] border-2 rounded-md text-gray-500"
            onChange={(e) => dispatch(sortChanged(e.target.value))}
            defaultValue={sort}
          >
            <option value="">Default</option>
            <option value="newest">Newest</option>
            <option value="most_liked">Most Liked</option>
          </select>
        </div>
        <div className="sidebar-content">
          <h4>Filter</h4>
          <div className="radio-group">
            {/* <!-- handle filter on button click --> */}
            <div>
              <input
                type="radio"
                name="filter"
                id="lws-all"
                checked ={status === 'all'}
                onChange={(e)=>dispatch(statusSelected('all'))}
                className="radio"
              />
              <label for="lws-all">All</label>
            </div>
            <div>
              <input
                type="radio"
                name="filter"
                id="lws-saved"
                checked ={status === 'saved'}
                onChange={(e)=>dispatch(statusSelected('saved'))}
                className="radio"
              />
              <label for="lws-saved">Saved</label>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
