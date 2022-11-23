import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 10vh;
  padding-inline: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 10px gray;

  h1 {
    color: ${({theme}) => theme.colors.black};
    font-size: 1.5rem;
  }

  @media(min-width: 700px) {
    padding-inline: 3rem;

    h1 {
      font-size: 2.2rem;
    }
  }

  @media(min-width: 1024px) {
    h1 {
      font-size: 3rem;
    }
  }
`

export const PagesNavigators = styled.div`
  border: none;
  background: transparent;
  display: flex;
  gap: 1.4rem;
  
  p {
    color: ${({theme}) => theme.colors.black};
    font-size: 1.2rem;
    border-bottom: 2px solid transparent;
    padding-block: 1.8rem;
    transition: 0.2s;

    &:hover {
      border-color: ${({theme}) =>  theme.colors["green-primary"]};
    }
  }

  @media(min-width: 700px) {
    gap: 2rem;

    p {
      font-size: 1.6rem;
    }
  }

  @media(min-width: 900px) {
    gap: 3rem;

    p {
      font-size: 2rem;
    }
  }
`
export const HeaderButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div:nth-child(1) {
    display: none;
  }

  @media(min-width: 500px) {
    div:nth-child(1) {
      display: inherit;
    }
  }
`;

export const CartWrapper = styled.div`
  box-sizing: border-box;
  color: ${({theme}) => theme.colors.white};
  background-color: ${({theme}) => theme.colors["green-primary"]};
  padding: 0.5rem;
  border-radius: 6px;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  font-size: 1.125rem;
  transition: 0.2s;

  &:hover {
    background-color: ${({theme}) => theme.colors["green-primary-dark"]};

    span {
      background-color: ${({theme}) => theme.colors["green-primary-dark"]};
    }
  }

  span {
    transition: 0.2s;
    position: absolute;
    width: 1.45rem;
    height: 1.45rem;
    border-radius: 50%;
    top: calc(-1.35rem / 2);
    right: calc(-1.35rem / 2);
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors["green-primary"]};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.85rem;
    font-weight: 700;
  }
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    color: ${({theme}) => theme.colors["white"]};
    width: 1.6rem;
    height: 1.6rem;
  }

  @media(min-width: 700px) {
    font-size: 1.2rem;
    svg {
      width: 2rem;
      height: 2rem;
    }

    span {  
      width: 1.85rem;
      height: 1.85rem;
      top: calc(-1.85rem / 2);
      right: calc(-1.85rem / 2);
    }
  }

  @media(min-width: 1024px) {
    font-size: 1.8rem;
  }
`