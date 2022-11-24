import { useEffect, useState } from 'react';
import Video from '../components/Video';
// import Video from '../components/VideoClass';
// import Video from '../components/VideoClassES7';
import { data } from '../utils/data';
import { fetchData } from '../utils/fetchData';

const Videos = () => {
  const [datos, setDatos] = useState([]);

  //componentDidMount
  useEffect(() => {
    fetchData(2000, data)
      .then(response => setDatos(data))
      .catch(err => console.log(err))
  }, [])

  const deleteItem = (id) => {
    let newData = datos.filter(item => item.id !== id)
    setDatos(newData)
  }

  return (
    <>
    {
    datos.map(item => (
      <Video
        key={item.id}
        id={item.id}
        deleteItem={deleteItem}
        title={item.title}
        rate={item.rate}
        dateAdded={item.dateAdded}
        channel={item.channel}
        thumbnail={item.thumbnail}
        description={item.description} />
    ))
    }
    </>
  );
}

export default Videos;