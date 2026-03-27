'use client';
import { useRouter } from 'next/navigation';

export function Maindis({ Name, pic, button = "Details", route }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(route);
  };

  return (
    <div className="main-card-wrapper">
      <div className="main-card">
        <img src={pic} alt={Name} className="main-card-img" />
        <div className="main-card-body">
          <h5 className="main-card-title">{Name}</h5>
          <button className="main-btn" onClick={handleClick}>
            {button}
          </button>
        </div>
      </div>
    </div>
  );
}
