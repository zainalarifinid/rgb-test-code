
import NewItemTag from '../assets/image/common/new-item.svg';
import BestSellerTag from '../assets/image/common/best-seller-item.svg';
import HotItemTag from '../assets/image/common/hot-item.svg';

export default function SpecialIcon(props) {

  const isNew = props.isNew;
  const isBestSeller = props.rating >= 4.0 && props.numOfReviews >= 25;
  const isHotItem = isNew && isBestSeller;

  if(isHotItem) {
    return (
      <img src={HotItemTag} alt='Hot Item' />
    )
  }
  if(isNew) {
    return (
      <img src={NewItemTag} alt='New Item' />
    )
  }
  if(isHotItem) {
    return (
      <img src={BestSellerTag} alt='Best Seller' />
    )
  }

}
