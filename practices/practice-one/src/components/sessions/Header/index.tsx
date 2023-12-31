import { ChangeEvent, memo } from 'react';
import Logo from '@components/sessions/Logo';
import Search from '@components/sessions/Search';
import DarkTheme from '@components/sessions/Theme';

interface HeaderProps {
  isOpenCategoriesOnMobile: boolean;
  onToggleCategoriesOnMobile: () => void;
  valueSearch: string;
  onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isChangeDarkTheme: boolean;
  onToggleThemePage: () => void;
}

const Header = memo(
  ({
    isOpenCategoriesOnMobile,
    onToggleCategoriesOnMobile,
    valueSearch,
    onSearchChange,
    isChangeDarkTheme,
    onToggleThemePage,
  }: HeaderProps): JSX.Element => {
    return (
      <header className={`header-site ${isOpenCategoriesOnMobile ? 'open' : ''}`}>
        <Logo onToggleCategoriesOnMobile={onToggleCategoriesOnMobile} />
        <section className="header-right">
          <Search valueSearch={valueSearch} onSearchChange={onSearchChange} />
          <DarkTheme isChangeDarkTheme={isChangeDarkTheme} toggleThemePage={onToggleThemePage} />
        </section>
      </header>
    );
  }
);

export default Header;
