import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Pagination from '@material-ui/lab/Pagination';
import { Memberlist } from 'api'
import { Link } from "react-router-dom";


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  
});
const usePageStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),
      },
    },
  }));



const MemberListComponent = ({ match }) => {
  
  const [members, setMembers] = useState([])

  const classes = useStyles();
  const pageClasses = usePageStyles();

  useEffect(() => {
    Memberlist()
    .then(res => {
      alert(res.data)/**[object Object],[object Object],[object Object],[object Object] */
        setMembers(res.data)
        alert(members.username)
    })
    .catch(err => {
        console.log(err.data)
    })
  }, [])


  const handleClick = member => {
    }


  return (<>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>회원 ID</TableCell>
            <TableCell align="right">비밀번호</TableCell>
            <TableCell align="right">회원 이름</TableCell>
            <TableCell align="right">이메일</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { members.length != 0
           ? members.map(({username, password, name, email }) => (
               <TableRow key={ username } >
                 <TableCell align="right">{ username }</TableCell>
                <TableCell component="th" scope="row">{ password }</TableCell>
                <TableCell align="right"><Link to={`/member-detail/${ name }`} 
                onClick={ () => handleClick( JSON.stringify({ username, password, name, email }) )}>{ name }</Link></TableCell>
                <TableCell align="right">{ email }</TableCell>
            </TableRow>)
          )
          :  <TableRow>
          <TableCell component="th" scope="row" colSpan="4">
             <h1>등록된 데이터가 없습니다</h1>
          </TableCell>
        
      </TableRow>
          }
        </TableBody>
      </Table>
    </TableContainer>
    <div className={pageClasses.root}>
        <Pagination count={10} color="primary" />
    </div>
    </>);
}

export default MemberListComponent