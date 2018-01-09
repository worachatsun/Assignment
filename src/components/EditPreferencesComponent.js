import React, { Component } from 'react'
import styled from 'styled-components'
import TopBar from '../commons/TopBar'
import LeftMenu from '../commons/LeftMenu'
import { FaLock } from 'react-icons/lib/fa'
import Dropdown from '../commons/Dropdown'
import { languages, timezones, currencies } from '../assets/resource'

class EditPreferencesComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dropdown: false,
            language: '',
            timezone: '',
            currency: '',
            profileVisibility: '',
            message: '',
            category: ''
        }
    }

    setLanguage(data) {
        this.setState({language: data})
    }

    setCurrency(data) {
        this.setState({currency: data})
    }

    setTimezone(data) {
        this.setState({timezone: data})
    }
    render() {
        return (
            <div>
                <TopBar/>
                <OuterContainer>
                    <div style={{width: '16%'}}>
                        <LeftMenu/>
                    </div>
                    <Container>
                        <div style={{fontWeight: 'bold', marginTop: 20, marginLeft: '2.3%', color: '#515C67'}}>Edit Preferences</div>
                        <SepSection/>
                        <SectionDiv>
                            <Section left color={'#6F727D'}>Localization</Section>
                            <Section>
                                <Text>Language</Text>
                                <Dropdown value={languages} setData={this.setLanguage.bind(this)}/>
                                <Text em={0.8} color={'#C2C4CB'}  weight={'regular'}>Interested in helping translate Fancy? <span style={{color: '#527FB7'}}>Let us know.</span></Text>
                                <br/>
                                <Text>Time zone</Text>
                                <Dropdown value={timezones} setData={this.setTimezone.bind(this)}/>
                                <Text>Currency</Text>
                                <Dropdown value={currencies} setData={this.setCurrency.bind(this)}/>
                            </Section>
                        </SectionDiv>
                            <SepSection/>
                        <SectionDiv>
                            <Section left color={'#6F727D'}>Privacy</Section>
                            <Section>
                                <Text>Profile visibility</Text> 
                                <Text em={0.8} color={'#C2C4CB'} weight={'regular'}>Manage who can see your activity, things you fancy, your followers, people you follow or in anyone's search results.</Text>
                                <RadioDiv>
                                    <input type={'radio'} name={'profile_vis'} checked={this.state.profileVisibility==='Everyone'?true:false} onChange={data => {this.setState({profileVisibility: data.target.value})}} value={'Everyone'} style={{margin: '0 7px 0 0'}}/><Text em={0.8} color={'#6F727D'}  weight={'regular'}>Everyone</Text>
                                    <input type={'radio'} name={'profile_vis'} checked={this.state.profileVisibility==='Private'?true:false} onChange={data => {this.setState({profileVisibility: data.target.value})}} value={'Private'} style={{margin: '0 7px 0 20px'}}/><Text em={0.8} color={'#6F727D'}  weight={'regular'}><FaLock/>Private</Text>
                                </RadioDiv>
                                <Text>Messages</Text>  
                                <Text em={0.8} color={'#C2C4CB'} weight={'regular'}>Control who can send you messages.</Text>
                                <RadioDiv>
                                    <input type={'radio'} name={'message'} checked={this.state.message==='Everyone'?true:false} onChange={data => {this.setState({message: data.target.value})}} value={'Everyone'} style={{margin: '0 7px 0 0'}}/><Text em={0.8} color={'#6F727D'}  weight={'regular'}>Everyone</Text>
                                    <input type={'radio'} name={'message'} checked={this.state.message==='People you follow'?true:false} onChange={data => {this.setState({message: data.target.value})}} value={'People you follow'} style={{margin: '0 7px 0 20px'}}/><Text em={0.8} color={'#6F727D'}  weight={'regular'}>People you follow</Text>
                                    <input type={'radio'} name={'message'} checked={this.state.message==='No one'?true:false} onChange={data => {this.setState({message: data.target.value})}} value={'No one'} style={{margin: '0 7px 0 20px'}}/><Text em={0.8} color={'#6F727D'}  weight={'regular'}><FaLock/>No one</Text>
                                </RadioDiv>
                                <Text>Recently viewed</Text>  
                                <Text em={0.8} color={'#C2C4CB'} weight={'regular'}>Manage your Fancy browsing history.</Text>
                                <Text color={'#527FB7'}>Delete all items</Text>
                            </Section>
                        </SectionDiv>
                            <SepSection/>
                        <SectionDiv>
                            <Section left color={'#6F727D'}>Content</Section>
                            <Section>
                                <Text>Category lists</Text>  
                                <Text em={0.8} color={'#C2C4CB'} weight={'regular'}>Automatically add Fancy'd items to the Category list</Text>
                                <RadioDiv>
                                    <input type={'radio'} name={'category'} checked={this.state.category==='Enable'?true:false} onChange={data => {this.setState({category: data.target.value})}} value={'Enable'}  style={{margin: '0 7px 0 0'}}/><Text em={0.8} color={'#6F727D'}  weight={'regular'}>Enable</Text>
                                    <input type={'radio'} name={'category'} checked={this.state.category==='Disable'?true:false} onChange={data => {this.setState({category: data.target.value})}} value={'Disable'} style={{margin: '0 7px 0 20px'}}/><Text em={0.8} color={'#6F727D'}  weight={'regular'}>Disable</Text>
                                </RadioDiv>
                            </Section>
                        </SectionDiv>
                        <SepSection/>
                        <SepSection/>
                        <div style={{display: 'flex', flex: 1, justifyContent: 'flex-end', margin: '0 15px 15px 0'}}><Button>Save Preferences</Button></div>
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
    margin: 15px 0 15px 0;
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

const Text = styled.div`
    font-size: ${props => props.em || 0.9}em;
    font-weight: ${props => props.weight || 'bold'};
    color: ${props => props.color || '#515C67'};
`
const Button = styled.button`
    height: 34px;
    weught: 190px;
    border-radius: 4px;
    border: 1px solid #515C67;
    color: #515C67;
    font-size: 0.8em;
    font-family: 'Hind';
    font-weight: bold;
    background-color: '#F8F8F8'
`

const RadioDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 15px 0 15px 0;
`

export default EditPreferencesComponent