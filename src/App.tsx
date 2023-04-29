import { Route, Routes } from 'react-router-dom';
import { About } from 'src/pages/About';
import { Country } from 'src/pages/Country';
import { Top } from 'src/pages/Top';

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Top></Top>} />
      <Route path='/about' element={<About></About>} />
      <Route path='/country' element={<Country></Country>} />
    </Routes>
  );
};
