import React, { useState } from "react";
import {
  dropdownBottomcontentsSecStyle,
  dropdownBottomcontentsStyle,
  dropdownBottomCoverStyle,
  dropdownButtonStyle,
} from "../../style/dropDownStyle";
import { dropdownData, signupData3 } from "../../data/loginDatas";
import { bankLogoStyle, shortLogoStyle } from "../../style/atom/logo";
import MainText from "../atom/text/MainText";

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const [selectedBank, setSelectedBank] = useState("은행 선택");

  const onSelectBank = (bank: string) => {
    setSelectedBank(bank);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left z-[99] ">
      <div>
        <button
          type="button"
          className={dropdownButtonStyle}
          onClick={toggleDropdown}
        >
          {selectedBank} <span className="text-main_Red">▼</span>
        </button>
      </div>

      {isOpen && (
        <div className={dropdownBottomCoverStyle}>
          <div className="flex flex-col py-1 items-center">
            <div className={dropdownBottomcontentsSecStyle}>
              <img
                className={`${bankLogoStyle}`}
                src="/image/banklogo/shc_symbol_ci.png"
                alt=""
              />
              <span
                className={dropdownBottomcontentsStyle}
                onClick={() => onSelectBank(dropdownData.bank1)}
              >
                <MainText text={dropdownData.bank1} align="text-center" />
              </span>
            </div>

            <div className={dropdownBottomcontentsSecStyle}>
              <img
                className={`${bankLogoStyle}`}
                src="/image/banklogo/국민은행로고.png"
                alt=""
              />
              <span
                className={dropdownBottomcontentsStyle}
                onClick={() => onSelectBank(dropdownData.bank2)}
              >
                <MainText text={dropdownData.bank2} align="text-center" />
              </span>
            </div>

            <div className={dropdownBottomcontentsSecStyle}>
              <img
                className={`${bankLogoStyle}`}
                src="/image/banklogo/하나은행images.png"
                alt=""
              />
              <span
                className={dropdownBottomcontentsStyle}
                onClick={() => onSelectBank(dropdownData.bank3)}
              >
                <MainText text={dropdownData.bank3} align="text-center" />
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
