import { userLogin } from 'api'
import React,{useState} from 'react'

const Login = () => {

const[loginInfo, SetLoginInfo] = useState({

  username : '',
  password : '',
})

const {username, password} = loginInfo

const handleChange = e => {
  const{name, value} =e.target
  SetLoginInfo({
    ...loginInfo,
    [name]:value
  })
}


const handleClick = e => {
  e.preventDefault()
  alert('취소클릭')
}


const handleSubmit = e => {
  e.preventDefault()
  alert(`다음 정보로 로그인 시도 : ${JSON.stringify({...loginInfo})}`)
  userLogin({...loginInfo})
  .then(res => {alert(`로그인 성공 : ${res.data.result}`)})
  .catch(err=>{alert(`로그인 실패 : ${err}`)})
}





    return (<>
    <h2>Login Form</h2>





<form onSubmit={handleSubmit} method="post">
  <div className="imgcontainer">
    <img src="https://www.w3schools.com/howto/img_avatar2.png" style={{width: "300px"}} alt="Avatar" className="avatar"/>
  </div>

  <div className="container">
    <label labelFor="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" onChange={handleChange} name="username" value={username}/>

    <label labelFor="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" onChange={handleChange} name="password" value={password}/>
        
    <button type="submit">Login</button>
    <label>
      <input type="checkbox" checked="checked" onClick={handleClick} name="remember"/> Remember me
    </label>
  </div>

  <div className="container" style={{backgroundColor: "#f1f1f1"}}>
    <button type="button" className="cancelbtn">Cancel</button>
    <span className="psw">Forgot <a href="#">password?</a></span>
  </div>
</form>
   
    </>)
}

export default Login