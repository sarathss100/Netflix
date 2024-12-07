import { useEffect, useRef, useState } from 'react';
import './TitleCards.css';
import { Link } from 'react-router-dom';

const TitleCards: React.FC = function({title, category}) {

    const [apiData, setApiData] = useState([]);
    const cardsRef = useRef();

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODJiYjYxMThlNjYwMzcwZTFhOTgwNjBmMjFlNTIwNyIsIm5iZiI6MTczMzU2MTYwOS41NjA5OTk5LCJzdWIiOiI2NzU0MGQwOWFiNmNjM2E0YzhmY2E2MDkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.oeJCjw-pI8H-xMvxin7brS-OPFiRzoGD2tSplkz8N3k'
        }
    };

    const handleWheel = function(event) {
        event.preventDefault();
        cardsRef.current.scrollLeft += event.deltaY;
    };

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${category ? category : 'now_playing'}?language=en-US&page=1`, options)
            .then(response => response.json())
            .then(response => setApiData(response.results))
            .catch(error => console.error(error));

        cardsRef.current.addEventListener('wheel', handleWheel)
    }, []);

    return (
        <div className='title-cards'>
            <h2>{title ? title : `Popular on Netflix`}</h2>
            <div className='card-list' ref={cardsRef}>
                {apiData.map((card, index) => {
                    return <Link to={`/player/${card.id}`} className='card' key={index}>
                        <img src={`https://image.tmdb.org/t/p/w500/` + card.backdrop_path} alt='movie image' />
                        <p>{card.original_title}</p>
                    </Link>
                })}
            </div>
        </div>
    );
};

export default TitleCards;