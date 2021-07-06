import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'



export const MemberMenu = () => (<nav>

    {
        localStorage.getItem("loginedMember") ===''?
        <ol>
            <li><Link to='/login-form'>로그인</Link></li>
            <li><Link to='/member-register'>회원가입</Link></li>

        </ol>

        :
        <ol>
            <li><Link to='/member-detail/g'>회원정보상세</Link></li>
            <li><Link to='/member-modify'>회원정보수정</Link></li>
            <li><Link to='/member-delete'>회원정보삭제</Link></li>
            <li><Link to='/member-list'>회원정보 목록</Link></li>
            <li><Link to='/member-retrieve'>회원정보조회</Link></li>
            <li><Link to='/login-form' onClick={()=>localStorage.setItem("loginedMember","")}>로그아웃</Link></li>
        </ol>
        }
</nav>

)


export const ItemMenu = () => (<nav>
    <ol>
        <li><Link to='/item-list'>아이템 목록</Link></li>
        <li><Link to='/item-register'>아이템 등록</Link></li>
        <li><Link to='/item-retreive'>아이템 조회</Link></li>
        <li><Link to='/item-detail'>아이템 상세</Link></li>
        <li><Link to='/item-modify'>아이템 수정</Link></li>
        <li><Link to='/item-delete'>아이템 삭제</Link></li>
    </ol>
</nav>

)
export const BoardMenu = () => (<nav>
    <ol>
        <li><Link to='/post-list'>게시글 목록</Link></li>
        <li><Link to='/post-register'>게시글 쓰기</Link></li>
        <li><Link to='/post-retrieve'>게시글 조회</Link></li>
        <li><Link to='/post-detail'>게시글 상세</Link></li>
        <li><Link to='/post-modify'>게시글 수정</Link></li>
        <li><Link to='/post-delete'>게시글 삭제</Link></li>
    </ol>
</nav>

)

export const StockMenu = () => (<nav>
    <ol>
        <li><Link to='/stock-list'>종목 리스트</Link></li>
        <li><Link to='/stock-register'>종목 등록</Link></li>
        <li><Link to='/stock-retrieve'>종목 조회</Link></li>
        <li><Link to='/stock-detail'>종목 상세</Link></li>
        <li><Link to='/stock-modify'>종목 수정</Link></li>
        <li><Link to='/stock-delete'>종목 삭제</Link></li>
    </ol>
</nav>

)