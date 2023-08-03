import React, {useState} from "react";
import './App.css'

function App() {
  const[email, setEmail]=useState("")
  const[password, setPassword]=useState("")

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login">
            <span className="login-title">Bem-vindo!<br/>Insira as informações abaixo</span>
            <div className="wrap-input">
              <input className={email !==""?"val input":"input"} type="email" value={email} onChange={e=>setEmail(e.target.value)}/>
              <span className="line-input" data-placeholder="Email"></span>
            </div>
            <div className="wrap-input">
              <input className={password !==""?"val input":"input"} type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
              <span className="line-input" data-placeholder="Password"></span>
            </div>
            <div className="container-login-btn">
              <button className="login-btn">Login</button>
            </div>
            <div className="text-center">
              <span className="text1">
                Não possui conta? 
              </span>
              <a className="text2" href="#"> Criar conta.</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
