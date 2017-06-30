import React from 'react';
import { months } from '../constants/calendarTypes';

const SearchBar = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-12-xs">
                    <select>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                    </select>
                </div>
                <div className="col-12-xs">
                    <select>
                        {Object.values(months).map((month) => <option key={month.zeroNumber} value={month.zeroNumber}>{month.plName}</option>)}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default SearchBar
