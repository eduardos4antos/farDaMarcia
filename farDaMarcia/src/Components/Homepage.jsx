import React from 'react';
import './Homepage.css';

function Homepage() {
  return (
    <div className='card-produto'>
      <div className='card'>
        <img src='ibuprofeno.png' alt='Ibuprofeno' />
        <h2>Ibuprofeno</h2>
        <p>
          O ibuprofeno é um anti-inflamatório não esteroidal (AINE),
          que age contra inflamações leves. Ele também tem efeito
          analgésico e antitérmico, por isso costuma ser indicado
          para o tratamento de diferentes tipos de dor,
          febre e após pequenas cirurgias.
        </p>
        <p className='preco'>Preço: R$ 12,00</p>
        <button>Comprar</button>
      </div>

      <div className='card'>
        <img src='dipirona.jpg' alt='Dipirona' />
        <h2>Dipirona</h2>
        <p>
          A dipirona é um fármaco que tem ação antipirética (febre) 
          e analgésica (dor), sendo indicada para dores de cabeça,
          dores musculares, cólica renal, cólica menstrual, 
          pós-operatórias e de outras origens.
        </p>
        <p className='preco'>Preço: R$ 10,00</p>
        <button>Comprar</button>
      </div>

      <div className='card'>
        <img src='paracetamol.png' alt='Paracetamol' />
        <h2>Paracetamol</h2>
        <p>
          Paracetamol reduz a febre atuando no centro regulador da
          temperatura no sistema nervoso central (SNC) e diminui
          a sensibilidade para a dor.
        </p>
        <p className='preco'>Preço: R$ 8,00</p>
        <button>Comprar</button>
      </div>

      <div className='card'>
        <img src='dorflex.png' alt='Dorflex' />
        <h2>Dorflex</h2>
        <p>
          Dorflex é um relaxante muscular utilizado para o alívio de dores e tensões, principalmente aquelas relacionadas a espasmos musculares.
        </p>
        <p className='preco'>Preço: R$ 15,00</p>
        <button>Comprar</button>
      </div>

      <div className='card'>
        <img src='glifage.png' alt='Grifage' />
        <h2>Grifage</h2>
        <p>
          Grifage é indicado para o tratamento da diabetes tipo 2, ajudando a controlar os níveis de açúcar no sangue.
        </p>
        <p className='preco'>Preço: R$ 30,00</p>
        <button>Comprar</button>
      </div>

      <div className='card'>
        <img src='Benegrip.webp' alt='Benegrip' />
        <h2>Benegrip</h2>
        <p>
          Benegrip é um medicamento indicado para o alívio dos sintomas do resfriado e gripe, como dor de cabeça, congestão nasal e febre.
        </p>
        <p className='preco'>Preço: R$ 18,00</p>
        <button>Comprar</button>
      </div>
    </div>
  );
}

export default Homepage;


