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
import { Memberlist } from 'api';

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


const MemberList = () => {

  const [members, setMembers]= useState([])
  const classes = useStyles();
  const pageClasses = usePageStyles();

  useEffect(() => {
    Memberlist()
    .then(res => {
      alert((JSON.stringify(res.data)))
      console.log(res.data)
      setMembers(res.data)
    })
    .catch(err=>{
      console.log(err.data)
    })

  },[])


  return (<>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>회원 ID (100g serving)</TableCell>
            <TableCell align="right">비밀번호</TableCell>
            <TableCell align="right">회원 이름</TableCell>
            <TableCell align="right">회원 메일</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {members.length != 0
           ? members.map((member) => (
          <TableRow key={member.username}>
          <TableCell align='right'>{member.username}</TableCell>  
          <TableCell component="th" scope="row">{member.password}</TableCell>
          <TableCell align='right'>{member.name}</TableCell>
          <TableCell align='right'>{member.email}</TableCell>
          </TableRow>

  ))
        : <TableRow>
        <TableCell component="th" scope="row">
          <h2> 등록된 데이터가 없습니다.</h2>
        </TableCell>
        </TableRow>
        
        }
        </TableBody>
      </Table>
    </TableContainer>
    <div className={pageClasses.root}>
        <Pagination count={10} color="secondary" />
    </div>
    </>);
}

export default MemberList