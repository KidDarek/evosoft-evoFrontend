const SearchBar = (props) => {
  return (
    <div style={{ padding: "10px" }}>
      <form onSubmit={props.handleSubmit}>
        <input
          style={{ width: "250px" }}
          type="text"
          value={props.searchString}
          onChange={props.handleSearch}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
