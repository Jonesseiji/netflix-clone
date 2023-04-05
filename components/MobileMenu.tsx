import {
  MENU_BROWSE_BY_LANG,
  MENU_HOME,
  MENU_MY_LIST,
  MENU_NEW_AND_POPULAR,
  MENU_SERIES,
} from "@/constants/strings";

interface MobileMenuProps {
  visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <div
      className="
    bg-black
    w-56
    absolute
    top-8
    left-0
    py-5
    flex-col
    border
    border-gray-900
    flex
    "
    >
      <div className="flex flex-col gap-4">
        <div className="px-3 text-center text-white hover:underline">
          {MENU_HOME}
        </div>
        <div className="px-3 text-center text-white hover:underline">
          {MENU_SERIES}
        </div>
        <div className="px-3 text-center text-white hover:underline">Films</div>
        <div className="px-3 text-center text-white hover:underline">
          {MENU_NEW_AND_POPULAR}
        </div>
        <div className="px-3 text-center text-white hover:underline">
          {MENU_MY_LIST}
        </div>
        <div className="px-3 text-center text-white hover:underline">
          {MENU_BROWSE_BY_LANG}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
