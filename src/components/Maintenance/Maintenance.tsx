import React from "react";
import styled from "styled-components";
// import getExternalLinkProps from "../../util/getExternalLinkProps";
import { Heading } from "../Heading";
import Text from "../Text/Text";
import { MaintenanceProps } from "./types";
import SocialNetworks from './SocialNetworks'
import MaintenancePreview from './assets/maintenance-preview'
import MaintenanceCloudRight from './assets/background-cloud-right'
import MaintenanceCloudLeft from './assets/background-cloud-left'

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  padding: 32px;
  box-sizing: border-box;
  overflow: hidden;

  @media screen and (max-width: 1024px) {
      display: flex;
      flex-direction: column-reverse;
  }
  @media screen and (max-width: 768px) {
    padding: 8px;
  }

`

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: 40%;

    @media screen and (max-width: 1024px) {
      width: 80%;
    }
    @media screen and (max-width: 480px) {
      width: 100%;
    }
`

const ImageWrapper = styled.div`
    & > img {
      width: 100%
    }
`

const CloudWrapper = styled.div`
    position: absolute;
    z-index: -1;
    & > img {
      width: 100%;
    }
    &.left {
      top: -200px;
      left: -200px;
    }
    &.right {
      right: -200px;
      bottom: -200px;
    }
    @media screen and (max-width: 480px) {
      &.left {
        top: -300px;
        left: -300px;
      }
      &.right {
        right: -300px;
        bottom: -300px;
      }
    }
`

const StyledHeading = styled(Heading)`
    font-weight: bold;
    font-size: 64px;
    line-height: 72px;

    @media screen and (max-width: 1024px) {
      text-align: center;
    }
    @media screen and (max-width: 768px) {
        font-size: 56px;
        line-height: 64px;
    }
    @media screen and (max-width: 480px) {
        font-size: 32px;
        line-height: 40px;
    }
`

const StyledText = styled(Text)`
    width: 70%;
    font-size: 24px;
    line-height: 30px;
    margin: 24px 0 30px 0;
    letter-spacing: 0.3px;
    color: #8990A5;
    @media screen and (max-width: 1024px) {
      text-align: center;
      margin: 24px auto 32px auto;
      width: 90%;
    }
    @media screen and (max-width: 480px) {
        font-size: 16px;
        line-height: 20px;
        width: 100%;
    }
`



const Maintenance: React.FC<MaintenanceProps> = () => {
  return (
    <StyledWrapper>
      <InfoWrapper>
        <StyledHeading>Sorry, we're under maintenance</StyledHeading>
        <StyledText>We'll be back shortly. In the meantime, check out our social networks.</StyledText>
        <SocialNetworks />
      </InfoWrapper>
      <ImageWrapper>
        <MaintenancePreview />
      </ImageWrapper>


      <CloudWrapper className="left">
        <MaintenanceCloudLeft />
      </CloudWrapper>
      <CloudWrapper className="right">
        <MaintenanceCloudRight />
      </CloudWrapper>
      
    </StyledWrapper>
  )
};

Maintenance.defaultProps = {

};

export default Maintenance;
