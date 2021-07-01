import axios from "axios";

const SERVER ='http://127.0.0.1:8000/'
const headers = {'Content-Type': 'application/json'}
const headers_xml = {'Content-Type': 'application/xml'}

/* Member */
export const Memberregister =body => axios.post(`${SERVER}api/member/register`,{headers, body})
export const userLogin =body => axios.post(`${SERVER}api/member/login`,{headers, body})
export const Memberdelete =body => axios.delete(`${SERVER}api/member/delete`,{headers, body})
export const Memberdetail =body => axios.post(`${SERVER}api/member/detail`,{headers, body})
export const Memberlist =() => axios.get(`${SERVER}adm/member/list`)
export const Membermodify =body => axios.post(`${SERVER}api/member/modify`,{headers, body})
export const Memberretrieve =body => axios.post(`${SERVER}adm/member/retrieve`,{headers, body})

/* Item */
export const Itemdelete =body => axios.post(`${SERVER}item/delete`,{headers, body})
export const Itemdetail =body => axios.post(`${SERVER}member/detail`,{headers, body})
export const Itemlist =body => axios.post(`${SERVER}member/list`,{headers, body})
export const Itemmodify =body => axios.post(`${SERVER}member/modify`,{headers, body})
export const Itemretrieve =body => axios.post(`${SERVER}member/retrieve`,{headers, body})
export const Itemregister =body => axios.post(`${SERVER}member/register`,{headers, body})





export const boardInfo =body => axios.post(`${SERVER}board/Info`,{headers, body})
