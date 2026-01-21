import Form from "next/form";

const Search = () => {
  return (
    <div>
      <Form action="/products ">
        <input name="query" placeholder="search products" />
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};

export default Search;
