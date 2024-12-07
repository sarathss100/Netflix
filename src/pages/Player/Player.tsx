import './Player.css';
import back_arrow_icon from '../../assets/back_arrow_icon.png';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Player: React.FC = function() {

    const {id} = useParams();
    const navigate = useNavigate();

    const [apiData, setApiData] = useState({
        name: '',
        key: '',
        publihed_at: '',
        typeof: ''
    });

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODJiYjYxMThlNjYwMzcwZTFhOTgwNjBmMjFlNTIwNyIsIm5iZiI6MTczMzU2MTYwOS41NjA5OTk5LCJzdWIiOiI2NzU0MGQwOWFiNmNjM2E0YzhmY2E2MDkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.oeJCjw-pI8H-xMvxin7brS-OPFiRzoGD2tSplkz8N3k'
      }
    };

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
          .then(response => response.json())
          .then(response => setApiData(response.results[0]))
          .catch(error => console.error(error));
    }, [id]);

        return (
            <div className='player'>
               <img src={back_arrow_icon} alt='back arrow icon' onClick={() => {navigate(-2)}} />
               <iframe width='90%' height='90%' src={`http://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0' allowFullScreen></iframe>
               <div className='player-info'>
                   <p>{apiData.publihed_at}</p>
                    <p>{apiData.name}</p>
                    <p>{apiData.typeof}</p>
                </div>
            </div>
        );
    };

export default Player;