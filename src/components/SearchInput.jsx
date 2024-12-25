import React from 'react';

const SearchInput = (props) => {

  const {onSearchSubmit} = props;

  const [entry, setEntry] = React.useState('');

  const onInputChange = (event) => {
    setEntry(event.target.value);
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSearchSubmit(entry);
  }

  return (
    <div className={'ui segment'}>
      <form onSubmit={onFormSubmit} className={'ui form'}>
        <div className={'ui field'}>
          <div className={'ui massive icon input'}>
            <input
              type="text"
              placeholder="Search..."
              onChange={onInputChange}
              value={entry}
            />
            <i className={'search icon'}></i>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchInput;