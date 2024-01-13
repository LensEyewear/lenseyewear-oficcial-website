import { useContext, useEffect, useState } from 'react';
import {Tooltip as ReactTooltip} from 'react-tooltip';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import top01 from '../../assets/images/top-01.png'
import top02 from '../../assets/images/top-02.png'
import top03 from '../../assets/images/top-03.png'
import top04 from '../../assets/images/top-04.png'
import { IoBagOutline,IoCartOutline, IoPersonOutline, IoHeartOutline, IoBagAddOutline,IoEyeOutline,
        IoSearchOutline, IoLogoInstagram, IoLogoFacebook, IoLogoLinkedin, IoGlasses, IoGlassesOutline, IoCloseCircle, IoCloseCircleOutline } from 'react-icons/io5';
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
    padding: 0px 60px;
 }
 .top .search {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
 }
 .top .search input{
    width: 450px;
    height:40px;
    border-radius: 6px;
    border: 1px solid var(--Primary);
    margin: 0 5px;
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
  align-items: flex-start;
  justify-content: center;
  width: 100%;

}
.menu .itensMenu .unicIten{
  padding: 5px;
  margin: 0px 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width:200px;
  border-radius: 10px;
  color: var(--Primary);
}
.menu .itensMenu .unicIten .listIntensLinkAcive1{
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width:200px;
  color: var(--Primary);
  background-color: var(--White);
  font-weight: 600;
}
.menu .itensMenu .unicIten .listIntensLinkDesactive1 {
  display: none;
}
.menu .itensMenu .unicIten .listIntensLinkAcive2{
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width:200px;
  color: var(--Primary);
  background-color: var(--White);
  font-weight: 600;
}
.menu .itensMenu .unicIten .listIntensLinkDesactive2 {
  display: none;
}
.menu .itensMenu .unicIten .listIntensLinkAcive3{
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width:200px;
  color: var(--Primary);
  background-color: var(--White);
  font-weight: 600;
}
.menu .itensMenu .unicIten .listIntensLinkDesactive3 {
  display: none;
}
.menu .itensMenu .unicIten2 {
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

.menu .itensMenu .unicIten2 .listIntensLinkAcive1{
  padding: 10px 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width:200px;
  color: var(--Primary);
  background-color: var(--White);
  font-weight: 600;
}
.menu .itensMenu .unicIten2 .listIntensLinkDesactive1 {
  display: none;
}
.menu .itensMenu .unicIten2 .listIntensLinkAcive2{
  padding: 10px 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width:200px;
  color: var(--Primary);
  background-color: var(--White);
  font-weight: 600;
}
.menu .itensMenu .unicIten2 .listIntensLinkDesactive2 {
  display: none;
}
.menu .itensMenu .unicIten2 .listIntensLinkAcive3{
  padding: 10px 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width:200px;
  color: var(--Primary);
  background-color: var(--White);
  font-weight: 600;
}
.menu .itensMenu .unicIten2 .listIntensLinkDesactive3 {
  display: none;
}

.menu .itensMenu .unicIten img{
  width: 55px;
  margin-bottom: 10px;
}
.menu .itensMenu .unicIten2 img{
  display: none;
}
.menu .itensMenu .unicIten a{
  color: var(--Primary);
  text-decoration: none;
  margin-bottom: 10px;
}
.menu .itensMenu .unicIten2 a{
  color: var(--Primary);
  text-decoration: none;
  font-weight: 600;
}
.menu .itensMenu .unicIten a:hover {
  color: var(--PrimaryDisabled);
}
.menu .itensMenu .unicIten2 a:hover {
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
  const Local = localStorage.getItem("lenseyewear");
  const user = JSON.parse(Local);

  const [suspenseMenu, setSuspenseMenu] = useState("")


  const[position, setPosition] = useState(false)
  useEffect(function () {
    function positionScroll(){
      if(window.scrollY > 25 ){
          setPosition(true)
       } else {
          setPosition(false)
      }
    }
    
    window.addEventListener('scroll', positionScroll);
    },[])



    function handleContact() {
      window.open("https://wa.me/+5521984129435")
    }

    function handleMouse(data) {
      setSuspenseMenu(data)
    }
    function handleMouse2() {
      setSuspenseMenu("")
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
            <a className="unicIconMenu" href="https://www.instagram.com/lens.eyewear/" target='_Blank'><IoLogoInstagram /></a>
                {/* <a className="unicIconMenu" href="https://facebook.com/powerstartenergy" target='_Blank'><IoLogoFacebook /></a>
                <a className="unicIconMenu" href="https://linkedin.com/company/power-start-energy" target='_Blank'><IoLogoLinkedin /></a> */}
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

      {user === null ?
       <div className="actions">
       <a href="/entrar" data-tooltip-id="my-tooltip" data-tooltip-content="Entrar ou Cadastrar"> <IoPersonOutline /> </a>
       <ReactTooltip id="my-tooltip" place="bottom" type="dark" effect="solid">
                  <span>Entrar</span>
             </ReactTooltip>

       <a href="/checkout/carrinho"  data-tooltip-id="Carrinho" data-tooltip-content="Carrinho"> <IoCartOutline /> </a>
       <ReactTooltip id='Carrinho' place="bottom" type="dark" effect="solid">
                  <span>Carrinho</span>
             </ReactTooltip>
   </div>
    :
    <div className="actions">
    <a href="/minha-conta/meus-dados" data-tooltip-id="my-tooltip" data-tooltip-content="Minha conta"> <IoPersonOutline /> </a>
    <ReactTooltip id="my-tooltip" place="bottom" type="dark" effect="solid">
               <span>Entrar</span>
          </ReactTooltip>

    <a href="/minha-conta/favoritos" data-tooltip-id="Favoritos" data-tooltip-content="Favoritos"> <IoHeartOutline /> </a>
    <ReactTooltip id='Favoritos' place="bottom" type="dark" effect="solid">
               <span>Favoritos</span>
          </ReactTooltip>

    <a href="/minha-conta/pedidos"  data-tooltip-id="Meus pedidos" data-tooltip-content="Meus pedidos"> <IoBagOutline /> </a>
    <ReactTooltip id='Meus pedidos' place="bottom" type="dark" effect="solid">
               <span>Meus pedidos</span>
          </ReactTooltip>

    <a href="/checkout/carrinho"  data-tooltip-id="Carrinho" data-tooltip-content="Carrinho"> <IoCartOutline /> </a>
    <ReactTooltip id='Carrinho' place="bottom" type="dark" effect="solid">
               <span>Carrinho</span>
          </ReactTooltip>

    <a href="/checkout/carrinho"  data-tooltip-id="Sair" data-tooltip-content="Sair"> <IoCloseCircleOutline /> </a>
    <ReactTooltip id='Sair' place="bottom" type="dark" effect="solid">
               <span>Sair</span>
          </ReactTooltip>
</div>
    }

     

      </div>

      {/* onMouseOut={handleMouse2} */}
      

      <div className="menu" onMouseOut={handleMouse2}>
        <div className="itensMenu" >

            <div className={position === true ? "unicIten2" : "unicIten"}onMouseOver={() => handleMouse("grau")}>
              <img src={top01} alt="Logo Sua Chave" />
            <a href="#" >ÓCULOS DE GRAU</a>

            <div className={suspenseMenu === "grau" ? "listIntensLinkAcive1" : "listIntensLinkDesactive1"} onMouseOver={() => handleMouse("grau")}>
            <a href="/produtos/Óculos de Sol/Feminino">FEMININO</a>
            <a href="/produtos/Óculos de Sol/Masculino">MASCULINO</a>
            <a href="/produtos/Óculos de Sol/Kids">KIDS</a>
            <a href="/produtos/Óculos de Sol">TODOS</a>
            </div>
              </div> 

            <div className={position === true ? "unicIten2" : "unicIten"}onMouseOver={() => handleMouse("sol")}>
            <img src={top02} alt="Logo Sua Chave" />
           <a href="#" >ÓCULOS DE SOL</a>

           <div className={suspenseMenu === "sol" ? "listIntensLinkAcive2" : "listIntensLinkDesactive2"} onMouseOver={() => handleMouse("sol")}>
           <a href="/produtos/Óculos de Gráu/Feminino">FEMININO</a>
            <a href="/produtos/Óculos de Gráu/Masculino">MASCULINO</a>
            <a href="/produtos/Óculos de Gráu/Kids">KIDS</a>
            <a href="/produtos/Óculos de Gráu">TODOS</a>
            </div>

              </div> 
            {/* <div className={position === true ? "unicIten2" : "unicIten"}onMouseOver={handleMouse}>
            <img src={top03} alt="Logo Sua Chave" />
              LENTES DE CONTATO
              </div>  */}
            <div className={position === true ? "unicIten2" : "unicIten"} onMouseOver={() => handleMouse("acessorios")}>
            <img src={top04} alt="Logo Sua Chave" />
             <a href="/acessorios">ACESSÓRIOS</a>

             <div className={suspenseMenu === "acessorios" ? "listIntensLinkAcive3" : "listIntensLinkDesactive3"} onMouseOver={() => handleMouse("acessorios")}>
            <a href="#">CORDÕES</a>
            <a href="#">FLANELAS</a>
            <a href="#">LIMPA LENTES</a>
            </div>
              </div> 
        </div>       
      </div>





    </UlAdm>
  )
}

export default RightNav2
