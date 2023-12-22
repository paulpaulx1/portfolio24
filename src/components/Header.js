import React from 'react';

export default ({title, slideDir}) => {
  return (
    <>
      <h1 className={`${slideDir} art__title`}><a href={`/${title}`} className={'art__title'}>{title}</a></h1>
    </>
  );
};
