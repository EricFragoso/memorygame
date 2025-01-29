import { useNavigate } from 'react-router-dom';

const TelaVitoria = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="h-[2160px] w-[3840px] bg-start bg-cover bg-center flex flex-col items-center justify-centert"
      style={{ backgroundImage: "url('/images/backgrounds/bgVitoria.png')" }}
      onClick={() => navigate('/')}
    >

    </div>
  );
};

export default TelaVitoria;