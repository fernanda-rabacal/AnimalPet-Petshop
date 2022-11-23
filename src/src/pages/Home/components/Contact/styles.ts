import styled from "styled-components";

export const ContactContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: left;

  header {
    margin-bottom: 3.2rem;
    
    h2 {
      font-size: 3rem;
      line-height:3.9rem;
  
      color: ${({ theme }) => theme.colors.headline};
      margin-bottom: 6rem;
    }
  }


  ul {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    margin-bottom: 3.2rem;
    
    li {
      display: flex;
      gap: 0.8rem;
      font-size: 2rem;
      margin-bottom: 1.2rem;
      color: ${({ theme }) => theme.colors.paragraph};
    }
  }

  iframe {
    border: 0;
    border-radius: 2rem;
    
    width: 45rem;
    height: 35rem;
  }

  @media(min-width: 1024px) {
    flex-direction: row;

    iframe {
      width: 55rem;
      height: 45rem;
    }
  }
`