import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import '@fontsource/roboto';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';

import User from './component/User';
import Artwork from './component/Artwork';
import Friend from './component/Friend';
import Job from './component/Job';
import Message from './component/Message';
import PrimarySearchAppBar from './component/Navbar';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Click the button to load data!',
      flag: false,
      users: [],
      artworks: [],
      friends: [],
      jobs: [],
      messages: []
    }
  }
  
  // useEffect(() => {
  //   const daysPromise = axios.get(`/api/days`);
  //   const appointmentsPromise = axios.get(`/api/appointments`);
  //   const interviewersPromise = axios.get(`/api/interviewers`);
  //   const promises = [daysPromise, appointmentsPromise, interviewersPromise];

  //   Promise.all(promises).then((all) => {
  //     setState((prev) => ({
  //       ...prev,
  //       days: all[0].data,
  //       appointments: all[1].data,
  //       interviewers: all[2].data,
  //     }));
  //   });
  // }, []);

  fetchData = () => {
    const usersPromise = axios.get(`/api/users`);
    const artworksPromise = axios.get(`/api/artworks`);
    const friendsPromise = axios.get(`/api/friends`);
    const jobsPromise = axios.get(`/api/jobs`);
    const messagesPromise = axios.get(`/api/messages`);
  
    const promises = [usersPromise, artworksPromise, friendsPromise, jobsPromise, messagesPromise];

    Promise.all(promises).then((all) => { 
      console.log(all)     
      this.setState({
        users: all[0].data.users,
        artworks: all[1].data.artworks,
        friends: all[2].data.friends,
        jobs: all[3].data.jobs,
        messages: all[4].data.messages
      })
    })
  }

  changeFlag = () => {
    this.setState({
      flag: true
    })
  }

  render() {
    return (
      <div className="App">
        <div>
           {<PrimarySearchAppBar /> }
        </div>

        <button onClick={this.fetchData} >
          Fetch Data
        </button> 
        <button onClick={this.changeFlag} >
          Load User
        </button>
        <div className="body_container">
          
          <div className="sidebar_container">
            <div className="messages_container">
              <h1>{ this.state.flag && this.state.messages[0].message }</h1>
              <h1>{ this.state.flag && this.state.messages[1].message }</h1>
            </div>
          </div>
          
          <div className="main_container">
                        <div className="users_container">
              <h1>{ this.state.flag && this.state.users[0].username }</h1>
            </div>
            <div className="artworks_container">
              <h1>{ this.state.flag && this.state.artworks[0].title }</h1>
              <h1>{ this.state.flag && this.state.artworks[0].author_id }</h1>
              <h1>{ this.state.flag && this.state.artworks[0].descrip }</h1>
              <h1>{ this.state.flag && this.state.artworks[0].link }</h1>
              <h1>{ this.state.flag && this.state.artworks[0].for_sale }</h1>
              <h1>{ this.state.flag && this.state.artworks[0].price }</h1>
            </div>
            
            <div className="friends_container">
              <h1>{ this.state.flag && this.state.friends[0].first_user_id }</h1>
              <h1>{ this.state.flag && this.state.friends[0].second_user_id }</h1>
            </div>
            
            <div className="jobs_container">
              <h1>{ this.state.flag && this.state.jobs[0].title }</h1>
              <h1>{ this.state.flag && this.state.jobs[0].description }</h1>
              <h1>{ this.state.flag && this.state.jobs[0].user_id }</h1>
              <h1>{ this.state.flag && this.state.jobs[0].pay }</h1>
            </div>
          </div>

          
        </div>
        <div>
          {this.state.flag && <User />}            
        </div>
      </div>
    );
  }
}

export default App;
