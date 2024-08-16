import './FeatureCard.css'; // Import CSS if needed
import PropTypes from 'prop-types';

const FeatureCard = ({ title, icon, description }) => (
  <div 
    style={{ backgroundColor: '#ECECF3' }} 
    className="bottom_portion rounded-xl shadow-lg flex flex-col items-center p-4 md:p-6 w-full max-w-sm mx-auto mb-6 md:mb-0"
  >
    <div className="flex items-center mb-4">
      <div className="text-3xl md:text-4xl mr-3 md:mr-4">{icon}</div>
      <h3 className="text-xl md:text-2xl font-semibold">{title}</h3>
    </div>
    <p className="text-gray-600 text-center text-sm md:text-base">{description}</p>
  </div>
);

export default FeatureCard;

// const FeatureCard = ({ title, icon, description }) => (
//   <div 
//     style={{ backgroundColor: '#ECECF3' }} 
//     className="bottom_portion rounded-xl shadow-lg flex flex-col items-center p-6 w-full max-w-sm"
//   >
//     <div className="flex items-center mb-5">
//       <div className="text-4xl mr-4">{icon}</div>
//       <h3 className="text-2xl font-semibold">{title}</h3>
//     </div>
//     <p className="text-gray-600 text-center">{description}</p>
//   </div>
// );

// // Define PropTypes to enforce prop types
// FeatureCard.propTypes = {
//   title: PropTypes.string.isRequired,
//   icon: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
// };

// export default FeatureCard;
