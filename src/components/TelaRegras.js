import { useNavigate } from 'react-router-dom';

const TelaRegras = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="h-[2160px] w-[3840px] bg-start bg-cover bg-center flex flex-col items-start justify-end"
      style={{ 
        backgroundImage: "url('/images/backgrounds/bgRegras.jpg')",
        backgroundSize: "3840px 2160px"
       }}
    >
        <button
          onClick={() => navigate('/jogo')}
          className="transform bg-center bg-no-repeat hover:scale-105 transition-all h-[285px] w-[1169px] duration-200 absolute top-[1682px] left-[2068px]"
          style={{ backgroundImage: "url('/images/btIniciar.png')" }}
          ></button>
        <div
          onClick={() => navigate('/jogofacil')}
          className="h-52 w-52 top-[830px] left-[490px] absolute"
        ></div>
        <p className="ml-5 text-2xl text-slate-500">CERTIFICADO DE AUTORIZAÇÃO SPA/ME N. ° 05.039571/2025</p>
        <p className="mb-5 ml-5 text-2xl text-slate-500">PROMOÇÃO N.° 2025/00064. Confira o regulamento em www.shoppingrecife.com.br</p>
    </div>
  );
};

export default TelaRegras;