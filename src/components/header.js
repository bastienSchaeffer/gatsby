import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

import Logo from '../images/gatsby-icon.png';

const HeaderWrapper = styled.header`
  background: #524763;
  margin-bottom: 0;
  img {
    margin: 0;
  }
`;

const HeaderContainer = styled.header`
  margin: 0 auto;
  max-width: 960px;
  padding: .5rem;
`;



const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      {/* <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1> */}

        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <img
          style={{ width: '100px' }}
          src={Logo}
          alt="Gatsby icon"/>
        </Link>


    </HeaderContainer>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
