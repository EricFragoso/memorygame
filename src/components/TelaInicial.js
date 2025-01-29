import { useNavigate } from 'react-router-dom';

const TelaInicial = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="h-[2160px] w-[3840px] bg-start bg-cover bg-center flex flex-col items-start justify-end"
      style={{ 
        backgroundImage: "url('/images/backgrounds/bgInicial.jpg')",
        backgroundSize: "3840px 2160px"

       }}
    >
      <button
        onClick={() => navigate('/regras')}
        className="transform hover:scale-105 transition-all h-[190px] w-[944px] duration-200 absolute top-[1714px] left-[2348px]"
        style={{ backgroundImage: "url('/images/btAvancar.png')" }}
      >

      </button>
      <p className="ml-5 text-2xl text-slate-500">CERTIFICADO DE AUTORIZAÇÃO SPA/ME N. ° 05.039571/2025</p>
      <p className="mb-5 ml-5 text-2xl text-slate-500">PROMOÇÃO N.° 2025/00064. Confira o regulamento em www.shoppingrecife.com.br</p>
    </div>
  );
};

export default TelaInicial;