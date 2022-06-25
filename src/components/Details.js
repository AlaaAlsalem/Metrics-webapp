import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { fetchCovidDataByCountry } from '../redux/Api';
import Header from './Header';

const Details = () => {
  const { name } = useParams();
  const [state, setState] = useState(null);
  useEffect(() => {
    const getDetails = async () => {
      const countryDetails = await fetchCovidDataByCountry(name);
      setState(countryDetails);
    };
    getDetails();
  }, []);
  return (
    <>
      {
      state ? (
        <div>
          <Header />
          <img src={state.countryInfo.flag} alt="country flag" />
          <h2 className="Name">{state.name}</h2>
          <h2 className="Name">
            <span>Population: </span>
            {state.population.toLocaleString()}
          </h2>
          <h2 className="Name">
            <span>Class: </span>
            {state.cases.toLocaleString()}
          </h2>
          <h2 className="Name">
            <span>Active: </span>
            {state.active.toLocaleString()}
          </h2>
          <h2 className="Name">
            <span>Tests: </span>
            {state.tests.toLocaleString()}
          </h2>
          <h2>{}</h2>
        </div>
      ) : (
        <div>Loading</div>
      )
      }
    </>
  );
};

export default Details;