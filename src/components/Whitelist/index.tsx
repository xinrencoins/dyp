import React from 'react'
import styled from 'styled-components'

import { ExternalLink, TYPE } from '../../theme'
import { AutoColumn } from '../Column'

const PageWrapper = styled(AutoColumn)`
  max-width: 700px;
  width: 100%;
  display: flex;
  justify-self: center;
  margin: auto;
`

const WhitelistForm = styled.div`
  // Header Color
  background-color: red;
  display: grid;
  grid-template-columns: 1fr 120px;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  top: 0;
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1rem;
  z-index: 2;
  margin-bottom: 50px;
  ${({ theme }) => theme.mediaWidth.upToMedium`
    grid-template-columns: 1fr;
    padding: 0 1rem;
    width: calc(100%);
    position: relative;
  `};
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
        padding: 0.5rem 1rem;
  `}
`

const MenuItemExternal = styled(ExternalLink).attrs({})`
  flex: 1;
  padding: 0.5rem 0.5rem;
  color: ${({ theme }) => theme.text1};
  text-decoration: none;
  background-color: white;
  text-align: center;
  margin-left: 5px;
  border-radius: 12px;
  margin: auto 5px;
  padding: 5px;
  :hover {
    color: red;
    cursor: pointer;
    text-decoration: none;
  }
  > svg {
    margin-right: 8px;
  }
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
        font-size: 15px;
  `}
`

const TextFont = styled.div`
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
        font-size: 15px;
        padding-left: 0px;
  `}
`

const TextFont2 = styled.div`
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
        font-size: 13px;
  `}
`

export default function Whitelist() {
  return (
    <WhitelistForm>
      <AutoColumn gap="md">
        <PageWrapper>
          <TYPE.white fontWeight={500} fontSize={25} style={{ margin: 'auto' }}>
            <TextFont>DeFi Yield Protocol Community Crowdsale is live!</TextFont>
          </TYPE.white>
          <MenuItemExternal id={`stake-nav-link`} href={'https://crowdsale.dyp.finance/'}>
            JOIN NOW
          </MenuItemExternal>
        </PageWrapper>
        <TYPE.white fontWeight={400} fontSize={17} style={{ margin: 'auto' }}>
          <TextFont2>
            <ExternalLink
              style={{ color: 'white', textDecoration: 'underline' }}
              href="https://github.com/dypfinance/DYP-staking-governance-dapp"
              target="_blank"
            >
              Staking and Governance Contracts Ready - Launch Within 2 Weeks (security audits results pending)
            </ExternalLink>
          </TextFont2>
        </TYPE.white>
      </AutoColumn>
    </WhitelistForm>
  )
}
