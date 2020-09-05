import React from 'react'
import InputField from './InputField'
import SubmitButton from './SubmitButton'
import UserStore from  './stores/UserStore'

class LoginForm extends React.Component{

     constructor(props){
         super(props)
         this.state ={
             username:'',
             password:'',
             buttonDisabled:false
         }
     }

     async doLogin(){
         if(!this.state.username){
             return;
         }

         if(!this.state.password){
            return;
        }

        this.setState({
            buttonDisabled:true
        })

        try {
            
                let res = await fetch('/login',
                                {
                                    method: 'post',
                                    headers:{
                                        'Accept': 'application/json',
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({
                                        username:this.state.username,
                                        password: this.state.password
                                    })
                                }
                );

                let result = await res.json();
                //if(result && re)

        } catch (error) {
            
        }

     }

     inputchange (e){

     }
    render(){
        return (
            <div className="loginForm">                
                <InputField placeholder='username' type='input' value='' onChange={ () => this.inputchange()}></InputField>
                <InputField placeholder='password' type='input' value='' onChange={ () => this.inputchange() }></InputField>
            </div>
        );
    }
}

export default LoginForm