import React from 'react';
import UserStore from './stores/UserStore';
import  LoginForm from "./LoginForm";
import  SubmitButton  from './SubmitButton';
import jsonData from "./stores/LoginData.json";
import { observer } from 'mobx-react'
import './App.css';

class App  extends React.Component  {
  
 constructor(){
  super() 
 }

 async componentDidMount(){
  
  // if(UserStore.loading){
  //     UserStore.loading=false
  //     UserStore.isLoggedIn=true
  // }
  //   else{
  //     UserStore.loading=true
  //     UserStore.isLoggedIn=false
  // } 

 
}

async doLogout(){

}

  render(){
    
    if(UserStore.loading){
      return (  
        <div className="App">
          <div className="container">
            Loading Please wait...
          </div>
        </div>
      );
    }
    else{

      if(UserStore.isLoggedIn){
        return (
            <div className="app">
               <div className="Container">
                  Welcome {UserStore.username}

                    <SubmitButton 
                    text={'Log Out'}  
                    disabled ={false}
                    onClick={ () => this.doLogout() }
                                        
                    />

                    
               </div>
            </div>
        );
      }

    }
    

  return (  
    <div className="App">
       <div className="container" > 
        
       <SubmitButton 
                    text={'Log Out'}  
                    disabled ={false}
                    onClick={ () => this.doLogout() }
                                        
                    />
       <LoginForm/>
        </div>
    </div>
  );

  }
}

export default observer(App);
