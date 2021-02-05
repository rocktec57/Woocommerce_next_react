import styled from 'styled-components'

export const CartFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 840px;
  margin: 0 auto;
  width: 100%;
  min-height: 50vh;
`

export const EmptyCart = styled.h2`
  font-size: calc(2rem + 0.1vw);
  font-weight: 200;
  letter-spacing: 1px;
`
export const CartGrid = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: 1fr;
  width: 90%;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
export const CartTotals = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const CartLiFirstCol = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`

export const CartLiSecondCol = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const DescriptionRow = styled.div`
  @media screen and (max-width: 768px) {
    margin: 1rem 0;

    display: flex;
    flex-direction: column;
  }
`

export const Descriptor = styled.div`
  background: #fafafa;

  font-size: calc(1rem + 0.1vw);
  font-weight: bolder;
  color: ${({ theme }) => theme.primaryText};
  opacity: 0.9;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 120px;
`

export const QuantityBlock = styled.div`
  min-width: 200px;
`

export const CheckoutBtn = styled.button`
  margin-top: 3rem;
  font-size: calc(1.2rem + 0.1vw);
  background-color: #333333;
  border-color: #333333;
  color: #ffffff;
  cursor: pointer;
  padding: 0.5em 1.5em;
  text-decoration: none;
  font-weight: 600;
  display: inline-block;
  transition: all 0.2s ease-in-out;
`
