import styled from 'styled-components';

const Container = styled.div`
  width: 90%;
  max-width: 110rem;
  padding: 2rem 0;
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(32rem, 1fr));
  justify-content: space-between;
  grid-row-gap: 2.5rem;
  grid-column-gap: 3%;
  padding: 2rem 0;
`;

const FilterContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const FilterItem = styled.div`
  width: 20rem;

  :last-child {
    margin-left: 1.5rem;
  }
`;

export { Container, CardsContainer, FilterContainer, FilterItem };
