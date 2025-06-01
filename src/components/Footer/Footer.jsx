import styled from "styled-components";

const StyleFooter = styled.div`
  background-color: #4361ee;
  color: #fff;
  padding: 1rem;
  text-align: center;

  h2 {
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    /*
   * Nothing TODO here.
   * We dont change styling footer. 
   */
  }

  /* Large Screen */
  @media (min-width: 992px) {
    /*
   * Nothing TODO here.
   * We dont change styling footer. 
   */
  }
`;
function Footer() {
  return (
    <StyleFooter>
      <footer>
        <h2>Movie App</h2>
        <p>Created by Kafi</p>
      </footer>
    </StyleFooter>
  );
}
export default Footer;
