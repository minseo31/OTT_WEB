import { wishModalBoxStyle } from "../../style/modal/memberDelete";
import { messageModalStyle } from "../../style/modal/modal";
import { WishModalPropsType } from "../../type/props/propfile";
import SubTitle from "../atom/text/SubTitle";

// 찜목록 추가, 삭제 메세지 모달
const WishModal = ({ message, opacity }: WishModalPropsType) => {
  return (
    <div className={`${messageModalStyle} ${opacity}`}>
      <div className={`${wishModalBoxStyle}`}>
        <SubTitle text={`찜목록에서 ${message}되었습니다`} />
      </div>
    </div>
  );
};

export default WishModal;
