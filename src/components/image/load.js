import styled from "styled-components";

const LoadImage = ({ srcURL }) => {
  return (
    <LoadImageStyle>
      <img src={srcURL} alt={srcURL} />
    </LoadImageStyle>
  );
};

const LoadImageStyle = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  svg {
    position: absolute;
    top: 0;
    left: 0;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export default LoadImage;
