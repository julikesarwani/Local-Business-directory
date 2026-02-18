import { useNavigate } from 'react-router-dom';

const BusinessCard = ({ business }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    const businessUrl  = `/business/${business.id}`;
    const newWindow  = window.open('','_blank');
    newWindow.location.href = businessUrl;
  };

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
      onClick={handleCardClick}
    >
      <img
        src={business.image}
        alt={business.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{business.name}</h3>
        <p className="text-sm text-gray-500">{business.description}</p>
        <p className="text-sm text-gray-500">Rating: {business.rating} ⭐</p>
      </div>
    </div>
  );
};

export default BusinessCard;
