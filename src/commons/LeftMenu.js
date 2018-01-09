import React, { Component } from 'react'
import styled from 'styled-components'
import { MdLockOutline } from 'react-icons/lib/md';

class LeftMenu extends Component {
    render() {
        return (
            <Container>
                <MenuButton>Edit Profile</MenuButton>
                <MenuButton>Preferences</MenuButton>
                <MenuButton>Password</MenuButton>
                <MenuButton>Notifications</MenuButton>
                <MenuButton>Connected Accounts</MenuButton>
                <SepSection/>
                <MenuButton>Orders</MenuButton>
                <MenuButton>Payment</MenuButton>
                <MenuButton>Shipping</MenuButton>
                <SepSection/>
                <MenuButton>Credits & Referrals</MenuButton>
            </Container>
        )
    }
}

const Container = styled.div`
    width: 300px;
    border-radius: 2px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
`

const MenuButton = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    height: 30px;
    font-size: 15px;
    padding-left: 5px;
    &:hover {
        font-weight: bold;
        background-color: #ddd;
    }
`

const SepSection = styled.div`
    border-bottom: 1px solid #ddd;
    margin: 0 10px 0 10px;
`

export default LeftMenu