import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { Memberdelete } from 'api'

const MemberDeleteForm = () =>{
    
    const [deletedPassword, setDeletedPassword] = useState('')
    const history = useHistory()
    const handleSubmit =e => {
        e.preventDefault()
        const member = JSON.parse(localStorage.getItem("loginedMember"))
        if(deletedPassword === member.password)
        {Memberdelete(member.username)
        .then(res => {
            alert(`탈퇴완료:${res.data.result}`)
            localStorage.setItem("loginedMember","")
            history.push('/home')
        })
        .catch(err=>{
            alert(`탈퇴실패 : ${err}`)
        })
        
        
    }
        else {
            alert('비밀번호가 틀립니다.')
            document.getElementById("password").value=""
        }

    }
    return(
        <>
        <form method="delete" onSubmit={handleSubmit}>
            <h2 style={{"text-align":"center"}}>회원탈퇴</h2>
            <div className ="container">
                <label labelFor="password"><b>비밀번호</b></label>
                <input type="password" id="password" placeholder="Enter Password" onChange={e=>{setDeletedPassword(e.target.value)}} name="password" required/>
                <button type="submit">확인</button>

            </div>
        </form>
        
        
        </>
    )
}
export default MemberDeleteForm