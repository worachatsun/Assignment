import React, { Component } from 'react'
import styled from 'styled-components'
import { FaCaretDown, FaUser, FaShoppingCart, FaInbox, FaBolt } from 'react-icons/lib/fa';

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
                        <FaShoppingCart fill={'#92979D'} />
                        <FaInbox fill={'#92979D'} />
                        <FaBolt fill={'#92979D'} />
                        <FaUser fill={'#92979D'} />
                        <span style={{color: '#92979D', marginTop: 3, fontSize: 14, fontWeight: 'bold'}}>You</span>
                        <FaCaretDown fill={'#92979D'}/>
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
    align-items: center;
    width: 160px;
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
    font-weight: bold;
    color: #515C67;
`