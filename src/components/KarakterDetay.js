import './KarakterDetay.css';
export default function KarakterDetay({char, handleClick}) {
    return (
        
        <div className="karakter-detay">
           <div className="detay-data"><p className='detay-tpe'>Name:</p><p className='detay-content'>{char.name}</p></div>
           <div className="detay-data"><p className='detay-tpe'>Gender:</p><p className='detay-content'>{char.gender}</p></div>
           <div className="detay-data"><p className='detay-tpe'>Height:</p><p className='detay-content'>{char.height}cm</p></div>
           <div className="detay-data"><p className='detay-tpe'>Mass:</p><p className='detay-content'>{char.mass}kg</p></div>
           <div className="detay-data"><p className='detay-tpe'>Hair Color:</p><p className='detay-content'>{char.hair_color}</p></div>
           <div className="detay-data"><p className='detay-tpe'>Skin Color:</p><p className='detay-content'>{char.skin_color}</p></div>
           <div className="detay-data"><p className='detay-tpe'>Birth Year:</p><p className='detay-content'>{char.birth_year}</p></div>
           
        </div>
        
    );
    }
