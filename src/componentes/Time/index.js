import Colaborador from '../Colaborador';
import hexToRgba from 'hex-to-rgba';
import './time.css';

const Time = ({ mudarCor, time, colaboradores, aoDeletar, aoFavoritar }) => {
    return (        colaboradores.length > 0 && <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(time.cor, '0.6') }}>
            <input onChange={evento => mudarCor(evento.target.value, time.id)} type='color' className='cor-input' value={time.cor}/>
            <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => <Colaborador 
                    key={indice} 
                    colaborador={colaborador} 
                    corDeFundo={time.cor} 
                    aoDeletar={aoDeletar}
                    aoFavoritar={aoFavoritar}
                />)}
            </div>
        </section>

    )
}

export default Time