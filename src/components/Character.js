// function Character(character) {
//     return (
//     <div className='col-3'>
//     <div className='card'>
   
// <img
//     src={character.image}
//     alt={character.name}
//     className='card-img-top'
//     />
//     <div className='card-body'>
//     <h3 className='card-title'>{character.name}</h3>
//     <p>{`Origin: ${character.origin && character.origin.name}`}</p>
//     </div>
//     </div>
//     </div>
// );
// };
// export default Character;

function Character({name,origin,image}) {
    return (
    <div className='col-3'>
    <div className='card'>
   
<img
    src={image}
    alt={name}
    className='card-img-top'
    />
    <div className='card-body'>
    <h3 className='card-title'>{name}</h3>
    <p>{`Origin: ${origin && origin.name}`}</p>
    </div>
    </div>
    </div>
);
};
export default Character;