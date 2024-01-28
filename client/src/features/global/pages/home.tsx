import MainHome from "../layout/main/mainHome";
import NavBar from "../layout/header/Nav"
import NewsEntrance from "../components/TiteleWebside";
import {useTheme} from "../style/themes/ThemeProvider";
// import {ButtonTheme}  from "../style/themes/darckMode";

export default function Home() {
  const { mode, toggleTheme } = useTheme();
  return (
    <>
      <div style={{backgroundColor: mode === "dark" ? "black" : "white" ,display:"flex" }}>
    
        <NavBar />
      {/* <ButtonTheme onClick={toggleTheme}>
        {mode === "light" ? "dark" : "light"}
      </ButtonTheme> */}
        <NewsEntrance />
      </div>
        <MainHome />
    </>
  );

};

