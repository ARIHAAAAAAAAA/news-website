import MainHome from "../layout/main/mainHome";
import NavBar from "../layout/header/Nav"
import NewsEntrance from "../components/TiteleWebside";
import {useTheme} from "../style/themes/ThemeProvider";
import {ButtonStyled}  from "../style/themes/darckMode";

export default function Home() {
  const { mode, toggleTheme } = useTheme();
  return (
    <>
      <div style={{backgroundColor: mode === "dark" ? "black" : "white" }}>
    
      <ButtonStyled onClick={toggleTheme}>
        {mode === "light" ? "dark" : "light"}
      </ButtonStyled>
        <NavBar />
        <NewsEntrance />
        <MainHome />
      </div>
    </>
  );

};

