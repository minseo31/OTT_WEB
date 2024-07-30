import { MdPlayArrow } from 'react-icons/md';
import { iconStyle } from '../../style/atom/icon';
import { ArrowiconPropsType } from '../../type/props/atom';

// 화살표 아이콘 - direction은 rotate방향 값입니다. (rotate-180 or rotate-0)
const Arrowicon = ({ direction, onClick }: ArrowiconPropsType) => {
  return (
    <div className={`${iconStyle} ${direction} z-[98] `} onClick={onClick}>
      <MdPlayArrow />
    </div>
  );
};

export default Arrowicon;
