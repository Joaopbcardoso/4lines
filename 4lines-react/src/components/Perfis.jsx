export default function Perfis({nome, foto, bio, time, feed, banner}){
    return(
        <section className="perfil-css">
           <div id="inicio-banner">
            <img className="banner" src={banner}></img>
            <img className="time-fav" src={time}/>
            </div>
            <img className="foto-perfil" src={foto} />
            <h1 className="nome-perfil">{nome}</h1>
         
        </section>


    )
}