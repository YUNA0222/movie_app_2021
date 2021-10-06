
import propTypes from 'prop-types';

const foodILike = [
  {
    id: 1,
    name: 'chikin',
    image: 'https://img.insight.co.kr/static/2020/01/06/700/u193cc75jr3p97lg645z.jpg',
    rating: 4.9
  },
  {
    id: 2,
    name: 'gukbap',
    image: 'https://cdn.mindgil.com/news/photo/202008/69679_4073_1653.jpg',
    rating: 5.0
  }
]

Food.propTypes = {
  name: propTypes.string.isRequired,
  picture: propTypes.string.isRequired,
  rating: propTypes.number.isRequired,
};

//import Potato from "./Potato";//상대경로z
function App() {//메인 컴포넌트
  return (
    <div>
      
        {foodILike.map(
          dish =>(<Food key={dish.id} name = {dish.name} picture = {dish.image} rating={dish.rating} />)
        )};
      
    </div>
  );
}

function Food({name, picture, rating}){//서브 컴포넌트
  // {fav} = props
  return (
    <div>
      <h2>I love {name}</h2>
      <h4>{rating}/5.0 </h4>
      <img src = {picture} alt={name}/>
    </div>
  );
}

export default App;//외부에서 사용 가능하게 해줌