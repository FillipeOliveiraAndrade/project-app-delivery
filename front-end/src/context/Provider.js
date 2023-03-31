import { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import { requestData } from '../services/requests';

export default function Provider({ children }) {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await requestData('/sales');
      setSales(result);
    }

    fetchData();
  }, []);

  const contextValue = useMemo(() => ({
    sales,
  }), [sales]);

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
