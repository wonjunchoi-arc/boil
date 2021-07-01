import React,{useState} from 'react'
import '../styles/PostRegister.css'
import { Button } from '@material-ui/core';
import { boardInfo } from 'api'


const PostWrite = () => {
  
  const [Info,setInfo] = useState({
        
      title:"",
      content:""
  })
  
  const {title, content} = Info

  const handleChange = e => {
    const {name, value} = e.target
    setInfo({
        ...Info,
        [name]:value
      })

  }

  const handleSubmit = e => {
    e.preventDefault()
    alert(`전송클릭 : ${JSON.stringify({...Info})}`)
    boardInfo({...Info})
    .then(res =>{alert(`업로드 성공 : ${res.data.result}`)})
    .catch(err => {alert(`실패~!!!: ${err}`)})
  }

  const handleClick = e => {
    e.preventDefault()
    alert('취소 클릭')
  }
    return (<>
    <div className="PostWrite">
    <form onSubmit={handleSubmit} method="get" style={{border:"1px solid #ccc"}}>
      <div className="container">
        <h1>게시글 쓰기</h1>
        <p>Please fill in this form to create an account.</p>
        <hr/>

        <label for="title"><b>title</b></label>
        <input type="text" placeholder="Enter title" onChange={handleChange}   name="title" value={title}/>

        

        <label for="content"><b>content</b></label>
        <input type="text" placeholder="Enter content" onChange={handleChange}  name="content" value={content}/>


        <p>By creating an account you agree to our <a href="#" style={{color:"dodgerblue"}}>Terms & Privacy</a>.</p>

        <div class="clearfix">
          <button type="submit" className="uploadbt">Up load</button>
          <button type="button" className="cancelbtn" onClick={handleClick}>Cancel</button>
          
        </div>
      </div>
  </form>
</div>
</>)
}

export default PostWrite