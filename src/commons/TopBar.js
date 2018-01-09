import React, { Component } from 'react'
import styled from 'styled-components'
import { FaSearch, FaUser, FaShoppingCart, FaInbox, FaBolt } from 'react-icons/lib/fa';

export default class TopBar extends Component{
    render() {
        return (
            <HeaderDiv>
                <div>
                    <SearchInput placeholder={'Search Fancy'} />
                </div>
                <HeaderText>
                    FANCY
                </HeaderText>
                <div>
                    <IconGroup>
                        <FaShoppingCart fill={'#ddd'} />
                        <FaInbox fill={'#ddd'} />
                        <FaBolt fill={'#ddd'} />
                        <FaUser fill={'#ddd'} />
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
    background-color: white;
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

const HeaderText = styled.div`
    font-family: 'Quicksand';
    font-size: 1.5em;
    font-weight: bold
`