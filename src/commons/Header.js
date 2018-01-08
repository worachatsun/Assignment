import React, { Component } from 'react'
import styled from 'styled-components'
import { FaSearch, FaUser, FaShoppingCart, FaInbox, FaBolt } from 'react-icons/lib/fa';

class Header extends Component{
    render() {
        return (
            <HeaderDiv>
                <div>
                    <SearchInput placeholder={'Search Fancy'} />
                </div>
                <div>
                    FANCY
                </div>
                <div>
                    <IconGroup>
                        <FaShoppingCart />
                        <FaInbox />
                        <FaBolt />
                        <FaUser />
                    </IconGroup>
                </div>
            </HeaderDiv>
        )
    }
}

const MakeRowDiv = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-around;
`

const IconGroup = MakeRowDiv.extend`
    width: 170px;
`

const HeaderDiv = MakeRowDiv.extend`
    align-items: center;
    height: 48px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
`

const SearchInput = styled.input`
    height: 24px;
    width: 170px;
    border-radius: 2px;
    border: 1px solid #ddd;
    background-color: #f2f2f2;
`

export default Header