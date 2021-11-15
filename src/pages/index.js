import React from 'react';
import './main.css';
import {NavBtn, NavBtnLink} from "../components/Navbar/NavbarElements";

const Home = () => {
    return (
        <div style={{ 
            backgroundImage: 'https://dev.coop.ict.up.ac.th/img/bglogin.jpg',
         
          }}>

            <h2 className="font-link">การพัฒนาระบบสารสนเทศเพื่อการจัดการฝึกงานแบบออนไลน์ กรณีศึกษา คณะเทคโนโลยีสารสนเทศและการสื่อสาร มหาวิทยาลัยพะเยา</h2>
           
            <div style={{ 
               display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '80vh'
          }}>
            <NavBtn>
                    <NavBtnLink to="/sign-up">สำหรับนักศึกษา</NavBtnLink>                
                </NavBtn>
                <NavBtn>
                    <NavBtnLink to="/sign-up">สำหรับอาจารย์และเจ้าหน้าที่</NavBtnLink>                
                </NavBtn>
                </div>
        </div>


    );
};

export default Home;