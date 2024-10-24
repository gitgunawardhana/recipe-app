import { Link } from 'react-router-dom';
import Categories from '../../components/Categories/Categories';
import RecipeList from '../../components/RecipeList/RecipeList';

const Dashboard = () => {
  
  return (
    <div className="">
      <Categories />
      <RecipeList />
    </div>
  );
};

export default Dashboard;
