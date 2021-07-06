import React from 'react'
import { Redirect, Route } from "react-router-dom"
import { MemberLogin, MemberDetail, MemberModify, MemberList,MemberRegister,MemberRetrieve , MemberDelete } from 'member'
import { PostWrite } from 'board'
import { ItemDelete,ItemDetail, ItemList, ItemModify,ItemRegister,ItemRetrieve } from 'item'
import { Home, User, Item, Board, Stock} from 'templates'
import { Nav } from 'common'
import { BrowserRouter as Router } from 'react-router-dom'
import { Link } from 'react-router-dom'
const App = () => {
  return (<div>
    <Router>
        <Route exact path='/home' component={Home}/>
        <Redirect exact from={'/'} to={'/home'}/>
        <Route exact path='/user' component={User}/>
        <Route exact path='/login-form' component={MemberLogin}/>
        <Route exact path='/member-detail/:id' component={MemberDetail}/>
        <Route exact path='/member-modify' component={MemberModify}/>
        <Route exact path='/member-list' component={MemberList}/>
        <Route exact path='/member-register' component={MemberRegister}/>
        <Route exact path='/member-delete' component={MemberDelete}/>

      
        <Route exact path='/board' component={Board}/>
        <Route exact path='/post-delete' component={PostWrite}/>
        <Route exact path='/post-detail' component={PostWrite}/>
        <Route exact path='/post-list' component={PostWrite}/>
        <Route exact path='/post-modify' component={PostWrite}/>
        <Route exact path='/post-register' component={PostWrite}/>
        <Route exact path='/post-retrieve' component={PostWrite}/>


        <Route exact path='/item' component={Item}/>
        <Route exact path='/item-delete' component={ItemDelete}/>     
        <Route exact path='/item-detail' component={ItemDetail}/>
        <Route exact path='/item-list' component={ItemList}/>
        <Route exact path='/item-modify' component={ItemModify}/>
        <Route exact path='/item-register' component={ItemRegister}/>
        <Route exact path='/item-retrieve' component={ItemRetrieve}/>




        <Route exact path='/stock' component={Stock}/>

       



    </Router>
  </div>)
}

export default App