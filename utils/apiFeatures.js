class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }
  search = () => {
    const location = this.queryString.location
      ? {
          address: {
            $regex: this.queryString.location,
            $options: "i",
          },
        }
      : {};

    this.query = this.query.find({ ...location });
    return this;
  };

  filter = () => {
    const queryCopy = { ...this.queryString };
    // Remove Fields from query
    const queryFields = ["location", "page"];
    
    queryFields.forEach((fld) => delete queryCopy[fld]);
    // console.log(queryCopy)
    this.query = this.query.find(queryCopy);
    
    return this;
  };

  pagination = (countPerPage) => {
    const currPage = Number(this.query.page) || 1;
    const skipResults = countPerPage * (currPage - 1);
    this.query = this.query.limit(countPerPage).skip(skipResults);
    return this;
  };
}

export default APIFeatures;
