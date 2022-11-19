import styled from "styled-components";

export const OurProductsContainer = styled.div`
  section {
    display: flex;
    padding-bottom: 5rem;
    margin-bottom: 5rem;
  }
  
  section:not(:last-child) {
    border-bottom: 1px solid ${({theme}) => theme.colors["base-button"]};
  }  
`
export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;

  @media(min-width: 550px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media(min-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media(min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media(min-width: 1244px) {
    grid-template-columns: repeat(5, 1fr);
  }
`