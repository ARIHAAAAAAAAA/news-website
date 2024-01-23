import { SearchInput, StyledSelect, LanguageOption } from "../../style/navBarStyle";
import { useNavigate } from 'react-router-dom';
import { Button } from "../../style/buttonStyle";
import { Nav } from "../../style/navStyle";


function NavBar() {
    const navigate = useNavigate()
    return (
        <>
            <Nav>
                <Button onClick={() => navigate("/login")}>log in</Button>
                <Button onClick={() => navigate("/register")}>register</Button>
                <Button>form</Button>
                <SearchInput placeholder="Search" />
                <StyledSelect>
                    <LanguageOption value="english">English</LanguageOption>
                    <LanguageOption value="spanish">Spanish</LanguageOption>
                    <LanguageOption value="french">French</LanguageOption>
                </StyledSelect>

            </Nav>
        </>
    )
}

export default NavBar