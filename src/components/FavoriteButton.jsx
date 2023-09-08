
import FavoriteIcon from '../assets/image/common/favorite.svg';
import FavoriteIconFilled from '../assets/image/common/favorite-filled.svg';

export default function FavoriteButton(props) {

  const isFavorite = props.isWishlist;
  const size = props.size ?? 90;

  if(isFavorite) {
    return (
      <a href="" onClick={props.handleFavorite} >
        <img src={FavoriteIconFilled} alt="Favorite" width={size} />
      </a>  
    );
  }

  return (
    <a href="" onClick={props.handleFavorite} >
      <img src={FavoriteIcon} alt="Favorite" width={size} />
    </a>
  )
}
