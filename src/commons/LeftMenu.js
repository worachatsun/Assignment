import React, { Component } from 'react'
import styled from 'styled-components'
import { MdLockOutline, MdLocalShipping, MdAccountCircle, MdViewModule } from 'react-icons/lib/md';
import { FaCreditCard } from 'react-icons/lib/fa';

export default class LeftMenu extends Component {
    render() {
        return (
            <Container>
                <MenuButton><MdAccountCircle />Edit Profile</MenuButton>
                <MenuButton>Preferences</MenuButton>
                <MenuButton><MdLockOutline />Password</MenuButton>
                <MenuButton>Notifications</MenuButton>
                <MenuButton><MdViewModule />Connected Accounts</MenuButton>
                <SepSection/>
                <MenuButton>Orders</MenuButton>
                <MenuButton><FaCreditCard />Payment</MenuButton>
                <MenuButton><MdLocalShipping />Shipping</MenuButton>
                <SepSection/>
                <MenuButton>Credits & Referrals</MenuButton>
            </Container>
        )
    }
}

const Container = styled.div`
    width: 100%;
    color: #6F727D;
    border-radius: 2px;
    background-color: white;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
`

const MenuButton = styled.div`
    display: flex;
    flex: 1;
    padding: 3px 0 7px 10px;
    align-items: center;
    height: 30px;
    font-size: 14px;
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