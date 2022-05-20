import styled from 'styled-components';

export default function Header () {
    return (
        <Container>CINEFLEX</Container>
    )
}

const Container = styled.div`
	width: 100%;
	height: 67px;

    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
	background-color: #C3CFD9;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    color: #E8833A;
`;