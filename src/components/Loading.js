import React from 'react';
import styled from 'styled-components';

const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 21rem;
  height: 448px;
  background-color: #f0f0f0;
  color: #FFF;
  border: 1px solid;
  box-sizing: border-box;
  animation: fill 2s linear infinite alternate;
`;

const Loading = () => {
  return (
    <LoadingWrapper>
      {/* You can customize the loading spinner or message */}
      <div className='artgriditem'>Loading...</div>
    </LoadingWrapper>
  );
};

export default Loading;