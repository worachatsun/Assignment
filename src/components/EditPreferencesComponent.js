import React, { Component } from 'react'
import styled from 'styled-components'
import TopBar from '../commons/TopBar'
import LeftMenu from '../commons/LeftMenu'

class EditPreferencesComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dropdown: false
        }
    }

    render() {
        return (
            <div>
                <TopBar/>
                <OuterContainer>
                    <LeftMenu/>
                    <Container>
                        <div style={{fontWeight: 'bold', marginTop: 20, marginLeft: '2.3%'}}>Edit Preferences</div>
                        <SepSection/>
                        <SectionDiv>
                            <Section left color={'#6F727D'}>Localization</Section>
                            <Section>
                                <Text>Language</Text>
                                <Dropdown onClick={() => this.setState({dropdown: !this.state.dropdown})}>
                                    <span>aa</span>
                                    <DropdownContent drop={this.state.dropdown}>
                                        aa
                                    </DropdownContent>
                                </Dropdown>
                                <Text em={0.8} color={'#ddd'}  weight={'regular'}>Interested in helping translate Fancy? <span style={{color: 'blue'}}>Let us know.</span></Text>
                                <Text>Time zone</Text>
                                <Dropdown onClick={() => this.setState({dropdown: !this.state.dropdown})}>
                                    <span>aa</span>
                                    <DropdownContent drop={this.state.dropdown}>
                                        aa
                                    </DropdownContent>
                                </Dropdown>
                                <Text>Currency</Text>
                                <Dropdown onClick={() => this.setState({dropdown: !this.state.dropdown})}>
                                    <span>aa</span>
                                    <DropdownContent drop={this.state.dropdown}>
                                        aa
                                    </DropdownContent>
                                </Dropdown>
                            </Section>
                        </SectionDiv>
                            <SepSection/>
                        <SectionDiv>
                            <Section left color={'#6F727D'}>Privacy</Section>
                            <Section>
                                <Text>Profile visibility</Text> 
                                <Text em={0.8} color={'#ddd'} weight={'regular'}>Manage who can see your activity, things you fancy, your followers, people you follow or in anyone's search results.</Text>
                                <tr>
                                    <td key={1}><input type={'radio'} checked/>Everyone</td>
                                    <td key={2}><input type={'radio'}/>Private</td>
                                </tr>
                                <Text>Messages</Text>  
                                <Text em={0.8} color={'#ddd'} weight={'regular'}>Control who can send you messages.</Text>
                                <tr>
                                    <td key={1}><input type={'radio'} checked/>Everyone</td>
                                    <td key={2}><input type={'radio'}/>People you follow</td>
                                    <td key={3}><input type={'radio'}/>No one</td>
                                </tr>
                                <Text>Recently viewed</Text>  
                                <Text em={0.8} color={'#ddd'} weight={'regular'}>Manage your Fancy browsing history.</Text>
                                <Text color={'blue'}>Delete all items</Text>
                            </Section>
                        </SectionDiv>
                            <SepSection/>
                        <SectionDiv>
                            <Section left color={'#6F727D'}>Content</Section>
                            <Section>
                                <Text>Category lists</Text>  
                                <Text em={0.8} color={'#ddd'} weight={'regular'}>Automatically add Fancy'd items to the Category list</Text>
                                <tr>
                                    <td key={1}><input type={'radio'} checked/>Enable</td>
                                    <td key={2}><input type={'radio'}/>Disable</td>
                                </tr>
                            </Section>
                        </SectionDiv>
                        <SepSection/>
                        <SepSection/>
                    </Container>
                </OuterContainer>
            </div>
        )
    }
}

const OuterContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    margin-top: 15px;
`

const Container = styled.div`
    border-radius: 2px;
    width: 60%;
    background-color: white;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
    margin-left: 20px;
`

const SepSection = styled.div`
    margin: 20px 0 20px 0;
    border-bottom: 1px solid #ddd;
`

const SectionDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

const Section = styled.div`
    color: ${props => props.color || 'black'};
    width: ${props => props.left?'25%':'65%'};
`

const Dropdown = styled.div`
    position: relative;
    display: inline-block;
    &:hover ${DropdownContent}{
        display: block;
    }
`

const DropdownContent = styled.div`
    display: ${props => props.drop?'block':'none'};
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    padding: 12px 16px;
    z-index: 1;
`

const Text = styled.div`
    font-size: ${props => props.em || 0.9}em;
    font-weight: ${props => props.weight || 'bold'};
    color: ${props => props.color || 'black'};
`

export default EditPreferencesComponent