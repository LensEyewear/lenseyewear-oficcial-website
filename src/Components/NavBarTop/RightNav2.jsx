import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import top01 from '../../assets/images/top-01.png'
import top02 from '../../assets/images/top-02.png'
import top03 from '../../assets/images/top-03.png'
import top04 from '../../assets/images/top-04.png'
import { IoBagOutline,IoCartOutline, IoPersonOutline, IoHeartOutline, IoBagAddOutline,IoEyeOutline,
        IoSearchOutline, IoLogoInstagram, IoLogoFacebook, IoLogoLinkedin, IoGlasses, IoGlassesOutline } from 'react-icons/io5';
        import LogoImg from '../../assets/images/logo-color.png'

const UlAdm = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  flex-direction: column;

 .top {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    padding: 5px 60px;
 }
 .top .search {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 20px;
 }
 .top .search input{
    width: 450px;
    height:40px;
    border-radius: 6px;
    border: 1px solid var(--Primary);
    margin: 5px;
    padding: 5px 10px;
 }
 .top .search button{
    width: 50px;
    height:40px;
    border-radius: 6px;
    background-color: var(--Primary);
    color: var(--White);
    margin: 5px;
    border: none;
 }
 .top .search button:hover {
  background-color: var(--PrimaryDisabled);
}

 .top .actions {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px;
    color: var(--Primary);
 }

 .top .actions a {
  text-decoration: none;
  color: var(--Primar);
}
 .top .actions a svg {
  font-size: 24px;
  margin: 10px;
}
 .top .actions a svg:hover {
  color: var(--PrimaryDisabled);
}


 .menu {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 20px;
    border-top: 1px solid var(--Border);

 }

 .menu .itensMenu {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.menu .itensMenu .unicIten{
  padding: 5px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width:200px;
  border-radius: 10px;
  color: var(--Primary);
}
.menu .itensMenu .unicIten img{
  width: 55px;
  margin-bottom: 10px;
}
.menu .itensMenu .unicIten a{
  color: var(--Primary);
  text-decoration: none;
}
.menu .itensMenu .unicIten a:hover {
  color: var(--PrimaryDisabled);
}


 .contact {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 50px;
  height: 40px;
  background-color: var(--Primary);
  color: var(--White);
}
 .contact .infosContact {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 30%;
 }
 .contact .off {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 30%;
 }
 .contact .buttonsMenu {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 30%;
 }
 .contact .buttonsMenu .iconsMenu{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
 }
 .contact .buttonsMenu .iconsMenu .unicIconMenu{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding:5px;
  background-color: var(--BorderHover);
  color: var(--White);
  border-radius: 6px;
  margin: 0 3px;
  border: none;
  font-size: 16px;
  text-decoration: none;
 }
 .contact .buttonsMenu .iconsMenu .unicIconMenu:hover {
  background-color: var(--Primary);
  color: var(--White);
 }
 .contact .buttonsMenu .contactWhatsapp {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 7px 15px;
  background-color: var(--Aproved);
  color: var(--White);
  border-radius: 20px;
  margin: 0 3px;
  border: none;
  font-size: 14px;
 }
 .contact .buttonsMenu .contactWhatsapp svg {
  font-size: 14px;
  margin-right: 5px;
 }
 .top .logo {
    padding: 15px 0;
  }
  .top .logo a img {
    height: 45px;
  }

  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding:5px;
    font-weight: 700;
  }
  .nav-item2 {
    display: none;
  }
  li a{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-weight: 600;
    color: var(--Description);
    padding: 5px;
    border-radius: 6px;
    margin-left:;
  }
  li a svg {

    margin-bottom: 2px;
    font-size: 16px;
  }
  li a p {
    font-size: 14px;
    font-weight: 700;
  }
  li a:hover{
    padding: 5px;
    color: var(--Primary);
  }

  .nav-item {
    display: flex;
    margin: 2px;
    padding: 5px 10px;
    border-radius: 20px;
  }


 

  @media (max-width: 900px) {
    flex-flow: column nowrap;
    box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(4px);
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 90%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    background-color: rgba(255,255,255);
    z-index: 98;


    
 .top {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 300px;
  padding: 0px 20px;
}
.menu {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  padding: 0 20px;
  border-top: 1px solid var(--Border);
  height: 100%;

}
.menu .itensMenu {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.menu .itensMenu .unicIten{
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 100px;
  border-radius: 10px;
  color: var(--Primary);
}

.menu .itensMenu .unicIten img{
  width: 80px;
  margin-bottom: 10px;
}


.contact .buttonsMenu {
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
width: 100%;
margin-top: 20px;
}
.contact .buttonsMenu .iconsMenu{
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
margin: 0px;
}
.contact .buttonsMenu .iconsMenu .unicIconMenu{
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
padding:5px;
background-color: var(--BorderHover);
color: var(--Primary);
border-radius: 6px;
margin: 5px;
border: none;
font-size: 20px;
text-decoration: none;
}
.contact .buttonsMenu .iconsMenu .unicIconMenu:hover {
background-color: var(--Primary);
color: var(--White);
}
.contact .buttonsMenu .contactWhatsapp {
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
padding: 10px 20px;
background-color: var(--Aproved);
color: var(--White);
border-radius: 20px;
margin: 20px 3px;
border: none;
font-size: 14px;
}
.contact .buttonsMenu .contactWhatsapp svg {
font-size: 14px;
margin-right: 5px;
}
.top .logo {
  padding: 15px 0;
}
.top .logo a img {
  height: 40px;
}



li {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 7px 0px;
  font-weight: 700;
}
.nav-item2 {
  display: none;
}
li a{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-weight: 600;
  color: var(--Description);
  padding: 7px 0px;
  border-radius: 6px;
  margin-left:;
}
li a svg {

  margin-bottom: 2px;
  font-size: 16px;
}
li a p {
  font-size: 14px;
  font-weight: 700;
}
li a:hover{
  padding: 7px 0px;
  color: var(--Primary);
}

.nav-item {
  display: flex;
  margin: 2px;
  padding: 5px 10px;
  border-radius: 20px;
}

  }

  }
`;


const RightNav2 = ({ open }) => {


    function handleContact() {
      window.open("https://wa.me/+5521984129435")
    }
    
  return (
    <UlAdm open={open}>
      <div className="contact">

        <div className='infosContact'>
            <h4>Contato</h4>
        </div>

        <div className="off">
        Lens Eweyear - Ótica Digital
        </div>
      <div className="buttonsMenu">
            <div className="iconsMenu">
            <a className="unicIconMenu" href="https://instagram.com/powerstartenergy" target='_Blank'><IoLogoInstagram /></a>
                <a className="unicIconMenu" href="https://facebook.com/powerstartenergy" target='_Blank'><IoLogoFacebook /></a>
                <a className="unicIconMenu" href="https://linkedin.com/company/power-start-energy" target='_Blank'><IoLogoLinkedin /></a>
            </div>
          </div>
      </div>

      <div className="top">
      <div className="logo">
      <Link to='/'>
      <img src={LogoImg} alt="Logo Sua Chave" />
      </Link>
      </div>

      <div className="search">
        <input type="text" placeholder='Óculos de grau, lentes de contato...' />
        <button><IoSearchOutline/></button>
      </div>

      <div className="actions">
          <a href="http://"> <IoPersonOutline /> </a>
          <a href="http://"> <IoHeartOutline /> </a>
          <a href="http://"> <IoBagOutline /> </a>
          <a href="http://"> <IoCartOutline /> </a>
      </div>

      </div>


      <div className="menu">
        <div className="itensMenu">
            <div className="unicIten">
              <img src={top01} alt="Logo Sua Chave" />
            <a href="/">ÓCULOS DE GRAU</a>
              </div> 
            <div className="unicIten">
            <img src={top02} alt="Logo Sua Chave" />
           <a href="/">ÓCULOS DE SOL</a>
              </div> 
            {/* <div className="unicIten">
            <img src={top03} alt="Logo Sua Chave" />
              LENTES DE CONTATO
              </div>  */}
            <div className="unicIten">
            <img src={top04} alt="Logo Sua Chave" />
             <a href="/">ACESSÓRIOS</a>
              </div> 
        </div>       
      </div>





    </UlAdm>
  )
}

export default RightNav2
