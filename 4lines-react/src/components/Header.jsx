import { useNavigate } from 'react-router-dom';

export default function Header(){
    const irPara= useNavigate();
    const handleClick = () => {
      irPara('/');
    };
    return(
        <header>
            <div className="flex-box">
                <div>
                    <button className='logo-button' onClick={handleClick}><img className="logo-header" src="4lines.png" alt="" /></button>    
                </div>
                <button className='addtime'>+</button>
                <div>
                    <img className="perfil" src="perfil.png" alt="" />
                </div>
            </div>
        </header>
    )
}