import React, { Component } from 'react'
import styled from 'styled-components'
import { FaCaretDown, FaCaretUp } from 'react-icons/lib/fa';

export default class Dropdown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dropdownActive: false,
            dropdownValue: 'Choose'
        }
    }

    setDropdownValue(value) {
        this.setState({
            dropdownValue: value,
            dropdownActive: !this.state.dropdownActive
        })
    }

    render() {
        return (
            <DropdownContainer>
                <div onClick={() => this.setState({dropdownActive: !this.state.dropdownActive})}>
                    <DropdownContent>
                        {this.state.dropdownValue}{this.state.dropdownActive?<FaCaretUp/>:<FaCaretDown/>}
                    </DropdownContent>
                </div>
                {this.state.dropdownActive?menu(null, this.setDropdownValue.bind(this)):''}
            </DropdownContainer>
        )
    }
}

const menu = (data, setDropdownValue) => (
    <div>
        <div onClick={() => setDropdownValue('sun')}>First Item</div>
        <div onClick={() => setDropdownValue('sss')}>First Item</div>
    </div>
)

const DropdownContainer = styled.div`
    width: 150px;
    background-color: #F8F8F8;
    border: 1px solid #D1D5D7;
    border-radius: 2px;
`
const DropdownContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 4px 0 4px;
`