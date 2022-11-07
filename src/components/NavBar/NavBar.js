import React from "react";

import { selectSearchTerm, setSearchTerm } from "./NavBarSlice";
import { useDispatch, useSelector } from "react-redux";


const NavBar = () => {

    const searchTerm = useSelector(selectSearchTerm);

    const dispatch = useDispatch();

    const handleChange = (event) => {
        const value = event.target.value
        console.log(value)
        dispatch(setSearchTerm(value))
    }

    return (
        <header>
            <h1><span>Red</span>dit</h1>
            <input type="text" onChange={handleChange} value={searchTerm} placeholder={'Search'} />
        </header>
    )
}

export default NavBar;