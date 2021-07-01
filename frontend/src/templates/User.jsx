import React from 'react'
import { MemberMenu as Menu } from '../common'
import './table.style.css'

const User = ({children}) => (<>
    <h1>User</h1>
    <Menu/>
    {children}
</>)

export default User

//children은 부모 user안에 있는 자식들을 전부 데리고 온다는 뜻이다. 