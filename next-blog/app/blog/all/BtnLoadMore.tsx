import React from 'react';

type BtnLoadMoreProps = {
  handleLoadMore: () => void;
  showButton: boolean;
};

const BtnLoadMore: React.FC<BtnLoadMoreProps> = ({
  handleLoadMore,
  showButton,
}) => {
  return showButton ? (
    <button
      onClick={handleLoadMore}
      className='text-xl text-white font-semibold rounded-full border-2 border-purple-600 bg-purple-600 hover:bg-purple-800 hover:border-purple-800 px-8 py-4'
    >
      Load More
    </button>
  ) : null;
};

export default BtnLoadMore;
