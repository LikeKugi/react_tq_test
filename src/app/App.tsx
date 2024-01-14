import { useEffect } from 'react';
import { getData } from '@/services/query.services';

function App() {

  useEffect(() => {
    const data = async () => {
      console.log(await getData({endpoint: '/posts', page: 1, per_page: 10}))
    }

    data()
  }, [])

  return (
    <>

    </>
  )
}

export default App
